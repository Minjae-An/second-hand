import styled from 'styled-components';

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 45px;

  height: 44px;
  padding: 0 9px;

  border-bottom: 1px solid ${({ theme }) => theme.colors.neutral.border.default};
`;

const HeaderTitle = styled.span`
  font-size: ${({ theme }) => theme.fonts.body.bold.fontSize};
  font-weight: ${({ theme }) => theme.fonts.body.bold.fontWeight};
  line-height: ${({ theme }) => theme.fonts.body.bold.lineHeight};
  color: ${({ theme }) => theme.colors.neutral.text.strong};
`;

const BackButton = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;

  width: 100px;

  font-size: ${({ theme }) => theme.fonts.body.regular.fontSize};
  font-weight: ${({ theme }) => theme.fonts.body.regular.fontWeight};
  line-height: ${({ theme }) => theme.fonts.body.regular.lineHeight};
  color: ${({ theme }) => theme.colors.neutral.text.strong};
`;

const EmptyTag = styled.div`
  width: 100px;
`;

const CategoryImg = styled.img`
  width: 70%;
  height: 70%;

  border-radius: 8px;

  object-fit: cover;
`;

const CategoryItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  width: 80px;
  height: 80px;

  font-size: ${({ theme }) => theme.fonts.footnote.fontSize};
  font-weight: ${({ theme }) => theme.fonts.footnote.fontWeight};
  line-height: ${({ theme }) => theme.fonts.footnote.lineHeight};
  color: ${({ theme }) => theme.colors.neutral.text.default};

  cursor: pointer;
`;

const CategoryList = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
  justify-items: center;
  gap: 27px;

  padding: 40px;
`;

export { Header, BackButton, HeaderTitle, EmptyTag, CategoryImg, CategoryItem, CategoryList };
