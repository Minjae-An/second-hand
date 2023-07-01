import { Outlet, useNavigate } from 'react-router-dom';

import { PATH } from '@constants/path';

import { useUserContext } from '@context/userContext';

import Popup from '@components/common/Popup';
import * as S from './style';

const PrivateRoutes = () => {
  const { isLoggedIn } = useUserContext();
  const navigate = useNavigate();

  if (!isLoggedIn) {
    return (
      <>
        <Popup text="로그인 후 이용 가능합니다.">
          <S.HomeButton onClick={() => navigate(PATH.HOME)}>홈 페이지로 이동</S.HomeButton>
          <S.MyAccountButton onClick={() => navigate(PATH.MY_ACCOUNT)}>
            로그인 페이지로 이동
          </S.MyAccountButton>
        </Popup>
      </>
    );
  }

  return <Outlet />;
};

export default PrivateRoutes;
