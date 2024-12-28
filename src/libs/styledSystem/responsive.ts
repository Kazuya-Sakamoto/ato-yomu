import { Platform } from 'react-native';

import {
  devices,
  iosSelector,
  type IosSelectorProps,
  type IosSelectors,
} from '@/libs/responsive';

export type Selectors<T> = Partial<Record<IosSelectors, T>> & {
  android?: T;
};

type Props = [string | number, Selectors<unknown>];
type GetValue<V, P> = (props: P) => V;

// デバイスによって値を返却する
export const selector = <V, P>(props: Props, getValue: GetValue<V, P>): V => {
  return Platform.select({
    ios: selectForIOS<V, P>(props, getValue),
    android: selectForAndroid<V, P>(props, getValue),
  }) as V;
};

const selectForIOS = <V, P>(
  [defaultValue, optionalValue]: Props,
  getValue: GetValue<V, P>,
) => {
  const keys = Object.keys(optionalValue ?? {}) as IosSelectors[];

  const optionalObj = keys.reduce((acc, k) => {
    acc[k] = getValue(optionalValue[k] as P);
    return acc;
  }, {} as IosSelectorProps<V>);

  const obj = devices.reduce((acc, k) => {
    acc[k] = getValue(defaultValue as P);
    if (optionalObj[k]) acc[k] = optionalObj[k];
    return acc;
  }, {} as IosSelectorProps<V>);

  return iosSelector(obj);
};

const selectForAndroid = <V, P>(
  [defaultValue, optionalValue]: Props,
  getValue: GetValue<V, P>,
) => {
  return getValue((optionalValue.android ?? defaultValue) as P);
};
