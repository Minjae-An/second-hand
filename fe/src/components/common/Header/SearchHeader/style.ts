import styled, { css } from 'styled-components';

const SearchHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 16px;

  border-bottom: 1px solid ${({ theme }) => theme.colors.neutral.border.default};
`;

const CloseButton = styled.button`
  display: flex;
  align-items: center;

  width: 105px;
  height: 42px;

  font-size: ${({ theme }) => theme.fonts.body.regular.fontSize};
  font-weight: ${({ theme }) => theme.fonts.body.regular.fontWeight};
  line-height: ${({ theme }) => theme.fonts.body.regular.lineHeight};
  color: ${({ theme }) => theme.colors.neutral.text.default};
`;

const LabelIcon = css`
  & > svg {
    width: 21px;
    height: 22px;
    fill: ${({ theme }) => theme.colors.neutral.text.weak};
  }
`;

const Label = styled.label`
  display: flex;
  align-items: center;

  ${LabelIcon}
`;

const Input = styled.input`
  width: 100%;

  font-size: ${({ theme }) => theme.fonts.subhead.fontSize};
  font-weight: ${({ theme }) => theme.fonts.subhead.fontWeight};
  line-height: ${({ theme }) => theme.fonts.subhead.lineHeight};
  color: ${({ theme }) => theme.colors.neutral.text.weak};
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;

  height: 36px;
  padding: 7px 6px;

  background-color: ${({ theme }) => theme.colors.system.background.weak};
  border-radius: 10px;
`;

export { SearchHeader, CloseButton, Label, Input, SearchBar };
