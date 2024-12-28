import { getTextLineHeight } from '@/libs/responsive';

type Props = {
  height?: number;
};

export const styleHeight = (props: Props) => {
  if (!props.height) return {};

  return {
    height: getTextLineHeight(props.height),
  };
};
