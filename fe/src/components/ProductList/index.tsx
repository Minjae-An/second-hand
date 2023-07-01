import { useState, useEffect } from 'react';

import { REQUEST_URL } from '@constants/requestUrl';

import useFetch, { RESPONSE_STATE, REQUEST_METHOD } from '@hooks/useFetch';
import useIntersectionObserver from '@hooks/useIntersectionObserver';

import Spinner from '@components/common/Spinner';
import ProductListItem, { ProductListItemProps } from '@components/ProductListItem';
import Loading from '@components/Loading';
import * as S from './style';

interface PostsData {
  posts: { content: ProductListItemProps[]; last: boolean };
}

interface ProductListProps {
  regionId: number;
  categoryId?: number;
}

const ProductList = ({ regionId, categoryId }: ProductListProps) => {
  const [pageNum, setPageNum] = useState(0);
  const [postList, setPostList] = useState<ProductListItemProps[]>([]);
  const token = localStorage.getItem('Token');
  const options: RequestInit = {
    method: REQUEST_METHOD.GET,
    headers: token ? { Authorization: `Bearer ${token}` } : {},
  };

  const { fetchData, responseState, data } = useFetch<PostsData>({
    url: `${REQUEST_URL.POSTS}?page=${pageNum}&size=10${categoryId ? `&category=${categoryId}` : ''}${
      regionId ? `&region=${regionId}` : ''
    }`,
    options,
    skip: true,
  });

  const intersectHandler: IntersectionObserverCallback = ([entry]) => {
    if (!entry.isIntersecting) return;

    if (responseState !== RESPONSE_STATE.SUCCESS || data?.posts.last) return;

    setPageNum((previousPageNum) => previousPageNum + 1);
  };

  const { setTarget } = useIntersectionObserver({ intersectHandler });

  useEffect(() => {
    fetchData();
  }, [pageNum]);

  useEffect(() => {
    if (responseState !== RESPONSE_STATE.SUCCESS || !data) return;

    setPostList((previous) => [...previous, ...data.posts.content]);
  }, [responseState, data]);

  return (
    <S.ProductList>
      {responseState === RESPONSE_STATE.SUCCESS && data && (
        <>
          {postList.length > 0 ? (
            postList.map((item) => <ProductListItem key={item.id} {...item} />)
          ) : (
            <S.ProductNotFound>해당 상품이 없어요.</S.ProductNotFound>
          )}

          {!data.posts.last && <S.Target ref={setTarget}></S.Target>}
        </>
      )}

      {responseState === RESPONSE_STATE.LOADING && (
        <>
          {postList.length > 0 ? (
            <>
              {postList.map((item) => (
                <ProductListItem key={item.id} {...item} />
              ))}
              <S.SpinnerLayout>
                <Spinner />
              </S.SpinnerLayout>
            </>
          ) : (
            <Loading text="상품 목록을 불러오고 있습니다." />
          )}
        </>
      )}

      {responseState === RESPONSE_STATE.ERROR && <h1>Error</h1>}
    </S.ProductList>
  );
};

export default ProductList;
