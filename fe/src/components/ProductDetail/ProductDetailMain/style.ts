import styled from 'styled-components';

import Button from '@components/common/Button';

const Product = styled.section`
  overflow-y: scroll;

  height: calc(100vh - 83px);
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
`;

const ProductImgListLayout = styled.div`
  overflow-x: hidden;
`;

const ProductImgList = styled.div`
  display: flex;
  align-items: center;

  width: fit-content;
`;

const ProductImg = styled.img`
  min-width: 100vw;
  height: 500px;

  object-fit: cover;
`;

const SellerInfo = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 16px;

  background-color: ${({ theme }) => theme.colors.neutral.background.weak};
  border-radius: 12px;

  font-size: ${({ theme }) => theme.fonts.body.regular.fontSize};
  font-weight: ${({ theme }) => theme.fonts.body.regular.fontWeight};
  line-height: ${({ theme }) => theme.fonts.body.regular.lineHeight};
  color: ${({ theme }) => theme.colors.neutral.text.default};
`;

const DropdownToggleButton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  width: 120px;
  height: 32px;
  margin: 16px 0;
  padding: 0px 16px;
  border: 1px solid ${({ theme }) => theme.colors.neutral.border.default};
  border-radius: 8px;

  font-size: ${({ theme }) => theme.fonts.caption1.fontSize};
  font-weight: ${({ theme }) => theme.fonts.caption1.fontWeight};
  line-height: ${({ theme }) => theme.fonts.caption1.lineHeight};
  color: ${({ theme }) => theme.colors.neutral.text.strong};

  & svg {
    fill: ${({ theme }) => theme.colors.neutral.text.strong};
  }
`;

const Title = styled.div`
  margin-bottom: 8px;

  font-size: ${({ theme }) => theme.fonts.headline.fontSize};
  font-weight: ${({ theme }) => theme.fonts.headline.fontWeight};
  line-height: ${({ theme }) => theme.fonts.headline.lineHeight};
  color: ${({ theme }) => theme.colors.neutral.text.strong};
`;

const CategoryAndTime = styled.span`
  font-size: ${({ theme }) => theme.fonts.footnote.fontSize};
  font-weight: ${({ theme }) => theme.fonts.footnote.fontWeight};
  line-height: ${({ theme }) => theme.fonts.footnote.lineHeight};
  color: ${({ theme }) => theme.colors.neutral.text.weak};
`;

const Content = styled.div`
  margin: 16px 0;

  font-size: ${({ theme }) => theme.fonts.body.regular.fontSize};
  font-weight: ${({ theme }) => theme.fonts.body.regular.fontWeight};
  line-height: ${({ theme }) => theme.fonts.body.regular.lineHeight};
  color: ${({ theme }) => theme.colors.neutral.text.default};

  white-space: pre-line;
`;

const Count = styled.span`
  font-size: ${({ theme }) => theme.fonts.footnote.fontSize};
  font-weight: ${({ theme }) => theme.fonts.footnote.fontWeight};
  line-height: ${({ theme }) => theme.fonts.footnote.lineHeight};
  color: ${({ theme }) => theme.colors.neutral.text.weak};
`;

const CountLayout = styled.div`
  display: flex;
  gap: 8px;
`;

const ToolBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  bottom: 0;

  width: 100%;
  height: 83px;
  padding: 16px;

  background-color: ${({ theme }) => theme.colors.neutral.background.weak};
  border-top: 1px solid ${({ theme }) => theme.colors.neutral.border.default};
`;

const LikeAndPrice = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  font-size: ${({ theme }) => theme.fonts.footnote.fontSize};
  font-weight: ${({ theme }) => theme.fonts.footnote.fontWeight};
  line-height: ${({ theme }) => theme.fonts.footnote.lineHeight};
  color: ${({ theme }) => theme.colors.neutral.text.strong};
`;

const ChattingListButton = styled(Button)`
  width: fit-content;
`;

const ChattingDetailButton = styled(Button)`
  width: fit-content;
`;

export {
  Product,
  ProductInfo,
  ProductImgListLayout,
  ProductImgList,
  ProductImg,
  SellerInfo,
  DropdownToggleButton,
  Title,
  CategoryAndTime,
  Content,
  Count,
  CountLayout,
  ToolBar,
  LikeAndPrice,
  ChattingListButton,
  ChattingDetailButton,
};
