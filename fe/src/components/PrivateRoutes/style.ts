import styled, { css } from 'styled-components';

const buttonStyles = css`
  justify-content: center;

  width: 100%;
  height: 52px;
  padding: 16px 20px;

  border-radius: 8px;

  font-size: ${({ theme }) => theme.fonts.subhead.fontSize};
  font-weight: ${({ theme }) => theme.fonts.subhead.fontWeight};
  line-height: ${({ theme }) => theme.fonts.subhead.lineHeight};
`;

const HomeButton = styled.button`
  background-color: ${({ theme }) => theme.colors.neutral.background.default};
  border: 1px solid ${({ theme }) => theme.colors.neutral.border.default};

  color: ${({ theme }) => theme.colors.neutral.text.default};

  ${buttonStyles};
`;

const MyAccountButton = styled.button`
  background-color: ${({ theme }) => theme.colors.accent.background.primary};

  color: ${({ theme }) => theme.colors.accent.text.default};

  ${buttonStyles}
`;

export { HomeButton, MyAccountButton };
