import styled, { css } from 'styled-components';

import Button from '@components/common/Button';

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;

  width: 100%;
  height: 44px;
  padding: 16px;
`;
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

const PostStateDropDown = styled.div`
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

const Menu = styled.div<{ selectedstate?: '광고' | '예약 중' | '판매 중' | '판매 완료'; state?: string }>`
  display: flex;
  align-items: center;

  height: 45px;
  padding: 0 10px;

  font-size: ${({ theme }) => theme.fonts.callout.fontSize};
  font-weight: ${({ selectedstate, state }) => (state && selectedstate === state ? 590 : 400)};
  line-height: ${({ theme }) => theme.fonts.callout.lineHeight};
`;

const MenuBorderStyles = css`
  & > div:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.neutral.border.default};
  }
`;

const Modal = styled.div`
  position: absolute;
  top: calc(100% + 4px);
  left: 0;

  width: 240px;

  background-color: ${({ theme }) => theme.colors.system.background.default};
  border: 1px solid ${({ theme }) => theme.colors.neutral.border.strong};
  border-radius: 12px;

  ${MenuBorderStyles}
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
  Header,
  Product,
  ProductInfo,
  ProductImgListLayout,
  ProductImgList,
  ProductImg,
  SellerInfo,
  PostStateDropDown,
  Menu,
  Modal,
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
