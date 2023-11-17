/**
 *    fetchArticlesList fetching
 *
 *      @param _expand
 *          - Need for view user avatar in ArticleView.LIST
 */

import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/provider/StoreProvider';
import { Article } from 'entities/Article';

export const fetchArticlesList = createAsyncThunk<Article[],
    void,
    ThunkConfig<string>>(
      'articlesPage/fetchArticlesList',
      async (_, thunkAPI) => {
        const {
          extra,
          rejectWithValue,
        } = thunkAPI;

        try {
          const response = await extra.api.get<Article[]>('/articles', {
            params: {
              _expand: 'user',
            },
          });

          if (!response.data) {
            throw new Error();
          }
          return response.data;
        } catch (e) {
          console.log(e);
          return rejectWithValue('error');
        }
      }
      ,
    );