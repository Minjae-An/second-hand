import styled from 'styled-components';

import Button from '@components/common/Button';

const ToolBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  bottom: 0;

  width: 100%;
  height: 83px;
  padding: 16px;

  background-color: ${({ theme }) => theme.colors.neutral.background.weak};
  border-top: 1px solid ${({ theme }) => theme.colors.neutral.border.default};
`;

const LikeAndPrice = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  font-size: ${({ theme }) => theme.fonts.footnote.fontSize};
  font-weight: ${({ theme }) => theme.fonts.footnote.fontWeight};
  line-height: ${({ theme }) => theme.fonts.footnote.lineHeight};
  color: ${({ theme }) => theme.colors.neutral.text.strong};
`;

const ChattingListButton = styled(Button)`
  width: fit-content;
`;

const ChattingDetailButton = styled(Button)`
  width: fit-content;
`;

export { ToolBar, LikeAndPrice, ChattingDetailButton, ChattingListButton };
