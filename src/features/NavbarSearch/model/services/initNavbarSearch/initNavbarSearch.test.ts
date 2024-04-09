/**
 *    initNavbarSearch test.
 *
 *    @test 'enter_test_name'
 *      - enter describe
 */

import axios from 'axios';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { initNavbarSearch } from './initNavbarSearch';

jest.mock('axios');
const mockedAxios = jest.mocked(axios, true);

describe('initNavbarSearch', () => {
  test('ok request, success status, correct data', async () => {
  });
  test('server fall with error', async () => {
  });
});