import type { Meta, StoryObj } from '@storybook/react';

import Header from '.';

const headerMeta: Meta<typeof Header> = {
  title: 'common/Header',
  component: Header,
  argTypes: {
    type: { options: ['home', 'search', 'sales'], control: { type: 'radio' } },
  },
};

export default headerMeta;

type HeaderStory = StoryObj<typeof Header>;

export const PrimaryHeader: HeaderStory = {
  args: {
    type: 'home',
  },
};
