import styled from 'styled-components';

const Popup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 80%;
  padding: 30px 20px;

  background-color: ${({ theme }) => theme.colors.neutral.background.weak};
  border-radius: 15px;

  font-size: ${({ theme }) => theme.fonts.callout.fontSize};
  font-weight: ${({ theme }) => theme.fonts.callout.fontWeight};
  line-height: ${({ theme }) => theme.fonts.callout.lineHeight};
  color: ${({ theme }) => theme.colors.neutral.text.strong};

  z-index: 20;
`;

const ButtonsLayout = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;

  width: 100%;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: auto;

  width: 100%;
  height: 100%;

  background-color: ${({ theme }) => theme.colors.neutral.overLay};

  z-index: 15;
`;

export { Popup, ButtonsLayout, Overlay };
