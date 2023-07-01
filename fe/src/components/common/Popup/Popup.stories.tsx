import type { Meta, StoryObj } from '@storybook/react';

import Popup from '.';

const popupMeta: Meta<typeof Popup> = {
  title: 'common/Popup',
  component: Popup,
};

export default popupMeta;

type PopupStory = StoryObj<typeof Popup>;

export const PrimaryPopup: PopupStory = {
  args: {
    text: '정말로 삭제하시겠습니까?',
    children: (
      <>
        <button style={{ width: '100px', border: '1px solid black' }}>예</button>
        <button style={{ width: '100px', border: '1px solid black' }}>아니오</button>
      </>
    ),
  },
};
