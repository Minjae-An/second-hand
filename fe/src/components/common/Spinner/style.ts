import styled, { css } from 'styled-components';

const spinnerAnimation = css`
  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Spinner = styled.div<{ size: string }>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};

  border: 10px solid #f3f3f3;
  border-top: 10px solid ${({ theme }) => theme.colors.accent.background.primary};
  border-radius: 50%;

  animation: spinner 1.5s linear infinite;

  ${spinnerAnimation}
`;

export { Spinner };
