import styled from 'styled-components';

const TitleInputLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;

  padding: 16px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.neutral.border.default};
`;

const TitleInput = styled.input`
  width: 100%;
  height: 22px;

  font-size: ${({ theme }) => theme.fonts.subhead.fontSize};
  font-weight: ${({ theme }) => theme.fonts.subhead.fontWeight};
  line-height: ${({ theme }) => theme.fonts.subhead.lineHeight};
`;

const CategoryList = styled.li`
  display: flex;
  gap: 5px;

  height: 22px;
`;

const CategoryItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: fit-content;
  height: 32px;
  padding: 0 16px;

  border-radius: 50px;
  border: 1px solid ${({ theme }) => theme.colors.neutral.border.default};

  font-size: ${({ theme }) => theme.fonts.caption1.fontSize};
  font-weight: ${({ theme }) => theme.fonts.caption1.fontWeight};
  line-height: ${({ theme }) => theme.fonts.caption1.lineHeight};

  &.active {
    background-color: ${({ theme }) => theme.colors.accent.background.primary};
    color: ${({ theme }) => theme.colors.accent.text.default};
    border: none;
  }
`;

const CategoryLayout = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;
`;

export { TitleInputLayout, TitleInput, CategoryList, CategoryItem, CategoryLayout };
