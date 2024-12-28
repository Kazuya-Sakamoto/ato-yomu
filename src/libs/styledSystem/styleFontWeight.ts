import type { TextStyle } from 'react-native';
import theme from 'src/config/theme';

export type FontWeightProps = keyof typeof theme.fontWeights;

type Props = {
  fontWeight?: FontWeightProps;
};

export const styleFontWeight = (props: Props): TextStyle => {
  if (!props.fontWeight) return {};

  return {
    fontWeight: theme.fontWeights[props.fontWeight ?? 'body'],
  };
};
