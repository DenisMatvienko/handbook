// /**
//  *    fetchNextArticlePage test.
//  *
//  *    @test 'enter_test_name'
//  *      - enter describe
//  */
//
// import axios from 'axios';
// import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
// import { fetchArticlesList } from 'pages/ArticlesPage/model/services/fetchArticleList/fetchArticlesList';
// import { fetchNextArticlePage } from './fetchNextArticlePage';
//
// jest.mock('axios');
// const mockedAxios = jest.mocked(axios, true);
//
// describe('fetchNextArticlePage', () => {
//   test('ok request, success status, correct data', async () => {
//     const thunk = new TestAsyncThunk(fetchNextArticlePage);
//     thunk.api.get.mockReturnValue(Promise.resolve());
//     const result = await thunk.callThunk();
//
//     expect(thunk.api.get)
//       .toHaveBeenCalled(); // Expect that get request is ok
//     expect(result.meta.requestStatus)
//       .toBe('fulfilled'); // Expect that get request is ok - with fulfilled status
//     expect(result.payload)
//       .toEqual(4); // Expect that server data response as payload - 'data'
//   });
//   test('server fall with error', async () => {
//     const thunk = new TestAsyncThunk(fetchNextArticlePage);
//     thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
//     const result = await thunk.callThunk();
//
//     expect(result.meta.requestStatus)
//       .toBe('rejected');
//   });
// });
