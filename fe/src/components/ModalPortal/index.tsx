import { createPortal } from 'react-dom';

interface ModalPortal {
  children: React.ReactNode;
}

const ModalPortal = ({ children }: ModalPortal) => {
  const domNode = document.getElementById('modal-root') as HTMLElement;

  return createPortal(children, domNode);
};

export default ModalPortal;
