/**
 *     getNavbarSearchSelector
 *
 *      @param articleList;
 *          - Get list of article when searched;
 */

import { StateSchema } from 'app/provider/StoreProvider';

export const getArticlesPageRecommendationsIsLoadingSelector = (state: StateSchema) => state.articlesPageRecommendations?.isLoading || false;
export const getArticlesPageRecommendationsErrorSelector = (state: StateSchema) => state.articlesPageRecommendations?.error;
export const getArticlesPageRecommendationsLimitSelector = (state: StateSchema) => state.articlesPageRecommendations?.limit;
export const getArticlesPageRecommendationsHasMoreSelector = (state: StateSchema) => state.articlesPageRecommendations?.hasMore || false;
export const getArticlesPageRecommendationsInitedSelecor = (state: StateSchema) => state.articlesPageRecommendations?._inited;
