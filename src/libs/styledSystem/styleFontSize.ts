import type { TextStyle } from 'react-native';
import theme from 'src/config/theme';

import { selector, type Selectors } from '@/libs/styledSystem/responsive';

type FontSizes = keyof typeof theme.fontSizes | number;
type FontSizeSelectors = Selectors<FontSizes>;
export type FontSizeProps = FontSizes | [FontSizes, FontSizeSelectors];

/**
 * 【使い方】
 *    1. theme.fontSizesの値を指定する
 *      <Text fontSize="md">...</Text>
 *        => { fontSize: 16 } が生成
 *
 *    2. 任意のピクセルを指定する
 *     <Text fontSize={40}>...</Text>
 *        => { fontSize: 40 } が生成
 *
 *    3. デバイスごとに値を指定する
 *     <Text fontSize={['md', { iPhoneSE: '2xs' }]}>...</Text>
 *        => { fontSize: 16 } ... iPhoneSE以外のデバイス
 *        => { fontSize: 11 } ... iPhoneSE
 */
type Props = {
  fontSize?: FontSizeProps;
};

export const styleFontSize = (props: Props): TextStyle => {
  if (!props.fontSize) return {};

  if (Array.isArray(props.fontSize)) {
    return {
      fontSize: selector(props.fontSize, getValue),
    };
  }

  return {
    fontSize: getValue(props.fontSize ?? 'md'),
  };
};

const getValue = (prop: number | FontSizes): number => {
  if (typeof prop === 'number') return prop;

  return theme.fontSizes[prop];
};
