/**
 *    articlePage selector test
 */

import { StateSchema } from 'app/provider/StoreProvider';
import {
  getArticlePageError,
  getArticlePageView,
  getArticlesPageIsLoading,
} from 'pages/ArticlesPage/model/selectors/articlesPageSelectors';
import { ArticleView } from 'entities/Article';

describe('articlePageSelector', () => {
  test('selector should return date of articlePageSelectorIsLoading', () => {
    const state: DeepPartial<StateSchema> = {
      articlesPage: {
        isLoading: true,
      },
    };
    expect(getArticlesPageIsLoading(state as StateSchema))
      .toEqual(true);
  });
  test('selector get empty data of articlePageSelectorIsLoading', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticlesPageIsLoading(state as StateSchema))
      .toEqual(false);
  });
  test('selector should return date of getArticlePageError', () => {
    const state: DeepPartial<StateSchema> = {
      articlesPage: {
        error: 'error',
      },
    };
    expect(getArticlePageError(state as StateSchema))
      .toEqual('error');
  });
  test('selector get empty data of getArticlePageError', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticlePageError(state as StateSchema))
      .toEqual(false);
  });
  test('selector should return date of getArticlePageView', () => {
    const state: DeepPartial<StateSchema> = {
      articlesPage: {
        view: ArticleView.GRID,
      },
    };
    expect(getArticlePageView(state as StateSchema))
      .toEqual(ArticleView.GRID);
  });
  test('selector get empty data of getArticlePageView', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticlePageView(state as StateSchema))
      .toEqual(ArticleView.LIST);
  });
});
