/**
 *    fetchArticlesList test.
 */

import axios from 'axios';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { Article } from 'entities/Article';
import { ArticleBlockType, ArticleType } from 'entities/Article/model/types/article';
import {
  fetchNextArticlePage,
} from 'pages/ArticlesPage/model/services/fetchNextArticlePage/fetchNextArticlePage';
import articlesPage from 'pages/ArticlesPage/ui/ArticlesPage/ArticlesPage';
import { fetchArticlesList } from './fetchArticlesList';

jest.mock('axios');
const mockedAxios = jest.mocked(axios, true);

describe('fetchArticlesList', () => {
  test('ok request, success status, correct data', async () => {
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
    const articleFilled = new Array(16)
      .fill(0)
      .map((item, index) => (
        {
          ...article,
          id: String(index),
        }
      ));

    // const thunk = new TestAsyncThunk(fetchArticlesList);
    // thunk.api.get.mockReturnValue(Promise.resolve({ data: articleFilled }));
    // const result = await thunk.callThunk({ page: 1 });

    const thunk = new TestAsyncThunk(fetchArticlesList, {
      articlesPage: {
        page: 1,
        ids: [1],
        entities: { article },
        limit: 5,
        isLoading: false,
        hasMore: true,
      },
    });
    const result = await thunk.callThunk({ page: 1 });
    console.log(result);

    expect(thunk.api.get)
      .toHaveBeenCalled(); // Expect that get request is ok
    expect(result.meta.requestStatus)
      .toBe('fulfilled'); // Expect that get request is ok - with fulfilled status
    expect(result.payload)
      .toEqual(articleFilled); // Expect that server data response as payload - 'data'
  });

  test('server fall with error', async () => {
    const thunk = new TestAsyncThunk(fetchArticlesList);
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk({ page: 1 });

    expect(result.meta.requestStatus)
      .toBe('rejected');
  });
});
