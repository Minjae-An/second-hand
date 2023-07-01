import { Link, useNavigate } from 'react-router-dom';

import { PATH } from '@constants/path';

import * as S from './style';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <S.NotFound>
      <S.ErrorMessage>404 Page Not Found</S.ErrorMessage>
      <Link to={PATH.HOME}>
        <S.PageButton>Home 페이지로 이동</S.PageButton>
      </Link>
      <S.PageButton onClick={() => navigate(-1)}>이전 페이지로 이동</S.PageButton>
    </S.NotFound>
  );
};

export default NotFound;
