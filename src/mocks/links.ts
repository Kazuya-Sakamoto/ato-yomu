export type LinkItem = {
  id: number;
  title: string;
  status: number;
  url: string;
  iconUrl: string;
  siteName: string;
  domainUrl: string;
  userId: number;
  createdDate: string;
  ogImage: string;
  metaDescription: string;
};

export const data = () => [
  {
    id: 1,
    title: 'Devin AIにテストを丸ごと書かせてCIがパスするまで作業してもらう方法',
    status: 1,
    url: 'https://zenn.dev/ubie_dev/articles/devin-for-test',
    iconUrl: 'https://static.zenn.studio/images/logo-transparent.png',
    siteName: 'Zenn',
    domainUrl: 'https://zenn.dev',
    userId: 1,
    createdDate: '2021-09-01',
    ogImage:
      'https://res.cloudinary.com/zenn/image/upload/s--nZv9XRRl--/c_fit%2Cg_north_west%2Cl_text:notosansjp-medium.otf_55:%25E7%2588%2586%25E9%2580%259F%25E3%2581%25A7%25E3%2581%258D%25E3%2582%258C%25E3%2581%2584%25E3%2581%25AA%2520LT%2520%25E3%2582%25B9%25E3%2583%25A9%25E3%2582%25A4%25E3%2583%2589%25E4%25BD%259C%25E3%2582%258A%25E3%2582%2592%25E6%2594%25AF%25E3%2581%2588%25E3%2582%258B%25E6%258A%2580%25E8%25A1%2593%2Cw_1010%2Cx_90%2Cy_100/g_south_west%2Cl_text:notosansjp-medium.otf_37:%25E3%2581%2599%25E3%2581%25B0%25E3%2582%258B%2Cx_203%2Cy_121/g_south_west%2Ch_90%2Cl_fetch:aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL3plbm4tdXNlci11cGxvYWQvYXZhdGFyL2ZhY2NhYjQ4OTAuanBlZw==%2Cr_max%2Cw_90%2Cx_87%2Cy_95/v1627283836/default/og-base-w1200-v2.png',
    metaDescription:
      'Devin AIを利用してテスト自動化を効率的に行う方法を紹介します。',
  },
  {
    id: 2,
    title: 'Goの古いコードが動かなくなることはほぼない理由',
    status: 1,
    iconUrl: 'https://static.zenn.studio/images/logo-transparent.png',
    url: 'https://zenn.dev/catatsuy/articles/fda1e42acad421',
    siteName: 'Zenn',
    domainUrl: 'https://zenn.dev',
    userId: 1,
    createdDate: '2021-10-15',
    ogImage:
      'https://res.cloudinary.com/zenn/image/upload/s--RVMWmn7r--/c_fit%2Cg_north_west%2Cl_text:notosansjp-medium.otf_55:Go%25E3%2581%25AE%25E5%258F%25A4%25E3%2581%2584%25E3%2582%25B3%25E3%2583%25BC%25E3%2583%2589%25E3%2581%258C%25E5%258B%2595%25E3%2581%258B%25E3%2581%25AA%25E3%2581%258F%25E3%2581%25AA%25E3%2582%258B%25E3%2581%2593%25E3%2581%25A8%25E3%2581%25AF%25E3%2581%25BB%25E3%2581%25BC%25E3%2581%25AA%25E3%2581%2584%25E7%2590%2586%25E7%2594%25B1%2Cw_1010%2Cx_90%2Cy_100/g_south_west%2Cl_text:notosansjp-medium.otf_37:catatsuy%2Cx_203%2Cy_121/g_south_west%2Ch_90%2Cl_fetch:aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL3plbm4tdXNlci11cGxvYWQvYXZhdGFyL2NiYTVlYjRjMTEuanBlZw==%2Cr_max%2Cw_90%2Cx_87%2Cy_95/v1627283836/default/og-base-w1200-v2.png',
    metaDescription: 'Goの古いコードが動かなくなることはほぼない理由を解説。',
  },
  {
    id: 3,
    title:
      'フロントエンドのディレクトリ設計を移行した話 | Atomic Design → Feature',
    status: 1,
    iconUrl: 'https://static.zenn.studio/images/logo-transparent.png',
    url: 'https://zenn.dev/kazuyakk/articles/3cda9e11454613',
    siteName: 'Zenn',
    domainUrl: 'https://zenn.dev',
    userId: 1,
    createdDate: '2021-11-20',
    ogImage:
      'https://res.cloudinary.com/zenn/image/upload/s--9aECCFgX--/c_fit%2Cg_north_west%2Cl_text:notosansjp-medium.otf_55:%25E3%2583%2595%25E3%2583%25AD%25E3%2583%25B3%25E3%2583%2588%25E3%2582%25A8%25E3%2583%25B3%25E3%2583%2589%25E3%2581%25AE%25E3%2583%2587%25E3%2582%25A3%25E3%2583%25AC%25E3%2582%25AF%25E3%2583%2588%25E3%2583%25AA%25E8%25A8%25AD%25E8%25A8%2588%25E3%2582%2592%25E7%25A7%25BB%25E8%25A1%258C%25E3%2581%2597%25E3%2581%259F%25E8%25A9%25B1%2520%257C%2520Atomic%2520Design%2520%25E2%2586%2592%2520Feature%2Cw_1010%2Cx_90%2Cy_100/g_south_west%2Cl_text:notosansjp-medium.otf_37:%25E3%2581%258D%25E3%2581%25AA%25E3%2581%2593%2Cx_203%2Cy_121/g_south_west%2Ch_90%2Cl_fetch:aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL3plbm4tdXNlci11cGxvYWQvYXZhdGFyLzU4OTA2M2YxNzIuanBlZw==%2Cr_max%2Cw_90%2Cx_87%2Cy_95/v1627283836/default/og-base-w1200-v2.png',
    metaDescription:
      'フロントエンドのディレクトリ設計を移行した話 | Atomic Design → Featureを紹介します。',
  },
];
