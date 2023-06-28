import styled from 'styled-components';

import { PALETTE } from '@styles/color';

const MyAccount = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100vh;
`;

const LoginButton = styled.button`
  width: 80%;
  height: 52px;

  border-radius: 16px;
  background-color: ${PALETTE.BLACK};

  font-size: 15px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.accent.text.default};
`;

const UserImg = styled.img`
  width: 80px;
  height: 80px;

  border-radius: 50%;
`;

const UserLoginId = styled.span`
  font-size: ${({ theme }) => theme.fonts.headline.fontSize};
  font-weight: ${({ theme }) => theme.fonts.headline.fontWeight};
  line-height: ${({ theme }) => theme.fonts.headline.lineHeight};
  color: ${({ theme }) => theme.colors.neutral.text.strong};

  text-align: center;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export { MyAccount, LoginButton, UserImg, UserLoginId, UserInfo };
