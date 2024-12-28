import { Platform, type TextStyle } from 'react-native';

import { themeColor } from './style';

// inspired by https://styled-system.com/getting-started#space-theming
export const space = {
  // inspired by TailwindCSS
  // @see https://tailwindcss.com/docs/customizing-spacing#default-spacing-scale
  '$0.5': 2,
  $1: 4,
  $2: 8,
  $3: 12,
  $4: 16,
  $5: 20,
  $6: 24,
  $7: 28,
  $8: 32,
  $9: 36,
  $10: 40,
  $11: 44,
  $12: 48,
  $14: 56,
  $16: 64,
  $20: 80,
  $24: 96,
  $28: 112,
  $32: 128,
  $36: 144,
  $40: 160,
  $44: 176,
  $48: 192,
  $52: 208,
  $56: 224,
  $60: 240,
  $64: 256,
  $72: 288,
  $80: 320,
  $96: 384,
  $128: 512,
} as const;
export type Space = typeof space;

const theme = {
  fontColors: {
    primary: themeColor.brand.main,
    text: themeColor.base.dark,
    background: themeColor.background.main,
    muted: themeColor.base.main,
    placeholder: themeColor.base.light,
  },

  fontSizes: {
    '9xl': 52,
    '8xl': 48,
    '7xl': 44,
    '6xl': 40,
    '5xl': 36,
    '4xl': 32,
    '3xl': 28,
    '2xl': 24,
    xl: 20,
    lg: 18,
    md: 16,
    sm: 14,
    xs: 12,
    '2xs': 11,
    '3xs': 10,
    '4xs': 9,
  },
  fontWeights: {
    body: '400',
    bold: Platform.select({
      ios: '600',
      android: '700',
    }) as TextStyle['fontWeight'],
  },
} as const;

export default theme;
