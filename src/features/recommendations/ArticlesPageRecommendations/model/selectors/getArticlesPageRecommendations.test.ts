/**
 *    Article recommendations main selector test
 */

import { StateSchema } from 'app/provider/StoreProvider';
import {
  getArticlesPageRecommendationsErrorSelector,
  getArticlesPageRecommendationsHasMoreSelector,
  getArticlesPageRecommendationsInitedSelecor,
  getArticlesPageRecommendationsIsLoadingSelector,
  getArticlesPageRecommendationsLimitSelector,
} from 'features/recommendations/ArticlesPageRecommendations/model/selectors/getArticlesPageRecommendations';

describe('get recommendations', () => {
  test('selector should return date of getArticlesPageRecommendationsIsLoadingSelector', () => {
    const state: DeepPartial<StateSchema> = {
      articlesPageRecommendations: {
        isLoading: true,
      },
    };
    expect(getArticlesPageRecommendationsIsLoadingSelector(state as StateSchema))
      .toEqual(true);
  });
  test('selector get empty data of getArticlesPageRecommendationsIsLoadingSelector', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticlesPageRecommendationsIsLoadingSelector(state as StateSchema))
      .toEqual(false);
  });
  test('selector should return date of getArticlesPageRecommendationsErrorSelector', () => {
    const state: DeepPartial<StateSchema> = {
      articlesPageRecommendations: {
        error: 'error',
      },
    };
    expect(getArticlesPageRecommendationsErrorSelector(state as StateSchema))
      .toEqual('error');
  });
  test('selector get empty data of getArticlesPageRecommendationsErrorSelector', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticlesPageRecommendationsErrorSelector(state as StateSchema))
      .toEqual(undefined);
  });
  test('selector should return date of getArticlesPageRecommendationsLimitSelector', () => {
    const state: DeepPartial<StateSchema> = {
      articlesPageRecommendations: {
        limit: 5,
      },
    };
    expect(getArticlesPageRecommendationsLimitSelector(state as StateSchema))
      .toEqual(5);
  });
  test('selector get empty data of getArticlesPageRecommendationsLimitSelector', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticlesPageRecommendationsLimitSelector(state as StateSchema))
      .toEqual(undefined);
  });
  test('selector should return date of getArticlesPageRecommendationsInitedSelecor', () => {
    const state: DeepPartial<StateSchema> = {
      articlesPageRecommendations: {
        _inited: true,
      },
    };
    expect(getArticlesPageRecommendationsInitedSelecor(state as StateSchema))
      .toEqual(true);
  });
  test('selector get empty data of getArticlesPageRecommendationsInitedSelecor', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticlesPageRecommendationsInitedSelecor(state as StateSchema))
      .toEqual(undefined);
  });
  test('selector should return date of getArticlesPageRecommendationsHasMoreSelector', () => {
    const state: DeepPartial<StateSchema> = {
      articlesPageRecommendations: {
        hasMore: true,
      },
    };
    expect(getArticlesPageRecommendationsHasMoreSelector(state as StateSchema))
      .toEqual(true);
  });
  test('selector get empty data of getArticlesPageRecommendationsHasMoreSelector', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticlesPageRecommendationsHasMoreSelector(state as StateSchema))
      .toEqual(false);
  });
});
