/**
 *     getNavbarSearchSelector
 *
 *      @param articleList;
 *          - Get list of article when searched;
 */

import { StateSchema } from 'app/provider/StoreProvider';

export const getArticlesPageRecommendationsIsLoadingSelector = (state: StateSchema) => state.articlesPageRecommendations?.isLoading || false;
export const getArticlesPageRecommendationsErrorSelector = (state: StateSchema) => state.articlesPageRecommendations?.error;
