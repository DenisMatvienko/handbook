/**
 *    Fetch comments by article id
 *      - Get articles fetch
 *        contain comment's in Article
 */

import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/provider/StoreProvider';
import { Comment } from 'entities/Comment';

export const fetchCommentsByArticleId = createAsyncThunk<Comment[],
    string,
    ThunkConfig<string>>(
      'pages/fetchCommentsByArticleId',
      async (articleId, thunkAPI) => {
        const {
          extra,
          rejectWithValue,
        } = thunkAPI;

        try {
          const response = await extra.api.get<Comment[]>(`/comments/${articleId}`);

          if (!response.data) {
            throw new Error();
          }
          return response.data;
        } catch (e) {
          return rejectWithValue('error');
        }
      },
    );
