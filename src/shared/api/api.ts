/**
 * Instance API
 *
 *  @param $api
 *    - axios instance
 *
 *  @param __API__
 *    Global variable which contain server address
 *    - Add into build/types/config.ts as interface value
 *    - Add into build/buildPlugins.ts as 'DefinePlugin';
 *    - Add into build/storybook/webpack.config.ts as 'DefinePlugin';
 *    - Add into build/jest/jest.config.ts as 'globals'
 *    - Add into app/types/globals.d.ts as global 'DefinePlugin' var;
 *    - Add into eslint.js as globals;
 *
 *   @param headers.authorization
 *    - Contain auth token which is getting from localStorage;
 *    - In its turn, being written to localStorage in LoginByUsername (AuthByUsername service)
 *
 *    @error
 *      localStorage can return 'null' is not assignable to type 'string | number | boolean'.
 *      Type 'null' is not assignable to type 'string | number | boolean'.
 *      To authorization need add empty string, for solving error with null
 *
 */

import axios from 'axios';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';

export const $api = axios.create({
  baseURL: __API__,
  headers: {
    authorization: localStorage.getItem(USER_LOCALSTORAGE_KEY) || '',
  },
});
