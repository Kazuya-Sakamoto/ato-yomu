import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
    };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  DateTime: { input: any; output: any };
};

export type Category = {
  __typename?: 'Category';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  userId: Scalars['Int']['output'];
};

export type Link = {
  __typename?: 'Link';
  categories?: Maybe<Array<Category>>;
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  domainUrl?: Maybe<Scalars['String']['output']>;
  iconUrl?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  ogImageUrl?: Maybe<Scalars['String']['output']>;
  siteName?: Maybe<Scalars['String']['output']>;
  /** 1: PENDING, 2: DELETED */
  status: Scalars['Int']['output'];
  title?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  url: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  getLinkWithCategories: Array<Maybe<Link>>;
};

export type QueryGetLinkWithCategoriesArgs = {
  userId: Scalars['Int']['input'];
};

export type GetLinkWithCategoriesQueryVariables = Exact<{
  userId: Scalars['Int']['input'];
}>;

export type GetLinkWithCategoriesQuery = {
  __typename?: 'Query';
  getLinkWithCategories: Array<{
    __typename?: 'Link';
    id: number;
    status: number;
    title?: string | null;
    ogImageUrl?: string | null;
    url: string;
    iconUrl?: string | null;
    siteName?: string | null;
    domainUrl?: string | null;
    createdAt: any;
    categories?: Array<{
      __typename?: 'Category';
      id: number;
      name: string;
    }> | null;
  } | null>;
};

export const GetLinkWithCategoriesDocument = gql`
  query GetLinkWithCategories($userId: Int!) {
    getLinkWithCategories(userId: $userId) {
      id
      status
      title
      ogImageUrl
      url
      iconUrl
      siteName
      domainUrl
      createdAt
      categories {
        id
        name
      }
    }
  }
`;

/**
 * __useGetLinkWithCategoriesQuery__
 *
 * To run a query within a React component, call `useGetLinkWithCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLinkWithCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLinkWithCategoriesQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useGetLinkWithCategoriesQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetLinkWithCategoriesQuery,
    GetLinkWithCategoriesQueryVariables
  > &
    (
      | { variables: GetLinkWithCategoriesQueryVariables; skip?: boolean }
      | { skip: boolean }
    ),
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetLinkWithCategoriesQuery,
    GetLinkWithCategoriesQueryVariables
  >(GetLinkWithCategoriesDocument, options);
}
export function useGetLinkWithCategoriesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetLinkWithCategoriesQuery,
    GetLinkWithCategoriesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetLinkWithCategoriesQuery,
    GetLinkWithCategoriesQueryVariables
  >(GetLinkWithCategoriesDocument, options);
}
export function useGetLinkWithCategoriesSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        GetLinkWithCategoriesQuery,
        GetLinkWithCategoriesQueryVariables
      >,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    GetLinkWithCategoriesQuery,
    GetLinkWithCategoriesQueryVariables
  >(GetLinkWithCategoriesDocument, options);
}
export type GetLinkWithCategoriesQueryHookResult = ReturnType<
  typeof useGetLinkWithCategoriesQuery
>;
export type GetLinkWithCategoriesLazyQueryHookResult = ReturnType<
  typeof useGetLinkWithCategoriesLazyQuery
>;
export type GetLinkWithCategoriesSuspenseQueryHookResult = ReturnType<
  typeof useGetLinkWithCategoriesSuspenseQuery
>;
export type GetLinkWithCategoriesQueryResult = Apollo.QueryResult<
  GetLinkWithCategoriesQuery,
  GetLinkWithCategoriesQueryVariables
>;
