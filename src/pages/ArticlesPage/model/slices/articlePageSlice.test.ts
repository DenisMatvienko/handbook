/**
 *    articlePageSlice test
 *      - test's for articlePageSlice
 *
 *    @param 'articles'.
 *      - Mock which multiplying articles
 *
 *    @param 'entities'.
 *      - Mock which emulate "entities" property in ArticlesPageSchema which extends EntityState<Article>
 *          - entities function create object with key @const 'key', and property @const 'value'
 *          as result entities equal:
 *            entities: {
 *                '0': {
 *                    id: ...
 *                    blocks: ...
 *                    etc..
 *                }
 *            }
 *
 */

import { ArticlesPageSchema } from 'pages/ArticlesPage';
import { ArticleView } from 'entities/Article';
import { articlePageSliceActions, articlePageSliceReducer } from 'pages/ArticlesPage/model/slices/articlePageSlice';
import { ARTICLES_VIEW_LOCALSTORAGE_KEY } from 'shared/const/localstorage';
import { fetchArticlesList } from 'pages/ArticlesPage/model/services/fetchArticleList/fetchArticlesList';
import { MockNormalizedDataGenerator } from 'shared/lib/tests/MockDataGenerator/MockNormalizedDataGenerator';
import {
  MockedEntitiesGenerator,
} from 'shared/lib/tests/MockDataGenerator/MockedEntitiesGenerator/MockedEntitiesGenerator';

describe('articlePageSlice', () => {
  const generatedArticleMock = new MockedEntitiesGenerator().createArticlesMock(16);
  const generatedNormalizedMock = new MockNormalizedDataGenerator().createNormalizedArticleMock(16);

  test('setView reducer test', () => {
    const state: DeepPartial<ArticlesPageSchema> = { view: ArticleView.GRID };
    expect(articlePageSliceReducer(
        state as ArticlesPageSchema,
        articlePageSliceActions.setView(ArticleView.LIST),
    ))
      .toEqual({ view: ArticleView.LIST });
  });
  test('setView storage test', () => {
    expect(localStorage.getItem(ARTICLES_VIEW_LOCALSTORAGE_KEY) as ArticleView)
      .toEqual('LIST');
  });

  test('initView reducer test', () => {
    const state: DeepPartial<ArticlesPageSchema> = {};
    expect(articlePageSliceReducer(
      state as ArticlesPageSchema,
      articlePageSliceActions.initView(),
    ))
      .toEqual({
        _inited: true,
        limit: 4,
        view: ArticleView.LIST,
      });
  });

  test('fetchArticlesList service fulfilled state in extraReducer', () => {
    const state: DeepPartial<ArticlesPageSchema> = {
      isLoading: true,
      hasMore: true,
      view: ArticleView.LIST,
      ids: new Array(16).fill(0).map((_, i) => String(i)),
      entities: generatedNormalizedMock,
    };

    expect(articlePageSliceReducer(
        state as ArticlesPageSchema,
        fetchArticlesList.fulfilled(generatedArticleMock, '', {}),
    ))
      .toEqual({
        hasMore: false,
        isLoading: false,
        view: ArticleView.LIST,
        ids: new Array(16).fill(0).map((_, i) => String(i)),
        entities: generatedNormalizedMock,
      });
  });
  test('fetchArticlesList service pending state in extraReducer', () => {
    const state: DeepPartial<ArticlesPageSchema> = {
      error: undefined,
      isLoading: true,
    };
    expect(articlePageSliceReducer(
        state as ArticlesPageSchema,
        fetchArticlesList.pending('hello', { replace: true }, {}),
    ))
      .toEqual({
        isLoading: true,
        error: undefined,
        ids: [],
        entities: {},
      });
  });
});
