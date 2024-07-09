/**
 *     articles details recommendations selectors
 */

import { StateSchema } from 'app/provider/StoreProvider';

export const getArticleDetailRecommendationsIsLoadingSelector = (state: StateSchema) => state.articlesPageRecommendations?.isLoading || false;
export const getArticleDetailRecommendationsErrorSelector = (state: StateSchema) => state.articlesPageRecommendations?.error;
export const getArticleDetailRecommendationsLimitSelector = (state: StateSchema) => state.articlesPageRecommendations?.limit;
export const getArticleDetailRecommendationsHasMoreSelector = (state: StateSchema) => state.articlesPageRecommendations?.hasMore || false;
export const getArticleDetailRecommendationsInitedSelecor = (state: StateSchema) => state.articlesPageRecommendations?._inited;
