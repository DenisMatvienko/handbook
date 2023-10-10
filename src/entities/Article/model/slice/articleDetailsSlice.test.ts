/**
 *    ArticleDetailsSlice test.
 *      - Test reducers and extraReducers of article.
 *
 *    @test 'fetchArticleById service pending state in extraReducer';
 *       Test of pending state. from fetchArticleById service.
 *       - in time of pending isLoading change on - true.
 *
 *    @test 'updateProfileData service fulfilled state in extraReducer';
 *      Test in time, when response successfully returned, after loading/pending.
 *
 */

import { Article } from 'entities/Article';
import { ArticleBlockType, ArticleType } from 'entities/Article/model/types/article';
import { fetchArticleById } from '../services/fetchArticleById/fetchArticleById';
import { articleDetailsReducer } from './articleDetailsSlice';
import { ArticleDetailSchema } from '../types/ArticleDetailSchema';

const InitialState: DeepPartial<ArticleDetailSchema> = {};

const article: Article = {
  id: '1',
  title: 'Управление памятью в JavaScript',
  subtitle: 'Управление памятью и принципах работы сборщика мусора, а также о том, как избежать самых распространенных видов утечек памяти.',
  img: 'https://media.proglib.io/wp-uploads/2018/06/jhkhk.jpg',
  views: 1022,
  createdAt: '19.09.2023',
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

describe('profileSlice', () => {
  test('fetchArticleById service pending state in extraReducer', () => {
    const state: DeepPartial<ArticleDetailSchema> = {
      error: undefined,
      isLoading: true,
    };
    expect(articleDetailsReducer(
      state as ArticleDetailSchema,
      fetchArticleById.pending,
    ))
      .toEqual({
        isLoading: true,
        error: undefined,
      });
  });

  test('fetchArticleById service fulfilled state in extraReducer', () => {
    const state: DeepPartial<ArticleDetailSchema> = {
      isLoading: true,
    };
    expect(articleDetailsReducer(
      state as ArticleDetailSchema,
      fetchArticleById.fulfilled(article, '', ''),
    ))
      .toEqual({
        isLoading: false,
        data: article,
        error: undefined,
      });
  });
});
