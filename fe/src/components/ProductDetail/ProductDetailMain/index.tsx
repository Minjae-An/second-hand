import { useState } from 'react';

import { ICON_NAME, REQUEST_URL } from '@constants/index';
import { getTextWithTimeStamp } from '@utils/index';

import useFetch, { REQUEST_METHOD } from '@hooks/useFetch';

import Icon from '@components/common/Icon';
import Dropdown from '@components/common/Dropdown';
import * as S from './style';

interface Badge {
  id: number;
  state: string;
  backgroundColor: string | null;
  fontColor: string | null;
}

interface BadgesData {
  badges: Badge[];
}

interface ProductDetailMainProps {
  id: number;
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
}

const ProductDetailMain = ({
  id,
  sellerName,
  title,
  category,
  postedAt,
  content,
  chatCount,
  interestCount,
  viewCount,
  badge,
  photoUrls,
  isSeller,
}: ProductDetailMainProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [productState, setProductState] = useState(badge.state);

  const { fetchData: getBadges, data: badgesData } = useFetch<BadgesData>({
    url: REQUEST_URL.BADGES,
    options: {
      method: REQUEST_METHOD.GET,
      headers: { Authorization: `Bearer ${localStorage.getItem('Token')}` },
    },
    skip: true,
  });
  const { responseState: patchProductState, fetchData: patchProduct } = useFetch({
    url: `${REQUEST_URL.POSTS}/${id}`,
    options: {
      method: REQUEST_METHOD.PATCH,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('Token')}`,
      },
    },
    skip: true,
  });

  const openDropdownHandler = async () => {
    if (!badgesData) await getBadges();

    setIsDropdownOpen(!isDropdownOpen);
  };

  const changeProductState = async ({ target }: React.MouseEvent<HTMLElement>) => {
    if (!(target instanceof HTMLDivElement)) return;

    const clickedProductState = target.id;
    if (clickedProductState === productState) return;

    const clickedProductStateId = badgesData?.badges.find(({ state }) => state === clickedProductState)?.id;
    await patchProduct(JSON.stringify({ state: clickedProductStateId }));

    if (patchProductState === 'ERROR') {
      alert('상품 상태 수정에 실패했습니다.');
      return;
    }

    setProductState(clickedProductState);
  };

  return (
    <>
      <S.Product>
        <S.ProductImgListLayout>
          <S.ProductImgList>
            <S.ProductImg src={photoUrls[0]} />
          </S.ProductImgList>
        </S.ProductImgListLayout>

        <S.ProductInfo>
          <S.SellerInfo>
            <span>판매자 정보</span>
            <span>{sellerName}</span>
          </S.SellerInfo>

          {isSeller && (
            <S.DropdownToggleButton onClick={openDropdownHandler}>
              <span>{productState}</span>
              <Icon name={ICON_NAME.CHEVRON_DOWN} />
              {isDropdownOpen && badgesData && (
                <Dropdown
                  selectedValue={productState}
                  options={badgesData.badges.map(({ id, state }) => ({
                    id,
                    value: state,
                    handler: (e: React.MouseEvent<HTMLElement>) => changeProductState(e),
                  }))}
                ></Dropdown>
              )}
            </S.DropdownToggleButton>
          )}

          <S.Title>{title}</S.Title>

          <S.CategoryAndTime>
            {getTextWithTimeStamp({ text: category ?? '', time: postedAt ?? '' })}
          </S.CategoryAndTime>

          <S.Content>{content}</S.Content>

          <S.CountLayout>
            <S.Count>채팅 {chatCount}</S.Count>
            <S.Count>관심 {interestCount}</S.Count>
            <S.Count>조회 {viewCount}</S.Count>
          </S.CountLayout>
        </S.ProductInfo>
      </S.Product>
    </>
  );
};

export default ProductDetailMain;
