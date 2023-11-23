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
import { fetchArticlesList } from 'pages/ArticlesPage/model/services/fetchArticlesList';

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
      id: String(index + 1),
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
    expect(localStorage.getItem(ARTICLES_VIEW_LOCALSTORAGE_KEY) as ArticleView)
      .toEqual('LIST');
  });

  // test('fetchArticlesList service fulfilled state in extraReducer', () => {
  //   const state: DeepPartial<ArticlesPageSchema> = {
  //     isLoading: true,
  //   };
  //   expect(articlePageSliceReducer(
  //       state as ArticlesPageSchema,
  //       fetchArticlesList.fulfilled(articles, ''),
  //   ))
  //     .toEqual({
  //       isLoading: false,
  //       error: 'error',
  //       view: ArticleView.GRID,
  //       ids: new Array(16).fill(0).map((_, i) => String(i)),
  //       entities: {
  //         articles,
  //       },
  //     });
  // });
});
