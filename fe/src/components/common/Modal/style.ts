import styled, { css } from 'styled-components';

const Option = styled.li<{ colortype: 'default' | 'warning' }>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  padding: 18px 16px;

  background-color: ${({ theme }) => theme.colors.system.background.weak};

  font-size: ${({ theme }) => theme.fonts.title3.regular.fontSize};
  font-weight: ${({ theme }) => theme.fonts.title3.regular.fontWeight};
  line-height: ${({ theme }) => theme.fonts.title3.regular.lineHeight};
  color: ${({ theme, colortype }) => theme.colors.system[colortype]};

  cursor: pointer;
`;

const optionBorderStyles = css`
  & > li:first-child {
    border-radius: 13px 13px 0 0;
  }
  & > li:last-child {
    border-radius: 0 0 13px 13px;
  }
  & > li:not(:last-child) {
    border-bottom: 0.5px solid ${({ theme }) => theme.colors.neutral.border.strong};
  }
`;

const Options = styled.ul`
  ${optionBorderStyles}
`;

const CancelButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  padding: 18px 16px;

  background-color: ${({ theme }) => theme.colors.system.background.default};
  border-radius: 13px;

  font-size: ${({ theme }) => theme.fonts.title3.bold.fontSize};
  font-weight: ${({ theme }) => theme.fonts.title3.bold.fontWeight};
  line-height: ${({ theme }) => theme.fonts.title3.bold.lineHeight};
  color: ${({ theme }) => theme.colors.system.default};
`;

const Modal = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: absolute;
  bottom: 0;

  width: 100%;

  z-index: 10;
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

  z-index: 5;
`;

export { Option, Options, CancelButton, Modal, Overlay };
