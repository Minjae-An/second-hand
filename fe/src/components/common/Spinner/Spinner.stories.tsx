import type { Meta, StoryObj } from '@storybook/react';

import Spinner from '.';

const spinnerMeta: Meta<typeof Spinner> = {
  title: 'common/Spinner',
  component: Spinner,
};

export default spinnerMeta;

type SpinnerStory = StoryObj<typeof Spinner>;

export const PrimarySpinner: SpinnerStory = {
  args: {
    size: '50px',
  },
};
