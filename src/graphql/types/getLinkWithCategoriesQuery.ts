import type { QueryResult } from '@apollo/client';

import type {
  GetLinkWithCategoriesQuery,
  GetLinkWithCategoriesQueryVariables,
} from '@/graphql/types';

export {
  GetLinkWithCategoriesQuery,
  GetLinkWithCategoriesQueryVariables,
} from '@/graphql/types';

export type GetLinkWithCategoriesQueryResult = QueryResult<
  GetLinkWithCategoriesQuery,
  GetLinkWithCategoriesQueryVariables
>;

export type GetLinkWithCategory = NonNullable<
  GetLinkWithCategoriesQuery['getLinkWithCategories'][number]
>;

export type Category = NonNullable<GetLinkWithCategory['categories']>[number];

export type QueryProps = Pick<
  GetLinkWithCategoriesQueryResult,
  'loading' | 'error'
>;
