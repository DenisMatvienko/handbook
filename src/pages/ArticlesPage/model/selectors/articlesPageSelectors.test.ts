/**
 *    articlePage selector test
 */

import { StateSchema } from 'app/provider/StoreProvider';
import {
  getArticlePageError, getArticlePageHasMore, getArticlePageLimit,
  getArticlePageView,
  getArticlesPageIsLoading, getArticlesPageNum,
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
  test('selector should return date of getArticlesPageNum', () => {
    const state: DeepPartial<StateSchema> = {
      articlesPage: {
        page: 1,
      },
    };
    expect(getArticlesPageNum(state as StateSchema))
      .toEqual(1);
  });
  test('selector get empty data of getArticlesPageNum', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticlesPageNum(state as StateSchema))
      .toEqual(1);
  });
  test('selector should return date of getArticlePageLimit', () => {
    const state: DeepPartial<StateSchema> = {
      articlesPage: {
        limit: 4,
      },
    };
    expect(getArticlePageLimit(state as StateSchema))
      .toEqual(4);
  });
  test('selector get empty data of getArticlePageLimit', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticlePageLimit(state as StateSchema))
      .toEqual(9);
  });
  test('selector should return date of getArticlePageHasMore', () => {
    const state: DeepPartial<StateSchema> = {
      articlesPage: {
        hasMore: true,
      },
    };
    expect(getArticlePageHasMore(state as StateSchema))
      .toEqual(true);
  });
  test('selector get empty data of getArticlePageHasMore', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticlePageHasMore(state as StateSchema))
      .toEqual(undefined);
  });
});
