import { Dimensions, PixelRatio, Platform } from 'react-native';

const DEVICES = {
  iPhoneSe: { width: 640 },
  iPhone8: { width: 750 },
};

const fetchDeviceWidth = () =>
  Dimensions.get('window').width * PixelRatio.get();

const maxWidth = <YES, No>(max: number, yes: YES, no: No) =>
  max >= fetchDeviceWidth() ? yes : no;

const whenIPhoneSE = <YES, No>(yes: YES, no: No) =>
  maxWidth(DEVICES.iPhoneSe.width, yes, no);

export const devices = ['iPhoneSE', 'iPhone8', 'other'] as const;

export type IosSelectorProps<V> = Record<(typeof devices)[number], V>;
export type IosSelectors = (typeof devices)[number];

const iosSelector = <V>({
  iPhoneSE,
  iPhone8,
  other,
}: IosSelectorProps<V>): V => {
  if (DEVICES.iPhoneSe.width >= fetchDeviceWidth()) return iPhoneSE;
  if (DEVICES.iPhone8.width >= fetchDeviceWidth()) return iPhone8;

  return other;
};

export { whenIPhoneSE, iosSelector };

// WARNING: Androidのみ日本語がズレる
// @see https://github.com/facebook/react-native/issues/24465
export const getTextLineHeight = (fontSize: number) =>
  Platform.select({ ios: fontSize, android: fontSize * 1.5 });
