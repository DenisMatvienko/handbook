/**
 *    ArticleDetails selector test
 */

import {
  getArticleDetails,
  getArticleError,
  getArticleIsLoading,
} from 'entities/Article/model/selectors/getArticleDetails';
import { StateSchema } from 'app/provider/StoreProvider';
import { Article } from 'entities/Article';
import { ArticleBlockType, ArticleType } from 'entities/Article/model/types/article';

describe('getArticleDetails', () => {
  test('selector should return date of getArticleDetails', () => {
    const article: Article = {
      id: '1',
      title: 'Управление памятью в JavaScript',
      subtitle: 'Управление памятью и принципах работы сборщика мусора, а также о том, как избежать самых распространенных видов утечек памяти.',
      img: 'https://media.proglib.io/wp-uploads/2018/06/jhkhk.jpg',
      views: 1022,
      createdAt: '19.09.2023',
      user: {
        id: '1',
        username: 'JLebowski',
      },
      type: [ArticleType.IT, ArticleType.ARCHITECTURE, ArticleType.JS],
      blocks: [
        {
          id: '1',
          type: ArticleBlockType.TEXT,
          title: 'Стек и куча',
          paragraphs: [
            'В JavaScript есть два варианта хранения данных: в стеке и в куче; и то, и другое – названия структур данных, которые используются движком для различных целей.',
          ],
        },
        {
          id: '4',
          type: ArticleBlockType.CODE,
          code: "\nconst person = {\n  name: 'John',\n  age: 24,\n};\n\n// JavaScript выделяет память под этот объект в куче. \n// Сами же значения являются примитивными, поэтому храниться они будут в стеке.\n\nconst hobbies = ['hiking', 'reading'];\n\n// Массивы – тоже объекты, значит, они сохраняются в куче.\n\nlet name = 'John'; // выделяет память для строки\nconst age = 24; // выделяет память для числа\nname = 'John Doe'; // выделяет память для новой строки\nconst firstName = name.slice(0,4); // выделяет память для новой строки\n\n// Примитивные значения по своей природе иммутабельны: вместо того, чтобы изменить начальное значение,\n// JavaScript создает еще одно.",
        },
        {
          id: '2',
          type: ArticleBlockType.IMAGE,
          src: 'https://webformyself.com/wp-content/uploads/2018/96/1.jpg',
          title: 'Рис. 1 - Распределение памяти во взаимодействии с Event Loop',
        },
      ],
    };
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        data: article,
      },
    };
    expect(getArticleDetails(state as StateSchema))
      .toEqual(article);
  });
  test('selector get empty data of getArticleDetails', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticleDetails(state as StateSchema))
      .toEqual(undefined);
  });
  test('selector should return date of getArticleIsLoading', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        isLoading: true,
      },
    };
    expect(getArticleIsLoading(state as StateSchema))
      .toEqual(true);
  });
  test('selector get empty data of getArticleIsLoading', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticleIsLoading(state as StateSchema))
      .toEqual(undefined);
  });
  test('selector should return date of getArticleError', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        error: 'error',
      },
    };
    expect(getArticleError(state as StateSchema))
      .toEqual('error');
  });
  test('selector get empty data of getArticleError', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticleError(state as StateSchema))
      .toEqual(undefined);
  });
});
