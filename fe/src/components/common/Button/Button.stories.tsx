import type { Meta, StoryObj } from '@storybook/react';

import { ICON_NAME } from '@constants/index';

import Icon from '../Icon';
import Button from '.';

const buttonMeta: Meta<typeof Button> = {
  title: 'common/Button',
  component: Button,
  argTypes: {
    buttonType: {
      table: {
        disable: true,
      },
    },
    buttonState: {
      options: ['default', 'active'],
      control: { type: 'radio' },
    },
  },
};

export default buttonMeta;

type ButtonStory = StoryObj<typeof Button>;

export const CircleButton: ButtonStory = {
  args: {
    buttonType: 'circle',
    children: <Icon name={ICON_NAME.PLUS} />,
  },
};

export const RectangleButton: ButtonStory = {
  args: {
    buttonType: 'rectangle',
    buttonState: 'default',
    children: (
      <>
        <Icon name={ICON_NAME.PLUS} />
        <span>Label</span>
      </>
    ),
  },
};

export const CategoryButton: ButtonStory = {
  args: {
    buttonType: 'category',
    buttonState: 'default',
    children: 'Label',
  },
};
