import { StateSchema } from 'app/provider/StoreProvider';
import { ArticleView } from 'entities/Article';

export const getArticlesPageIsLoading = (state: StateSchema) => state.articlesPage?.isLoading || false;
export const getArticlePageError = (state: StateSchema) => state.articlesPage?.error || false;
export const getArticlePageView = (state: StateSchema) => state.articlesPage?.view || ArticleView.LIST;
