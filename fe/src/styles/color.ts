const PALETTE = {
  WHITE: '#FFFFFF',
  GRAY_50: '#FAFAFA',
  GRAY_100: 'rgba(249, 249, 249, 0.8)',
  GRAY_200: 'rgba(245, 245, 245, 0.7)',
  GRAY_300: 'rgba(179, 179, 179, 0.12)',
  GRAY_400: 'rgba(119, 102, 119, 0.12)',
  GRAY_500: 'rgba(179, 179, 179, 0.39)',
  GRAY_600: 'rgba(0, 0, 0, 0.2)',
  GRAY_700: 'rgba(60, 60, 67, 0.36)',
  GRAY_800: 'rgba(60, 60, 67, 0.6)',
  GRAY_900: '#3C3C43',
  BLACK: '#000000',
  MINT: '#00C7BE',
  ORANGE: '#FF9500',
  BLUE: '#007AFF',
  RED: '#FF3B30',
};

const lightColors = {
  neutral: {
    text: {
      default: PALETTE.GRAY_900,
      weak: PALETTE.GRAY_800,
      strong: PALETTE.BLACK,
    },
    background: {
      default: PALETTE.WHITE,
      weak: PALETTE.GRAY_50,
      bold: PALETTE.GRAY_400,
      blur: PALETTE.GRAY_100,
    },
    border: {
      default: PALETTE.GRAY_500,
      strong: PALETTE.GRAY_700,
    },
    overLay: PALETTE.GRAY_600,
  },
  accent: {
    text: {
      default: PALETTE.WHITE,
      weak: PALETTE.BLACK,
    },
    background: {
      primary: PALETTE.ORANGE,
      secondary: PALETTE.MINT,
    },
  },
  system: {
    default: PALETTE.BLUE,
    warning: PALETTE.RED,
    background: {
      default: PALETTE.WHITE,
      weak: PALETTE.GRAY_200,
    },
  },
};

export { PALETTE, lightColors };
