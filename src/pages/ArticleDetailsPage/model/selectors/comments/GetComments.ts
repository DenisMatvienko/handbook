import { StateSchema } from 'app/provider/StoreProvider';

export const getArticleCommentsIsLoading = (state: StateSchema) => state.articleDetailsComments?.isLoading;
export const getArticleCommentsError = (state: StateSchema) => state.articleDetailsComments?.error;
export const getArticleCommentsLimit = (state: StateSchema) => state.articleDetailsComments?.limit || 5;
export const getArticleCommentsHasMore = (state: StateSchema) => state.articleDetailsComments?.hasMore || false;
export const getArticleCommentsPage = (state: StateSchema) => state.articleDetailsComments?.page || 1;
