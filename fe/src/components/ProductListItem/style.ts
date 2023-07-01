import { Link } from 'react-router-dom';

import styled from 'styled-components';

const Img = styled.img`
  width: 120px;
  height: 120px;

  border: 1px solid ${({ theme }) => theme.colors.neutral.border.default};
  border-radius: 8px;

  object-fit: cover;
`;

const Title = styled.header`
  font-size: ${({ theme }) => theme.fonts.subhead.fontSize};
  font-weight: ${({ theme }) => theme.fonts.subhead.fontWeight};
  line-height: ${({ theme }) => theme.fonts.subhead.lineHeight};
  color: ${({ theme }) => theme.colors.neutral.text.default};
`;

const LocationAndTime = styled.span`
  font-size: ${({ theme }) => theme.fonts.footnote.fontSize};
  font-weight: ${({ theme }) => theme.fonts.footnote.fontWeight};
  line-height: ${({ theme }) => theme.fonts.footnote.lineHeight};
  color: ${({ theme }) => theme.colors.neutral.text.weak};
`;

const StateBadge = styled.div<{ fontcolor: string | null; backgroundcolor: string | null }>`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 22px;
  padding: 0 10px;

  background-color: ${({ backgroundcolor }) => backgroundcolor};
  border-radius: 8px;

  font-size: ${({ theme }) => theme.fonts.caption1.fontSize};
  font-weight: ${({ theme }) => theme.fonts.caption1.fontWeight};
  line-height: ${({ theme }) => theme.fonts.caption1.lineHeight};
  color: ${({ fontcolor }) => fontcolor};
`;

const Price = styled.span`
  font-size: ${({ theme }) => theme.fonts.headline.fontSize};
  font-weight: ${({ theme }) => theme.fonts.headline.fontWeight};
  line-height: ${({ theme }) => theme.fonts.headline.lineHeight};
  color: ${({ theme }) => theme.colors.accent.text.strong};
`;

const StateAndPrice = styled.div`
  display: flex;
  gap: 4px;
`;

const ChatAndLike = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 4px;

  color: ${({ theme }) => theme.colors.neutral.text.default};
`;

const IconTextBox = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const ItemInformation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 4px;

  height: 68px;
`;

const ProductListItem = styled.div`
  display: flex;
  gap: 15px;

  width: 100%;
  height: 150px;
  padding: 15px 0px;

  border-bottom: 1px solid ${({ theme }) => theme.colors.neutral.border.default};
`;

const CustomLink = styled(Link)`
  flex: 1;

  max-width: 300px;
`;

export {
  Img,
  Title,
  LocationAndTime,
  StateBadge,
  Price,
  StateAndPrice,
  ChatAndLike,
  IconTextBox,
  ItemInformation,
  ProductListItem,
  CustomLink,
};
