import styled from 'styled-components';

import Button from '@components/common/Button';

const GoToTopButton = styled.button`
  position: fixed;
  bottom: 176px;
  right: 30px;

  width: 45px;
  height: 45px;

  background-color: ${({ theme }) => theme.colors.neutral.background.default};
  border: 1px solid ${({ theme }) => theme.colors.neutral.border.default};
  border-radius: 8px;

  & > svg {
    fill: ${({ theme }) => theme.colors.neutral.text.strong};
  }
`;

const NewProductButton = styled(Button)`
  position: fixed;
  bottom: 107px;
  right: 24px;
`;

const ProductListLayout = styled.div`
  margin-top: 44px;
  margin-bottom: 83px;
  height: calc(100vh - 44px - 83px);
  overflow-y: scroll;
`;

export { GoToTopButton, NewProductButton, ProductListLayout };
