/**
 *    fetchArticlesList test.
 */

import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import axios from 'axios';
import { ArticleType } from 'entities/Article/model/types/article';
import { Search } from 'entities/Search/model/types/search';
import { fetchNavbarSearch } from './fetchNavbarSearch';

jest.mock('axios');
const mockedAxios = jest.mocked(axios, true);

describe('fetchNavbarSearch', () => {
  test('ok request fetchNavbarSearch', async () => {
    const article: Search = {
      createdAt: '19.09.2023',
      id: '1',
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

    const articles: Search[] = new Array(16)
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
        ids: [],
        entities: {},
        isLoading: false,
      },
    };

    const thunk = new TestAsyncThunk(fetchNavbarSearch, stateMock);
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
    const thunk = new TestAsyncThunk(fetchNavbarSearch);
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk({});

    expect(result.meta.requestStatus)
      .toBe('rejected');
  });
});
