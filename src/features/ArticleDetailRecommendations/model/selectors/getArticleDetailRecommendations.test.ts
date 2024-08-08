/**
 *    Article recommendations detail selector test
 */

import { StateSchema } from 'app/provider/StoreProvider';
import {
  getArticleDetailRecommendationsErrorSelector,
  getArticleDetailRecommendationsHasMoreSelector,
  getArticleDetailRecommendationsInitedSelecor,
  getArticleDetailRecommendationsIsLoadingSelector,
  getArticleDetailRecommendationsLimitSelector,
} from 'features/ArticleDetailRecommendations/model/selectors/getArticleDetailRecommendations';

describe('get recommendations', () => {
  test('selector should return date of getArticleDetailRecommendationsIsLoadingSelector', () => {
    const state: DeepPartial<StateSchema> = {
      articlesPageRecommendations: {
        isLoading: true,
      },
    };
    expect(getArticleDetailRecommendationsIsLoadingSelector(state as StateSchema))
      .toEqual(true);
  });
  test('selector get empty data of getArticleDetailRecommendationsIsLoadingSelector', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticleDetailRecommendationsIsLoadingSelector(state as StateSchema))
      .toEqual(false);
  });
  test('selector should return date of getArticleDetailRecommendationsErrorSelector', () => {
    const state: DeepPartial<StateSchema> = {
      articlesPageRecommendations: {
        error: 'error',
      },
    };
    expect(getArticleDetailRecommendationsErrorSelector(state as StateSchema))
      .toEqual('error');
  });
  test('selector get empty data of getArticleDetailRecommendationsErrorSelector', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticleDetailRecommendationsErrorSelector(state as StateSchema))
      .toEqual(undefined);
  });
  test('selector should return date of getArticleDetailRecommendationsLimitSelector', () => {
    const state: DeepPartial<StateSchema> = {
      articlesPageRecommendations: {
        limit: 5,
      },
    };
    expect(getArticleDetailRecommendationsLimitSelector(state as StateSchema))
      .toEqual(5);
  });
  test('selector get empty data of getArticleDetailRecommendationsLimitSelector', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticleDetailRecommendationsLimitSelector(state as StateSchema))
      .toEqual(undefined);
  });
  test('selector should return date of getArticleDetailRecommendationsInitedSelecor', () => {
    const state: DeepPartial<StateSchema> = {
      articlesPageRecommendations: {
        _inited: true,
      },
    };
    expect(getArticleDetailRecommendationsInitedSelecor(state as StateSchema))
      .toEqual(true);
  });
  test('selector get empty data of getArticleDetailRecommendationsInitedSelecor', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticleDetailRecommendationsInitedSelecor(state as StateSchema))
      .toEqual(undefined);
  });
  test('selector should return date of getArticleDetailRecommendationsHasMoreSelector', () => {
    const state: DeepPartial<StateSchema> = {
      articlesPageRecommendations: {
        hasMore: true,
      },
    };
    expect(getArticleDetailRecommendationsHasMoreSelector(state as StateSchema))
      .toEqual(true);
  });
  test('selector get empty data of getArticleDetailRecommendationsHasMoreSelector', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticleDetailRecommendationsHasMoreSelector(state as StateSchema))
      .toEqual(false);
  });
});
