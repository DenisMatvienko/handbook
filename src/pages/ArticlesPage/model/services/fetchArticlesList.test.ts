// /**
//  *    fetchArticlesList test.
//  */
//
// import axios from 'axios';
// import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
// import { Currency } from 'entities/Currency';
// import { Country } from 'entities/Country';
// import { fetchProfileData } from 'entities/Profile';
// import { Article } from 'entities/Article';
// import { ArticleBlockType, ArticleType } from 'entities/Article/model/types/article';
// import { fetchArticlesList } from './fetchArticlesList';
//
// jest.mock('axios');
// const mockedAxios = jest.mocked(axios, true);
//
// describe('fetchArticlesList', () => {
//   test('ok request, success status, correct data', async () => {
//     const article: Article[] = [{
//       id: '1',
//       title: 'Управление памятью в JavaScript',
//       subtitle: 'Управление памятью и принципах работы сборщика мусора',
//       img: 'https://media.proglib.io/wp-uploads/2018/06/jhkhk.jpg',
//       views: 1022,
//       createdAt: '19.09.2023',
//       user: {
//         id: '1',
//         username: 'JLebowski',
//         avatar: 'https://media.proglib.io/wp-uploads/2018/06/jhkhk.jpg',
//       },
//       type: [ArticleType.IT, ArticleType.ARCHITECTURE, ArticleType.JS],
//       blocks: [
//         {
//           id: '1',
//           type: ArticleBlockType.TEXT,
//           title: 'Стек и куча',
//           paragraphs: [
//             'В JavaScript есть два варианта хранения данных: в стеке и в куче; и то, и другое – названия структур данных, которые используются движком для различных целей.',
//           ],
//         },
//       ],
//     },
//     ];
//     const thunk = new TestAsyncThunk(fetchArticlesList);
//     thunk.api.get.mockReturnValue(Promise.resolve({
//       new: Array(16)
//         .fill(0)
//         .map((item, index) => (
//           {
//             ...article,
//             id: String(index),
//           }
//         )),
//     }));
//     const result = await thunk.callThunk();
//
//     expect(thunk.api.get)
//       .toHaveBeenCalled(); // Expect that get request is ok
//     expect(result.meta.requestStatus)
//       .toBe('fulfilled'); // Expect that get request is ok - with fulfilled status
//     expect(result.payload)
//       .toEqual(article); // Expect that server data response as payload - 'data'
//   });
//   test('server fall with error', async () => {
//     const thunk = new TestAsyncThunk(fetchArticlesList);
//     thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
//     const result = await thunk.callThunk();
//
//     expect(result.meta.requestStatus)
//       .toBe('rejected');
//   });
// });
