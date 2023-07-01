const BASE_URL = 'https://api.carrot-market.store';

const REQUEST_URL = {
  REGIONS: `${BASE_URL}/regions`,
  USERS: `${BASE_URL}/users`,
  USER_REGIONS: `${BASE_URL}/users/regions`,
  POSTS: `${BASE_URL}/posts`,
  POST_OF_INTEREST: `${BASE_URL}/posts/interests`,
  BADGES: `${BASE_URL}/posts/badges`,
  CATEGORY: `${BASE_URL}/categories`,
  CATEGORY_RECOMMENDS: `${BASE_URL}/categories/recommended`,
  CHATTING: `${BASE_URL}/chattings`,
  OAUTH: `${BASE_URL}/oauth`,
} as const;

export { REQUEST_URL };
