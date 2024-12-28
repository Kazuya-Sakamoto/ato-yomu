import {
  space as themedSpace,
  type Space as ThemedSpace,
} from '@/config/theme';
import { selector, type Selectors } from '@/libs/styledSystem/responsive';

type Spaces = {
  /**
   * @description
   * | スペーシングの値 | ピクセルサイズ |
   * |:----------------:|:--------------:|
   * | $0.5              | 2              |
   * | $1                | 4              |
   * | $2                | 8              |
   * | $3                | 12             |
   * | $4                | 16             |
   * | $5                | 20             |
   * | $6                | 24             |
   * | $7                | 28             |
   * | $8                | 32             |
   * | $9                | 36             |
   * | $10               | 40             |
   * | $11               | 44             |
   * | $12               | 48             |
   * | $14               | 56             |
   * | $16               | 64             |
   * | $20               | 80             |
   * | $24               | 96             |
   * | $28               | 112            |
   * | $32               | 128            |
   * | $36               | 144            |
   * | $40               | 160            |
   * | $44               | 176            |
   * | $48               | 192            |
   * | $52               | 208            |
   * | $56               | 224            |
   * | $60               | 240            |
   * | $64               | 256            |
   * | $72               | 288            |
   * | $80               | 320            |
   * | $96               | 384            |
   *
   */
  m?: Value;
  /**
   * @description
   * | スペーシングの値 | ピクセルサイズ |
   * |:----------------:|:--------------:|
   * | $0.5              | 2              |
   * | $1                | 4              |
   * | $2                | 8              |
   * | $3                | 12             |
   * | $4                | 16             |
   * | $5                | 20             |
   * | $6                | 24             |
   * | $7                | 28             |
   * | $8                | 32             |
   * | $9                | 36             |
   * | $10               | 40             |
   * | $11               | 44             |
   * | $12               | 48             |
   * | $14               | 56             |
   * | $16               | 64             |
   * | $20               | 80             |
   * | $24               | 96             |
   * | $28               | 112            |
   * | $32               | 128            |
   * | $36               | 144            |
   * | $40               | 160            |
   * | $44               | 176            |
   * | $48               | 192            |
   * | $52               | 208            |
   * | $56               | 224            |
   * | $60               | 240            |
   * | $64               | 256            |
   * | $72               | 288            |
   * | $80               | 320            |
   * | $96               | 384            |
   *
   */
  mt?: Value;
  /**
   * @description
   * | スペーシングの値 | ピクセルサイズ |
   * |:----------------:|:--------------:|
   * | $0.5              | 2              |
   * | $1                | 4              |
   * | $2                | 8              |
   * | $3                | 12             |
   * | $4                | 16             |
   * | $5                | 20             |
   * | $6                | 24             |
   * | $7                | 28             |
   * | $8                | 32             |
   * | $9                | 36             |
   * | $10               | 40             |
   * | $11               | 44             |
   * | $12               | 48             |
   * | $14               | 56             |
   * | $16               | 64             |
   * | $20               | 80             |
   * | $24               | 96             |
   * | $28               | 112            |
   * | $32               | 128            |
   * | $36               | 144            |
   * | $40               | 160            |
   * | $44               | 176            |
   * | $48               | 192            |
   * | $52               | 208            |
   * | $56               | 224            |
   * | $60               | 240            |
   * | $64               | 256            |
   * | $72               | 288            |
   * | $80               | 320            |
   * | $96               | 384            |
   *
   */
  mr?: Value;
  /**
   * @description
   * | スペーシングの値 | ピクセルサイズ |
   * |:----------------:|:--------------:|
   * | $0.5              | 2              |
   * | $1                | 4              |
   * | $2                | 8              |
   * | $3                | 12             |
   * | $4                | 16             |
   * | $5                | 20             |
   * | $6                | 24             |
   * | $7                | 28             |
   * | $8                | 32             |
   * | $9                | 36             |
   * | $10               | 40             |
   * | $11               | 44             |
   * | $12               | 48             |
   * | $14               | 56             |
   * | $16               | 64             |
   * | $20               | 80             |
   * | $24               | 96             |
   * | $28               | 112            |
   * | $32               | 128            |
   * | $36               | 144            |
   * | $40               | 160            |
   * | $44               | 176            |
   * | $48               | 192            |
   * | $52               | 208            |
   * | $56               | 224            |
   * | $60               | 240            |
   * | $64               | 256            |
   * | $72               | 288            |
   * | $80               | 320            |
   * | $96               | 384            |
   *
   */
  mb?: Value;
  /**
   * @description
   * | スペーシングの値 | ピクセルサイズ |
   * |:----------------:|:--------------:|
   * | $0.5              | 2              |
   * | $1                | 4              |
   * | $2                | 8              |
   * | $3                | 12             |
   * | $4                | 16             |
   * | $5                | 20             |
   * | $6                | 24             |
   * | $7                | 28             |
   * | $8                | 32             |
   * | $9                | 36             |
   * | $10               | 40             |
   * | $11               | 44             |
   * | $12               | 48             |
   * | $14               | 56             |
   * | $16               | 64             |
   * | $20               | 80             |
   * | $24               | 96             |
   * | $28               | 112            |
   * | $32               | 128            |
   * | $36               | 144            |
   * | $40               | 160            |
   * | $44               | 176            |
   * | $48               | 192            |
   * | $52               | 208            |
   * | $56               | 224            |
   * | $60               | 240            |
   * | $64               | 256            |
   * | $72               | 288            |
   * | $80               | 320            |
   * | $96               | 384            |
   *
   */
  ml?: Value;
  /**
   * @description
   * | スペーシングの値 | ピクセルサイズ |
   * |:----------------:|:--------------:|
   * | $0.5              | 2              |
   * | $1                | 4              |
   * | $2                | 8              |
   * | $3                | 12             |
   * | $4                | 16             |
   * | $5                | 20             |
   * | $6                | 24             |
   * | $7                | 28             |
   * | $8                | 32             |
   * | $9                | 36             |
   * | $10               | 40             |
   * | $11               | 44             |
   * | $12               | 48             |
   * | $14               | 56             |
   * | $16               | 64             |
   * | $20               | 80             |
   * | $24               | 96             |
   * | $28               | 112            |
   * | $32               | 128            |
   * | $36               | 144            |
   * | $40               | 160            |
   * | $44               | 176            |
   * | $48               | 192            |
   * | $52               | 208            |
   * | $56               | 224            |
   * | $60               | 240            |
   * | $64               | 256            |
   * | $72               | 288            |
   * | $80               | 320            |
   * | $96               | 384            |
   *
   */
  mx?: Value;
  /**
   * @description
   * | スペーシングの値 | ピクセルサイズ |
   * |:----------------:|:--------------:|
   * | $0.5              | 2              |
   * | $1                | 4              |
   * | $2                | 8              |
   * | $3                | 12             |
   * | $4                | 16             |
   * | $5                | 20             |
   * | $6                | 24             |
   * | $7                | 28             |
   * | $8                | 32             |
   * | $9                | 36             |
   * | $10               | 40             |
   * | $11               | 44             |
   * | $12               | 48             |
   * | $14               | 56             |
   * | $16               | 64             |
   * | $20               | 80             |
   * | $24               | 96             |
   * | $28               | 112            |
   * | $32               | 128            |
   * | $36               | 144            |
   * | $40               | 160            |
   * | $44               | 176            |
   * | $48               | 192            |
   * | $52               | 208            |
   * | $56               | 224            |
   * | $60               | 240            |
   * | $64               | 256            |
   * | $72               | 288            |
   * | $80               | 320            |
   * | $96               | 384            |
   *
   */
  my?: Value;
  /**
   * @description
   * | スペーシングの値 | ピクセルサイズ |
   * |:----------------:|:--------------:|
   * | $0.5              | 2              |
   * | $1                | 4              |
   * | $2                | 8              |
   * | $3                | 12             |
   * | $4                | 16             |
   * | $5                | 20             |
   * | $6                | 24             |
   * | $7                | 28             |
   * | $8                | 32             |
   * | $9                | 36             |
   * | $10               | 40             |
   * | $11               | 44             |
   * | $12               | 48             |
   * | $14               | 56             |
   * | $16               | 64             |
   * | $20               | 80             |
   * | $24               | 96             |
   * | $28               | 112            |
   * | $32               | 128            |
   * | $36               | 144            |
   * | $40               | 160            |
   * | $44               | 176            |
   * | $48               | 192            |
   * | $52               | 208            |
   * | $56               | 224            |
   * | $60               | 240            |
   * | $64               | 256            |
   * | $72               | 288            |
   * | $80               | 320            |
   * | $96               | 384            |
   *
   */
  p?: Value;
  /**
   * @description
   * | スペーシングの値 | ピクセルサイズ |
   * |:----------------:|:--------------:|
   * | $0.5              | 2              |
   * | $1                | 4              |
   * | $2                | 8              |
   * | $3                | 12             |
   * | $4                | 16             |
   * | $5                | 20             |
   * | $6                | 24             |
   * | $7                | 28             |
   * | $8                | 32             |
   * | $9                | 36             |
   * | $10               | 40             |
   * | $11               | 44             |
   * | $12               | 48             |
   * | $14               | 56             |
   * | $16               | 64             |
   * | $20               | 80             |
   * | $24               | 96             |
   * | $28               | 112            |
   * | $32               | 128            |
   * | $36               | 144            |
   * | $40               | 160            |
   * | $44               | 176            |
   * | $48               | 192            |
   * | $52               | 208            |
   * | $56               | 224            |
   * | $60               | 240            |
   * | $64               | 256            |
   * | $72               | 288            |
   * | $80               | 320            |
   * | $96               | 384            |
   *
   */
  pt?: Value;
  /**
   * @description
   * | スペーシングの値 | ピクセルサイズ |
   * |:----------------:|:--------------:|
   * | $0.5              | 2              |
   * | $1                | 4              |
   * | $2                | 8              |
   * | $3                | 12             |
   * | $4                | 16             |
   * | $5                | 20             |
   * | $6                | 24             |
   * | $7                | 28             |
   * | $8                | 32             |
   * | $9                | 36             |
   * | $10               | 40             |
   * | $11               | 44             |
   * | $12               | 48             |
   * | $14               | 56             |
   * | $16               | 64             |
   * | $20               | 80             |
   * | $24               | 96             |
   * | $28               | 112            |
   * | $32               | 128            |
   * | $36               | 144            |
   * | $40               | 160            |
   * | $44               | 176            |
   * | $48               | 192            |
   * | $52               | 208            |
   * | $56               | 224            |
   * | $60               | 240            |
   * | $64               | 256            |
   * | $72               | 288            |
   * | $80               | 320            |
   * | $96               | 384            |
   *
   */
  pr?: Value;
  /**
   * @description
   * | スペーシングの値 | ピクセルサイズ |
   * |:----------------:|:--------------:|
   * | $0.5              | 2              |
   * | $1                | 4              |
   * | $2                | 8              |
   * | $3                | 12             |
   * | $4                | 16             |
   * | $5                | 20             |
   * | $6                | 24             |
   * | $7                | 28             |
   * | $8                | 32             |
   * | $9                | 36             |
   * | $10               | 40             |
   * | $11               | 44             |
   * | $12               | 48             |
   * | $14               | 56             |
   * | $16               | 64             |
   * | $20               | 80             |
   * | $24               | 96             |
   * | $28               | 112            |
   * | $32               | 128            |
   * | $36               | 144            |
   * | $40               | 160            |
   * | $44               | 176            |
   * | $48               | 192            |
   * | $52               | 208            |
   * | $56               | 224            |
   * | $60               | 240            |
   * | $64               | 256            |
   * | $72               | 288            |
   * | $80               | 320            |
   * | $96               | 384            |
   *
   */
  pb?: Value;
  /**
   * @description
   * | スペーシングの値 | ピクセルサイズ |
   * |:----------------:|:--------------:|
   * | $0.5              | 2              |
   * | $1                | 4              |
   * | $2                | 8              |
   * | $3                | 12             |
   * | $4                | 16             |
   * | $5                | 20             |
   * | $6                | 24             |
   * | $7                | 28             |
   * | $8                | 32             |
   * | $9                | 36             |
   * | $10               | 40             |
   * | $11               | 44             |
   * | $12               | 48             |
   * | $14               | 56             |
   * | $16               | 64             |
   * | $20               | 80             |
   * | $24               | 96             |
   * | $28               | 112            |
   * | $32               | 128            |
   * | $36               | 144            |
   * | $40               | 160            |
   * | $44               | 176            |
   * | $48               | 192            |
   * | $52               | 208            |
   * | $56               | 224            |
   * | $60               | 240            |
   * | $64               | 256            |
   * | $72               | 288            |
   * | $80               | 320            |
   * | $96               | 384            |
   *
   */
  pl?: Value;
  /**
   * @description
   * | スペーシングの値 | ピクセルサイズ |
   * |:----------------:|:--------------:|
   * | $0.5              | 2              |
   * | $1                | 4              |
   * | $2                | 8              |
   * | $3                | 12             |
   * | $4                | 16             |
   * | $5                | 20             |
   * | $6                | 24             |
   * | $7                | 28             |
   * | $8                | 32             |
   * | $9                | 36             |
   * | $10               | 40             |
   * | $11               | 44             |
   * | $12               | 48             |
   * | $14               | 56             |
   * | $16               | 64             |
   * | $20               | 80             |
   * | $24               | 96             |
   * | $28               | 112            |
   * | $32               | 128            |
   * | $36               | 144            |
   * | $40               | 160            |
   * | $44               | 176            |
   * | $48               | 192            |
   * | $52               | 208            |
   * | $56               | 224            |
   * | $60               | 240            |
   * | $64               | 256            |
   * | $72               | 288            |
   * | $80               | 320            |
   * | $96               | 384            |
   *
   */
  px?: Value;
  /**
   * @description
   * | スペーシングの値 | ピクセルサイズ |
   * |:----------------:|:--------------:|
   * | $0.5              | 2              |
   * | $1                | 4              |
   * | $2                | 8              |
   * | $3                | 12             |
   * | $4                | 16             |
   * | $5                | 20             |
   * | $6                | 24             |
   * | $7                | 28             |
   * | $8                | 32             |
   * | $9                | 36             |
   * | $10               | 40             |
   * | $11               | 44             |
   * | $12               | 48             |
   * | $14               | 56             |
   * | $16               | 64             |
   * | $20               | 80             |
   * | $24               | 96             |
   * | $28               | 112            |
   * | $32               | 128            |
   * | $36               | 144            |
   * | $40               | 160            |
   * | $44               | 176            |
   * | $48               | 192            |
   * | $52               | 208            |
   * | $56               | 224            |
   * | $60               | 240            |
   * | $64               | 256            |
   * | $72               | 288            |
   * | $80               | 320            |
   * | $96               | 384            |
   *
   */
  py?: Value;
};
type SpaceKeys = keyof Spaces;

type SpaceValues = keyof ThemedSpace | number;
type SpacesSelectors = Selectors<SpaceValues>;

/**
 * @description
 * | スペーシングの値 | ピクセルサイズ |
 * |:----------------:|:--------------:|
 * | $0.5              | 2              |
 * | $1                | 4              |
 * | $2                | 8              |
 * | $3                | 12             |
 * | $4                | 16             |
 * | $5                | 20             |
 * | $6                | 24             |
 * | $7                | 28             |
 * | $8                | 32             |
 * | $9                | 36             |
 * | $10               | 40             |
 * | $11               | 44             |
 * | $12               | 48             |
 * | $14               | 56             |
 * | $16               | 64             |
 * | $20               | 80             |
 * | $24               | 96             |
 * | $28               | 112            |
 * | $32               | 128            |
 * | $36               | 144            |
 * | $40               | 160            |
 * | $44               | 176            |
 * | $48               | 192            |
 * | $52               | 208            |
 * | $56               | 224            |
 * | $60               | 240            |
 * | $64               | 256            |
 * | $72               | 288            |
 * | $80               | 320            |
 * | $96               | 384            |
 *
 * @example theme.spacing の値を指定する
 *      <Text mb="$1">...</Text>  // => { marginBottom: 4 } が生成
 *      <Text mb="$2">...</Text>  // => { marginBottom: 8 } が生成
 *
 * @example 任意のピクセルを指定する
 *     <Text mb={40}>...</Text>   //   => { marginBottom: 40 } が生成
 *     <Text mb={-10}>...</Text>  //   => { marginBottom: -10 } が生成
 *
 * @example デバイスごとに値を指定する
 *     <Text mb={['$1', { iPhoneSE: '$2' }]}>...</Text>
 *       //  => { marginBottom: 4 } ... iPhoneSE以外のデバイス
 *       //  => { marginBottom: 8 } ... iPhoneSE
 */

type Value = SpaceValues | [SpaceValues, SpacesSelectors];

export type SpaceProps = Spaces;

const isNegative = (n: number) => n < 0;
const isNum = (n: unknown) => typeof n === 'number' && !Number.isNaN(n);
const REG = /^[mp][trblxy]?$/;

const properties = {
  m: 'margin',
  p: 'padding',
} as const;

const directions = {
  t: 'Top',
  r: 'Right',
  b: 'Bottom',
  l: 'Left',
  x: ['Left', 'Right'],
  y: ['Top', 'Bottom'],
} as const;

export const styleSpace = (props: SpaceProps) => {
  const keys = (Object.keys(props) as SpaceKeys[])
    .filter((key) => REG.test(key))
    .sort();

  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return Object.assign(
    {},
    ...keys.map((key) => {
      const value = props[key]!;
      const mappedProperties = getProperties(key);

      return mappedProperties.reduce(
        (acc, k) => {
          // デバイスの指定があるとき
          if (Array.isArray(value)) {
            acc[k] = selector(value, getValue);
            return acc;
          }

          acc[k] = getValue(value);
          return acc;
        },
        {} as Record<string, number>,
      );
    }),
  );
};

const getProperties = (key: string) => {
  const [a, b] = key.split('') as [
    keyof typeof properties,
    keyof typeof directions,
  ];
  const property = properties[a];
  const direction = directions[b] || '';

  if (Array.isArray(direction)) {
    const dirMap: string[] = [];
    direction.forEach((m) => dirMap.push(m as string));
    return dirMap.map((dir: string) => property + dir);
  }
  // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
  return [property + direction];
};

const getValue = (n: SpaceValues) => {
  if (isNum(n)) {
    const abs = Math.abs(n as number);
    return abs * (isNegative(n as number) ? -1 : 1);
  }

  return themedSpace[n as keyof ThemedSpace];
};
