import type { Meta, StoryObj } from '@storybook/react';

import Modal from '.';

const headerMeta: Meta<typeof Modal> = {
  title: 'common/Modal',
  component: Modal,
};

export default headerMeta;

type ModalStory = StoryObj<typeof Modal>;

export const ProductDetailModal: ModalStory = {
  args: {
    options: [
      { text: '게시글 수정', colorType: 'default', handler: () => console.log('게시글 수정') },
      { text: '삭제', colorType: 'warning', handler: () => console.log('삭제') },
    ],
    closeModalHandler: () => console.log('모달 닫힌다~'),
  },
};

export const ChattingDetailModal: ModalStory = {
  args: {
    options: [
      { text: '알림 끄기', colorType: 'default', handler: () => console.log('알림 끄기') },
      { text: '신고 하기', colorType: 'default', handler: () => console.log('신고 하기') },
      { text: '채팅방 나가기', colorType: 'warning', handler: () => console.log('채팅방 나가기') },
    ],
    closeModalHandler: () => console.log('모달 닫힌다~'),
  },
};

export const SalesModal: ModalStory = {
  args: {
    options: [
      { text: '게시글 수정', colorType: 'default', handler: () => console.log('게시글 수정') },
      {
        text: '판매 중 상태로 전환',
        colorType: 'default',
        handler: () => console.log('판매 중 상태로 전환'),
      },
      {
        text: '판매 완료 상태로 전환',
        colorType: 'default',
        handler: () => console.log('판매 완료 상태로 전환'),
      },
      { text: '삭제', colorType: 'warning', handler: () => console.log('삭제') },
    ],
    closeModalHandler: () => console.log('모달 닫힌다~'),
  },
};
