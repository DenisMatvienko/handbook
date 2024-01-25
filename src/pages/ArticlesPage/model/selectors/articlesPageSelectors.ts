import { StateSchema } from 'app/provider/StoreProvider';
import { ArticleView } from 'entities/Article';
import { ArticleSortField } from 'entities/Article/model/types/article';

export const getArticlesPageIsLoading = (state: StateSchema) => state.articlesPage?.isLoading || false;
export const getArticlePageError = (state: StateSchema) => state.articlesPage?.error || false;
export const getArticlePageView = (state: StateSchema) => state.articlesPage?.view || ArticleView.LIST;
export const getArticlesPageNum = (state: StateSchema) => state.articlesPage?.page || 1;
export const getArticlePageLimit = (state: StateSchema) => state.articlesPage?.limit || 9;
export const getArticlePageHasMore = (state: StateSchema) => state.articlesPage?.hasMore;
export const getArticlePageInited = (state: StateSchema) => state.articlesPage?._inited;
export const getArticlePageSort = (state: StateSchema) => state.articlesPage?.sort || ArticleSortField.TITLE;
export const getArticlePageOrder = (state: StateSchema) => state.articlesPage?.order || 'asc';
export const getArticlePageSearch = (state: StateSchema) => state.articlesPage?.search || '';
