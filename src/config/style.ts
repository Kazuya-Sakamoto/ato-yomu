// pt => px 変換表
// https://bowz.info/1322

import { Platform, type TextStyle } from 'react-native';

// inspired by TailwindCSS
// @see https://tailwindcss.com/docs/customizing-spacing#default-spacing-scale
const spacing = [
  { key: 0.5, value: 2 },
  { key: 1, value: 4 },
  { key: 2, value: 8 },
  { key: 3, value: 12 },
  { key: 4, value: 16 },
  { key: 5, value: 20 },
  { key: 6, value: 24 },
  { key: 7, value: 28 },
  { key: 8, value: 32 },
  { key: 9, value: 36 },
  { key: 10, value: 40 },
  { key: 11, value: 44 },
  { key: 12, value: 48 },
  { key: 14, value: 56 },
  { key: 16, value: 64 },
  { key: 20, value: 80 },
  { key: 24, value: 96 },
  { key: 28, value: 112 },
  { key: 32, value: 128 },
  { key: 36, value: 144 },
  { key: 40, value: 160 },
  { key: 44, value: 176 },
  { key: 48, value: 192 },
  { key: 52, value: 208 },
  { key: 56, value: 224 },
  { key: 60, value: 240 },
  { key: 64, value: 256 },
  { key: 72, value: 288 },
  { key: 80, value: 320 },
  { key: 96, value: 384 },
  { key: 128, value: 512 },
] as const satisfies Readonly<
  Readonly<{
    /**
     * スペーシングの値
     */
    key: number;

    /**
     * ピクセルサイズ
     */
    value: number;
  }>[]
>;

const spacingMap = spacing.reduce(
  (acc, s) => {
    acc[s.key] = s.value;
    return acc;
  },
  {} as Record<number, number>,
) as SpacingMap;

type Spacing = typeof spacing;
type SpacingKeys = (typeof spacing)[number]['key'];
type SpacingMap = {
  [k in SpacingKeys]: Extract<Spacing[number], { key: k }>['value'];
};

export const themeColor = {
  brand: {
    light: '#bfc0d1',
    main: '#605196',
    dark: '#501A5E',
  },
  base: {
    light: '#D5D5D5',
    main: '#848B8C',
    dark: '#333333',
  },
  background: {
    light: '#f7f7f7',
    main: '#ffffff',
    dark: '#000000',
  },
  alert: {
    light: '#F8AAB9',
    main: '#E2667E',
    dark: '#B71131',
  },
  transparent: 'transparent',
};

export default {
  color: {
    ...themeColor,
  },
  text: {
    size: {
      default: 16,
      mini: 14,
      large: 18,
    },
    lineHeight: {
      default: 24,
    },

    fontWeight: {
      default: '400',
      large: Platform.select({
        ios: '500',
        android: '700',
      }) as TextStyle['fontWeight'],
    },
  },

  /**
   * @description
   * | スペーシングの値 | ピクセルサイズ |
   * |:----------------:|:--------------:|
   * | 0.5              | 2              |
   * | 1                | 4              |
   * | 2                | 8              |
   * | 3                | 12             |
   * | 4                | 16             |
   * | 5                | 20             |
   * | 6                | 24             |
   * | 7                | 28             |
   * | 8                | 32             |
   * | 9                | 36             |
   * | 10               | 40             |
   * | 11               | 44             |
   * | 12               | 48             |
   * | 14               | 56             |
   * | 16               | 64             |
   * | 20               | 80             |
   * | 24               | 96             |
   * | 28               | 112            |
   * | 32               | 128            |
   * | 36               | 144            |
   * | 40               | 160            |
   * | 44               | 176            |
   * | 48               | 192            |
   * | 52               | 208            |
   * | 56               | 224            |
   * | 60               | 240            |
   * | 64               | 256            |
   * | 72               | 288            |
   * | 80               | 320            |
   * | 96               | 384            |
   * | 128              | 512            |
   *
   */
  spacing: (key: SpacingKeys) => spacingMap[key],

  zIndex: {
    notificationButton: 1000,
  },
} as const;
