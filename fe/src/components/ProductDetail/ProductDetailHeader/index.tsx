import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { ICON_NAME, PATH, REQUEST_URL } from '@constants/index';

import useFetch, { REQUEST_METHOD } from '@hooks/useFetch';

import Icon from '@components/common/Icon';
import Modal from '@components/common/Modal';
import Popup from '@components/common/Popup';
import ModalPortal from '@components/ModalPortal';
import * as S from './style';

interface ProductDetailHeaderProps {
  postId: number;
  isSeller: boolean;
}

const ProductDetailHeader = ({ postId, isSeller }: ProductDetailHeaderProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const { responseState: deletePostState, fetchData: deletePost } = useFetch({
    url: `${REQUEST_URL.POSTS}/${postId}`,
    options: {
      method: REQUEST_METHOD.DELETE,
      headers: { Authorization: `Bearer ${localStorage.getItem('Token')}` },
    },
    skip: true,
  });

  const deleteProduct = () => {
    deletePost();

    if (deletePostState === 'ERROR') {
      alert('게시글 삭제에 싪패했습니다.');
      return;
    }

    navigate('/');
  };

  const openPopup = () => setIsPopupOpen(true);

  const goBackHandler = () => {
    if (location.state?.beforePage === PATH.NEW_PRODUCT) {
      navigate('/');
      return;
    }

    navigate(-1);
  };

  return (
    <S.Header>
      <button onClick={goBackHandler}>
        <Icon name={ICON_NAME.CHEVRON_LEFT} />
      </button>
      {isSeller && (
        <button onClick={() => setIsModalOpen(true)}>
          <Icon name={ICON_NAME.ELLIPSIS} />
        </button>
      )}
      {isPopupOpen && (
        <ModalPortal>
          <Popup text="정말로 해당 게시물을 삭제할 것입니까?">
            <S.ClosePopupButton onClick={() => setIsPopupOpen(false)}>아니오</S.ClosePopupButton>
            <S.DeletePostButton onClick={deleteProduct}>예</S.DeletePostButton>
          </Popup>
        </ModalPortal>
      )}
      {isModalOpen && (
        <ModalPortal>
          <Modal
            options={[
              { text: '게시글 수정', colorType: 'default', handler: () => console.log('게시글 수정') },
              { text: '삭제', colorType: 'warning', handler: openPopup },
            ]}
            closeModalHandler={() => setIsModalOpen(false)}
          />
        </ModalPortal>
      )}
    </S.Header>
  );
};

export default ProductDetailHeader;
