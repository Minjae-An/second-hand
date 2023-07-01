import styled from 'styled-components';

const SalesHeader = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 18px;

  padding: 10px 0;

  border-bottom: 1px solid ${({ theme }) => theme.colors.neutral.border.default};
`;

const ButtonLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 32px;
  padding: 2px;

  background-color: ${({ theme }) => theme.colors.neutral.background.bold};
  border-radius: 8px;
`;

const Button = styled.button`
  width: 118px;
  height: 28px;

  font-size: ${({ theme }) => theme.fonts.footnote.fontSize};
  font-weight: ${({ theme }) => theme.fonts.footnote.fontWeight};
  line-height: ${({ theme }) => theme.fonts.footnote.lineHeight};
  color: ${({ theme }) => theme.colors.neutral.text.strong};

  &.active {
    background-color: ${({ theme }) => theme.colors.neutral.background.default};
    border: 0.5px solid ${({ theme }) => theme.colors.neutral.border.default};
    border-radius: 7px;

    box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.12), 0px 3px 1px rgba(0, 0, 0, 0.04);
  }
`;

const Title = styled.span`
  font-size: ${({ theme }) => theme.fonts.headline.fontSize};
  font-weight: ${({ theme }) => theme.fonts.headline.fontWeight};
  line-height: ${({ theme }) => theme.fonts.headline.lineHeight};
  color: ${({ theme }) => theme.colors.neutral.text.strong};
`;

export { SalesHeader, ButtonLayout, Button, Title };
