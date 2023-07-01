import styled, { css } from 'styled-components';

type ButtonType = 'circle' | 'rectangle' | 'category';
type ButtonState = 'default' | 'active';

interface ButtonProps {
  buttontype: ButtonType;
  buttonstate: ButtonState;
}

const Button = styled.button<ButtonProps>`
  ${({ buttontype }) => typeStyles[buttontype]}

  display: flex;
  flex-direction: row;
  align-items: center;
`;

const typeStyles = {
  circle: css`
    justify-content: center;

    width: 56px;
    height: 56px;
    padding: 10px;

    border-radius: 56px;
    background-color: ${({ theme }) => theme.colors.accent.background.primary};

    & > svg {
      fill: ${({ theme }) => theme.colors.accent.text.default};
    }
  `,

  rectangle: css<{ buttonstate: ButtonState }>`
    justify-content: ${({ buttonstate }) => (buttonstate === 'default' ? 'center' : 'space-between')};

    width: 100%;
    height: 52px;
    padding: 16px 20px;

    border-radius: 8px;

    font-size: ${({ theme }) => theme.fonts.subhead.fontSize};
    font-weight: ${({ theme }) => theme.fonts.subhead.fontWeight};
    line-height: ${({ theme }) => theme.fonts.subhead.lineHeight};

    ${({ buttonstate }) => colorStyles[buttonstate]}
  `,

  category: css<{ buttonstate: ButtonState }>`
    justify-content: center;

    width: 63px;
    height: 32px;
    padding: 0px 16px;

    border-radius: 50px;

    font-size: ${({ theme }) => theme.fonts.caption1.fontSize};
    font-weight: ${({ theme }) => theme.fonts.caption1.fontWeight};
    line-height: ${({ theme }) => theme.fonts.caption1.lineHeight};

    ${({ buttonstate }) => colorStyles[buttonstate]}
  `,
};

const colorStyles = {
  default: css`
    background-color: ${({ theme }) => theme.colors.neutral.background.default};
    border: 1px solid ${({ theme }) => theme.colors.neutral.border.default};

    color: ${({ theme }) => theme.colors.neutral.text.strong};

    & > svg {
      fill: ${({ theme }) => theme.colors.neutral.text.strong};
    }
  `,
  active: css`
    background-color: ${({ theme }) => theme.colors.accent.background.primary};

    color: ${({ theme }) => theme.colors.accent.text.default};

    & > svg {
      fill: ${({ theme }) => theme.colors.accent.text.default};
    }
  `,
};

export { Button };
