/**
 *    initArticlePage test.
 *
 *    @test 'enter_test_name'
 *      - enter describe
 */

import axios from 'axios';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { initArticlesPage } from './initArticlesPage';

jest.mock('axios');
const mockedAxios = jest.mocked(axios, true);

describe('initArticlePage', () => {
  test('ok request, success status, correct data', async () => {
  });
  test('server fall with error', async () => {
  });
});
