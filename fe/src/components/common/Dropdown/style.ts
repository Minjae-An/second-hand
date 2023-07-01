import styled, { css } from 'styled-components';

const Option = styled.div<{ selectedvalue?: string; value?: string }>`
  display: flex;
  align-items: center;

  height: 45px;
  padding: 0 10px;

  font-size: ${({ theme }) => theme.fonts.callout.fontSize};
  font-weight: ${({ selectedvalue, value }) => (value && selectedvalue === value ? 590 : 400)};
  line-height: ${({ theme }) => theme.fonts.callout.lineHeight};
`;

const MenuBorderStyles = css`
  & > div:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.neutral.border.default};
  }
`;

const Dropdown = styled.div`
  position: absolute;
  top: calc(100% + 4px);
  left: 0;

  width: 240px;

  background-color: ${({ theme }) => theme.colors.system.background.default};
  border: 1px solid ${({ theme }) => theme.colors.neutral.border.strong};
  border-radius: 12px;

  ${MenuBorderStyles}
`;

export { Dropdown, Option };
