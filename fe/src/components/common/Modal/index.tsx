import * as S from './style';

interface Option {
  text: string;
  colorType: 'default' | 'warning';
  handler: () => void;
}

interface ModalProps {
  options: Option[];
  closeModalHandler: () => void;
}

const Modal = ({ options, closeModalHandler }: ModalProps) => {
  return (
    <>
      <S.Modal>
        <S.Options>
          {options.map(({ text, colorType, handler }) => (
            <S.Option key={text} colortype={colorType} onClick={handler}>
              {text}
            </S.Option>
          ))}
        </S.Options>
        <S.CancelButton onClick={closeModalHandler}>취소</S.CancelButton>
      </S.Modal>
      <S.Overlay />
    </>
  );
};

export default Modal;
