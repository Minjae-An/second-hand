import { createContext, useContext, useState } from 'react';

import { ThemeProvider as StyledProvider } from 'styled-components';

import { lightColors } from '@styles/color';
import { fonts } from '@styles/font';

const ThemeContext = createContext({});

const useThemeContext = () => {
  const theme = useContext(ThemeContext);

  if (!theme) {
    throw new Error('useThemeContext should be used within ThemeContext.Provider');
  }

  return theme;
};

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [themeMode, setThemeMode] = useState('light');
  // TODO: darkColors 기획서에 아직 안나옴. 나오면 설정하기
  const theme = { colors: lightColors, fonts };

  return (
    <ThemeContext.Provider value={{ themeMode, setThemeMode }}>
      <StyledProvider theme={theme}>{children}</StyledProvider>
    </ThemeContext.Provider>
  );
};

export { useThemeContext, ThemeProvider };
