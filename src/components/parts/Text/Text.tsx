import React, { type ReactNode } from 'react';
import {
  Platform,
  Text as RNText,
  StyleSheet,
  type TextProps,
  type TextStyle,
} from 'react-native';

import {
  styleFontColor,
  styleFontSize,
  styleFontWeight,
  styleHeight,
  styleSpace,
  type FontColorsProps,
  type FontSizeProps,
  type FontWeightProps,
  type SpaceProps,
} from '@/libs/styledSystem';
import { styleWidth, type WidthProps } from '@/libs/styledSystem/styleWidth';

export type Props = {
  /**
   * フォントサイズ
   *
   * @description
   * | フォントサイズ | ピクセルサイズ |
   * |:----------------------:|:--------------:|
   * | 9xl                  | 52           |
   * | 8xl                  | 48           |
   * | 7xl                  | 44           |
   * | 6xl                  | 40           |
   * | 5xl                  | 36           |
   * | 4xl                  | 32           |
   * | 3xl                  | 28           |
   * | 2xl                  | 24           |
   * | xl                   | 20           |
   * | lg                   | 18           |
   * | md                   | 16           |
   * | sm                   | 14           |
   * | xs                   | 12           |
   * | 2xs                  | 11           |
   * | 3xs                  | 10           |
   * | 4xs                  | 9            |
   *
   */
  fontSize?: FontSizeProps;

  /**
   * フォントウェイト
   *
   * @description
   * | フォントウェイト | ウェイトサイズ |
   * |:----------------------:|:--------------:|
   * | body                  | 400           |
   * | bold                  | ios: 600, android: 700 |
   */
  fontWeight?: FontWeightProps;

  /**
   * カラー
   *
   * | カラー     | 配色テーマ       | カラーコード |
   * | -------------- | ----------------- | ------------ |
   * | primary        | brand.main        | `#3CABAD`      |
   * | text           | base.dark         | `#333333`      |
   * | background     | background.main   | `#ffffff`      |
   * | muted          | base.main         | `#848B8C`      |
   * | placeholder    | base.light        | `#D5D5D5`      |
   */
  color?: FontColorsProps;
  height?: number;
  lineHeight?: number;
  textAlign?: TextStyle['textAlign'];
  textAlignVertical?: TextStyle['textAlignVertical'];
  flex?: TextStyle['flex'];
  textDecorationLine?: TextStyle['textDecorationLine'];

  /**
   * 行高をデフォルトで設定するかしないかのオプション。
   *
   * デフォルトでは行高を設定する
   */
  defaultLineHeight?: boolean;
} & TextProps &
  SpaceProps &
  WidthProps & {
    children?: ReactNode;
  };

const Text = (props: Props) => {
  let style = {
    ...styleSpace(props),
    ...styleFontWeight(props),
    ...styleFontSize(props),
    ...styleFontColor(props),
    ...styleHeight(props),
    ...styleWidth(props),
  } as TextStyle;

  style = enhanceStyle(style, props);

  return (
    <RNText
      {...props}
      style={[
        styles.root,
        style,
        ...(Array.isArray(props.style) ? props.style : [props.style ?? {}]),
      ]}
      accessibilityRole={props.accessibilityRole ?? 'text'}
    />
  );
};

const enhanceStyle = (style: TextStyle, props: Props) => {
  const defaultLineHeight = props.defaultLineHeight ?? true;

  // デフォルトの行高を設定
  if (!style.height && defaultLineHeight) {
    style.lineHeight = Platform.select({
      ios: style.fontSize! * 1.5,
    });
  }

  if (props.textAlign) style.textAlign = props.textAlign;
  if (props.textAlignVertical)
    style.textAlignVertical = props.textAlignVertical;
  if (props.flex) style.flex = props.flex;
  if (props.textDecorationLine)
    style.textDecorationLine = props.textDecorationLine;
  if (props.lineHeight) style.lineHeight = props.lineHeight;

  return style;
};

const styles = StyleSheet.create({
  root: {
    flexShrink: 1,
  },
});

export default Text;
