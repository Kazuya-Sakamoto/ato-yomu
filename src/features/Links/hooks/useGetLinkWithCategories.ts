import { useGetLinkWithCategoriesQuery } from '@/graphql/types';
import {
  type GetLinkWithCategoriesQueryResult,
  type GetLinkWithCategory,
} from '@/graphql/types/getLinkWithCategoriesQuery';

/**
 * @param userId
 * @returns { loading, error, links }
 */
export const useGetLinkWithCategories = (userId: number) => {
  const { data, loading, error }: GetLinkWithCategoriesQueryResult =
    useGetLinkWithCategoriesQuery({
      variables: { userId },
    });

  const links: GetLinkWithCategory[] =
    data?.getLinkWithCategories?.filter(
      (l): l is GetLinkWithCategory => l !== null,
    ) ?? [];

  return { loading, error, links };
};
