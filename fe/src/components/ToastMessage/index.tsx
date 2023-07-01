import { useEffect } from 'react';

import ModalPortal from '@components/ModalPortal';
import * as S from './style';

interface ToastMessageProps {
  message: string;
  closeHandler: () => void;
}

const ToastMessage = ({ message, closeHandler }: ToastMessageProps) => {
  useEffect(() => {
    const timerId = setTimeout(() => {
      closeHandler();
    }, 2000);

    return () => {
      clearTimeout(timerId);
    };
  }, []);

  return (
    <ModalPortal>
      <S.NoChatMessage>{message}</S.NoChatMessage>
    </ModalPortal>
  );
};

export default ToastMessage;
