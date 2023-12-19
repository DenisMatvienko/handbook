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
import { Article, ArticleView } from 'entities/Article';
import { ArticleBlockType, ArticleType } from 'entities/Article/model/types/article';
import { articlePageSliceActions, articlePageSliceReducer } from 'pages/ArticlesPage/model/slices/articlePageSlice';
import { ARTICLES_VIEW_LOCALSTORAGE_KEY } from 'shared/const/localstorage';
import { fetchArticlesList } from 'pages/ArticlesPage/model/services/fetchArticleList/fetchArticlesList';

type articlesEntitiesType = Record<string, object>;

const article: Article = {
  blocks: [
    {
      id: '1',
      type: ArticleBlockType.TEXT,
      title: 'Стек и куча',
      paragraphs: [
        'В JavaScript есть два варианта хранения данных: в стеке и в куче;',
      ],
    },
  ],
  createdAt: '19.09.2023',
  id: '1',
  img: 'https://media.proglib.io/wp-uploads/2018/06/jhkhk.jpg',
  subtitle: 'Управление памятью и принципах работы сборщика мусора',
  title: 'Управление памятью в JavaScript',
  type: [ArticleType.IT, ArticleType.ARCHITECTURE, ArticleType.JS],
  user: {
    id: '1',
    username: 'JLebowski',
    avatar: 'https://media.proglib.io/wp-uploads/2018/06/jhkhk.jpg',
  },
  views: 1022,
};

const articles: Article[] = new Array(16)
  .fill(0)
  .map((item, index) => (
    {
      ...article,
      id: String(index),
    }
  ));

const entities = (count: number):articlesEntitiesType => {
  const entity: articlesEntitiesType = {};
  for (let i = 0; i < count; i++) {
    const key = new Array(count).fill(0).map((_, i) => String(i))[i];
    const value = {
      ...article,
      id: String(key),
    };
    entity[key] = value;
  }
  return entity;
};

describe('articlePageSlice', () => {
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
      entities: entities(16),
    };
    expect(articlePageSliceReducer(
        state as ArticlesPageSchema,
        fetchArticlesList.fulfilled(articles, '', { page: 2 }),
    ))
      .toEqual({
        hasMore: true,
        isLoading: false,
        view: ArticleView.LIST,
        ids: new Array(16).fill(0).map((_, i) => String(i)),
        entities: entities(16),
      });
  });
  test('fetchArticlesList service pending state in extraReducer', () => {
    const state: DeepPartial<ArticlesPageSchema> = {
      error: undefined,
      isLoading: true,
    };
    expect(articlePageSliceReducer(
        state as ArticlesPageSchema,
        fetchArticlesList.pending,
    ))
      .toEqual({
        isLoading: true,
        error: undefined,
      });
  });
});
