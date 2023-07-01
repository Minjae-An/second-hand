import * as S from './style';

interface PopupProps {
  text: string;
  children: React.ReactNode;
}

const Popup = ({ text, children }: PopupProps) => {
  return (
    <>
      <S.Popup>
        <span>{text}</span>
        <S.ButtonsLayout>{children}</S.ButtonsLayout>
      </S.Popup>
      <S.Overlay />
    </>
  );
};

export default Popup;
