import { ICON_NAME, PATH } from '@constants/index';
import { formatMoney, getTextWithTimeStamp } from '@utils/index';

import Icon from '@components/common/Icon';
import * as S from './style';

export interface ProductListItemProps {
  id: number;
  title: string;
  photoUrl: string | null;
  region: {
    id: number;
    name: string;
  };
  postedAt: string;
  badge: {
    id: number;
    state: '광고' | '예약 중' | '판매 중' | '판매 완료' | null;
    fontColor: string | null;
    backgroundColor: string | null;
  };
  price: number | null;
  chattingCount: number;
  interestCount: number;
  interested: boolean;
}

const ProductListItem = ({
  id,
  title,
  photoUrl,
  region,
  postedAt,
  badge,
  price,
  chattingCount = 0,
  interestCount = 0,
  interested,
}: ProductListItemProps) => {
  return (
    <S.ProductListItem>
      {photoUrl && <S.Img src={photoUrl} alt={title} />}
      <S.CustomLink to={`${PATH.PRODUCT_DETAIL}/${id}`}>
        <S.ItemInformation>
          <S.Title>{title}</S.Title>
          <S.LocationAndTime>{getTextWithTimeStamp({ text: region.name, time: postedAt })}</S.LocationAndTime>
          <S.StateAndPrice>
            {badge.state !== '판매 중' && (
              <S.StateBadge fontcolor={badge.fontColor} backgroundcolor={badge.backgroundColor}>
                {badge.state}
              </S.StateBadge>
            )}
            {price && <S.Price>{formatMoney(price)}</S.Price>}
          </S.StateAndPrice>
          <S.ChatAndLike>
            {chattingCount > 0 && (
              <S.IconTextBox>
                <Icon name={ICON_NAME.MESSAGE} />
                <span>{chattingCount}</span>
              </S.IconTextBox>
            )}
            {interestCount > 0 && (
              <S.IconTextBox>
                <Icon name={interested ? ICON_NAME.FULL_LIKE : ICON_NAME.LIKE} />
                <span>{interestCount}</span>
              </S.IconTextBox>
            )}
          </S.ChatAndLike>
        </S.ItemInformation>
      </S.CustomLink>
    </S.ProductListItem>
  );
};

export default ProductListItem;
