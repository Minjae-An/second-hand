import styled from 'styled-components';

import { PALETTE } from '@styles/color';

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 44px;

  border-bottom: 1px solid ${({ theme }) => theme.colors.neutral.border.default};

  font-size: ${({ theme }) => theme.fonts.body.bold.fontSize};
  font-weight: ${({ theme }) => theme.fonts.body.bold.fontWeight};
  line-height: ${({ theme }) => theme.fonts.body.bold.lineHeight};
  color: ${({ theme }) => theme.colors.neutral.text.strong};
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

const LogoutButton = styled.button`
  width: 80%;
  height: 52px;
  padding: 16px 20px;

  background-color: ${({ theme }) => theme.colors.accent.background.primary};
  border-radius: 8px;

  font-size: ${({ theme }) => theme.fonts.subhead.fontSize};
  font-weight: ${({ theme }) => theme.fonts.subhead.fontWeight};
  line-height: ${({ theme }) => theme.fonts.subhead.lineHeight};
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

const MyAccountMain = styled.main<{ isloggedin: number }>`
  display: flex;
  flex-direction: column;
  justify-content: ${({ isloggedin }) => (isloggedin ? 'space-between' : 'center')};
  align-items: center;

  height: calc(100vh - 44px - 83px);
  padding: 100px 16px;

  box-sizing: border-box;
`;

export { Header, LoginButton, LogoutButton, UserImg, UserLoginId, UserInfo, MyAccountMain };
