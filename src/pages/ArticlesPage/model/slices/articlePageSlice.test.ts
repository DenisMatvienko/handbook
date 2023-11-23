/**
 *    articlePageSlice test
 *      - test's for articlePageSlice
 *
 *    @test 'add_test_describe'.
 *
 */

import { ArticlesPageSchema } from 'pages/ArticlesPage';
import { Article, ArticleView } from 'entities/Article';
import { ArticleBlockType, ArticleType } from 'entities/Article/model/types/article';
import { articlePageSliceActions, articlePageSliceReducer } from 'pages/ArticlesPage/model/slices/articlePageSlice';
import { ARTICLES_VIEW_LOCALSTORAGE_KEY } from 'shared/const/localstorage';

const InitialState: DeepPartial<ArticlesPageSchema> = {};

const article: Article = {
  id: '1',
  title: 'Управление памятью в JavaScript',
  subtitle: 'Управление памятью и принципах работы сборщика мусора',
  img: 'https://media.proglib.io/wp-uploads/2018/06/jhkhk.jpg',
  views: 1022,
  createdAt: '19.09.2023',
  user: {
    id: '1',
    username: 'JLebowski',
    avatar: 'https://media.proglib.io/wp-uploads/2018/06/jhkhk.jpg',
  },
  type: [ArticleType.IT, ArticleType.ARCHITECTURE, ArticleType.JS],
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
};

const articles: Article[] = new Array(16)
  .fill(0)
  .map((item, index) => (
    {
      ...article,
      id: String(index),
    }
  ));

describe('articlePageSlice', () => {
  test('setReadonly reducer test', () => {
    const state: DeepPartial<ArticlesPageSchema> = { view: ArticleView.GRID };
    expect(articlePageSliceReducer(
        state as ArticlesPageSchema,
        articlePageSliceActions.setView(ArticleView.LIST),
    ))
      .toEqual({ view: ArticleView.LIST });
  });
  test('setReadonly storage test', () => {
    // const state: DeepPartial<ArticlesPageSchema> = { view: ArticleView.GRID };
    expect(localStorage.getItem(ARTICLES_VIEW_LOCALSTORAGE_KEY) as ArticleView)
      .toEqual('LIST');
  });
  // test('articlePageSlice reducer test', () => {
  // });
  //
  // test('articlePageSlice reducer test', () => {
  // });
});
