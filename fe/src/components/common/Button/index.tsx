import * as S from './style';

interface ButtonProps {
  className?: string;
  buttonType: 'circle' | 'rectangle' | 'category';
  buttonState?: 'default' | 'active';
  children: React.ReactNode;
  clickHandler?: () => void;
}

const Button = ({ className, buttonType, buttonState = 'default', children, clickHandler }: ButtonProps) => {
  return (
    <S.Button className={className} buttontype={buttonType} buttonstate={buttonState} onClick={clickHandler}>
      {children}
    </S.Button>
  );
};

export default Button;
