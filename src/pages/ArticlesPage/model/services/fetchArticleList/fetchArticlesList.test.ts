/**
 *    fetchArticlesList test.
 */

import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import axios from 'axios';
import { Article } from 'entities/Article';
import { ArticleBlockType, ArticleType } from 'entities/Article/model/types/article';
import { fetchArticlesList } from './fetchArticlesList';

jest.mock('axios');
const mockedAxios = jest.mocked(axios, true);

describe('fetchArticlesList', () => {
  test('ok request fetchArticlesList', async () => {
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
          id: String(index + 1),
          userId: String(index + 1),
        }
      ));

    const stateMock = {
      articlesPage: {
        page: 2,
        ids: [],
        entities: {},
        limit: 5,
        isLoading: false,
        hasMore: true,
      },
    };

    const thunk = new TestAsyncThunk(fetchArticlesList, stateMock);
    thunk.api.get.mockReturnValue(Promise.resolve({ data: articles }));

    const result = await thunk.callThunk({ replace: true });

    expect(thunk.api.get)
      .toHaveBeenCalled();
    expect(result.meta.requestStatus)
      .toBe('fulfilled');
    expect(result.payload)
      .toEqual(articles);
  });

  test('server fall with error', async () => {
    const thunk = new TestAsyncThunk(fetchArticlesList);
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk({});

    expect(result.meta.requestStatus)
      .toBe('rejected');
  });
});
