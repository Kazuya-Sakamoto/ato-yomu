import type { TextStyle } from 'react-native';

import theme from '@/config/theme';

export type FontColorsProps = keyof typeof theme.fontColors;

type Props = {
  color?: FontColorsProps;
};

export const styleFontColor = (props: Props): TextStyle => {
  if (!props.color) return {};

  return {
    color: theme.fontColors[props.color ?? 'text'],
  };
};
