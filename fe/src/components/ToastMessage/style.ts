import styled from 'styled-components';

const NoChatMessage = styled.span`
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);

  padding: 8px 20px;

  background-color: ${({ theme }) => theme.colors.neutral.background.default};
  border-radius: 20px;

  font-size: ${({ theme }) => theme.fonts.callout.fontSize};
  font-weight: ${({ theme }) => theme.fonts.callout.fontWeight};
  line-height: ${({ theme }) => theme.fonts.callout.lineHeight};
  color: ${({ theme }) => theme.colors.neutral.text.strong};

  box-shadow: 0 0 25px gray;
`;

export { NoChatMessage };
