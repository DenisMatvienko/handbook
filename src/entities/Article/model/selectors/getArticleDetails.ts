import { StateSchema } from 'app/provider/StoreProvider';

export const getArticleDetails = (state: StateSchema) => state.articleDetails?.data;
export const getArticleIsLoading = (state: StateSchema) => state.articleDetails?.isLoading;
export const getArticleError = (state: StateSchema) => state.articleDetails?.error;
