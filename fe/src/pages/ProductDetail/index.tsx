import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { REQUEST_URL } from '@constants/index';

import useFetch, { REQUEST_METHOD } from '@hooks/useFetch';

import ProductDetailHeader from '@components/ProductDetail/ProductDetailHeader';
import ProductDetailMain from '@components/ProductDetail/ProductDetailMain';
import ProductDetailToolBar from '@components/ProductDetail/ProductDetailToolBar';

interface PostDetailData {
  id: number;
  sellerId: number;
  sellerName: string;
  title: string;
  category: string;
  postedAt: string;
  content: string;
  chatCount: number;
  interestCount: number;
  viewCount: number;
  price: number;
  badge: { id: number; state: string };
  photoUrls: string[];
  isSeller: boolean;
  interested: boolean;
}

const ProductDetail = () => {
  const { id: postId } = useParams();

  const { responseState: getProductState, data: productData } = useFetch<PostDetailData>({
    url: `${REQUEST_URL.POSTS}/${postId}`,
    options: {
      method: REQUEST_METHOD.GET,
      headers: { Authorization: `Bearer ${localStorage.getItem('Token')}` },
    },
  });

  const [isInterested, setIsInterested] = useState(false);
  const [interestCount, setInterestCount] = useState(0);

  const { responseState: postInterestedState, fetchData: postInterested } = useFetch({
    url: `${REQUEST_URL.USERS}/${productData?.id}`,
    options: {
      method: REQUEST_METHOD.POST,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('Token')}`,
      },
    },
    skip: true,
  });
  const { responseState: deleteInterestedState, fetchData: deleteInterested } = useFetch({
    url: `${REQUEST_URL.USERS}/${productData?.id}`,
    options: {
      method: REQUEST_METHOD.DELETE,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('Token')}`,
      },
    },
    skip: true,
  });

  const registerInterested = async () => {
    await postInterested();

    if (postInterestedState === 'ERROR') {
      alert('관심 상품 등록에 실패했습니다');
      return;
    }

    setIsInterested(true);
    setInterestCount(interestCount + 1);
  };

  const unregisterInterested = async () => {
    await deleteInterested();

    if (deleteInterestedState === 'ERROR') {
      alert('관심 상품 삭제에 실패했습니다');
      return;
    }

    setIsInterested(false);
    setInterestCount(interestCount - 1);
  };

  const updateIsInterestedHandler = () => {
    if (!isInterested) {
      registerInterested();
      return;
    }

    unregisterInterested();
  };

  useEffect(() => {
    setIsInterested(productData?.interested ?? false);
    setInterestCount(productData?.interestCount ?? 0);
  }, [productData]);

  return (
    <>
      {getProductState === 'ERROR' && <div>error</div>}
      {getProductState === 'LOADING' && <></>}
      {getProductState === 'SUCCESS' && productData && (
        <>
          <ProductDetailHeader postId={productData.id} isSeller={productData.isSeller} />
          <ProductDetailMain {...productData} interestCount={interestCount} />
          <ProductDetailToolBar
            isInterested={isInterested}
            updateIsInterestedHandler={updateIsInterestedHandler}
            {...productData}
          />
        </>
      )}
    </>
  );
};

export default ProductDetail;
