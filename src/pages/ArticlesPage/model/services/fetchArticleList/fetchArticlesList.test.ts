/**
 *    fetchArticlesList test.
 */

import axios from 'axios';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { Article, ArticleView } from 'entities/Article';
import { ArticleBlockType, ArticleType } from 'entities/Article/model/types/article';
import { fetchArticlesList } from './fetchArticlesList';

jest.mock('axios');
const mockedAxios = jest.mocked(axios, true);

type articlesEntitiesType = Record<string, object>;

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

    const articlesPage = {
      page: 2,
      limit: 4,
      isLoading: false,
      view: ArticleView.LIST,
      hasMore: true,
      ids: new Array(4).fill(0).map((_, i) => String(i)),
      entities: entities(4),
    };

    const articleFilled: Article[] = new Array(16)
      .fill(0)
      .map((item, index) => (
        {
          ...article,
          id: String(index),
        }
      ));

    const thunk = new TestAsyncThunk(fetchArticlesList);
    thunk.api.get.mockReturnValue(Promise.resolve({
      page: 2,
      limit: 4,
      isLoading: false,
      view: ArticleView.LIST,
      hasMore: true,
      ids: new Array(4).fill(0).map((_, i) => String(i)),
      entities: entities(4),
    }));
    const result = await thunk.callThunk({ page: 1 });

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
