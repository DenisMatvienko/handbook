/**
 *      - articleDetailsSlice reducers slice
 */

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ArticleDetailSchema } from '../types/ArticleDetailSchema';

const initialState: ArticleDetailSchema = {
  isLoading: false,
  error: undefined,
  data: undefined,
};

export const articleDetailsSlice = createSlice({
  name: 'article',
  initialState,
  reducers: {},
  extraReducers: () => {},
});

export const { actions: articleDetailsActions } = articleDetailsSlice;
export const { reducer: articleDetailsReducer } = articleDetailsSlice;
