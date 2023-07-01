import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import type { Preview } from '@storybook/react';

import { ThemeProvider } from '../src/context/themeContext';
import GlobalStyle from '../src/styles/GlobalStyle';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export const decorators = [
  (Story) => (
    <ThemeProvider>
      <GlobalStyle />
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    </ThemeProvider>
  ),
];

export default preview;
