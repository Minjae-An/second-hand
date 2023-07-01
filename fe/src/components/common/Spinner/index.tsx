import * as S from './style';

interface SpinnerProps {
  size?: string;
}

const Spinner = ({ size = '50px' }: SpinnerProps) => {
  return <S.Spinner size={size}></S.Spinner>;
};

export default Spinner;
