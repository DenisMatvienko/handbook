/**
 *     articles details recommendations selectors
 */

import { StateSchema } from 'app/provider/StoreProvider';

export const getArticleDetailRecommendationsIsLoadingSelector = (state: StateSchema) => state.articleDetailRecommendations?.isLoading || false;
export const getArticleDetailRecommendationsErrorSelector = (state: StateSchema) => state.articleDetailRecommendations?.error;
export const getArticleDetailRecommendationsLimitSelector = (state: StateSchema) => state.articleDetailRecommendations?.limit;
export const getArticleDetailRecommendationsHasMoreSelector = (state: StateSchema) => state.articleDetailRecommendations?.hasMore || false;
export const getArticleDetailRecommendationsInitedSelecor = (state: StateSchema) => state.articleDetailRecommendations?._inited;
