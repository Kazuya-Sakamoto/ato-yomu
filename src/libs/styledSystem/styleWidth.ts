import { selector, type Selectors } from '@/libs/styledSystem/responsive';

type Props = {
  width?: Value;
};
export type WidthProps = Props;

type Width = number | string;
type WidthSelectors = Selectors<Props['width']>;
type Value = Width | [Width, WidthSelectors];

export const styleWidth = (props: Props) => {
  if (!props.width) return {};

  if (Array.isArray(props.width)) {
    return {
      width: selector(props.width, getValue),
    };
  }

  return {
    width: props.width,
  };
};

const getValue = (prop: number | string) => prop;
