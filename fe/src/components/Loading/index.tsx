import Spinner from '@components/common/Spinner';
import logoImg from '@assets/second-hand-logo.png';
import * as S from './style';

interface LoadingProps {
  text: string;
}

const Loading = ({ text }: LoadingProps) => {
  return (
    <S.Loading>
      <S.LogoImg src={logoImg} alt="second-hand-logo" />
      <Spinner />
      <S.LoadingText>{text}</S.LoadingText>
    </S.Loading>
  );
};

export default Loading;
