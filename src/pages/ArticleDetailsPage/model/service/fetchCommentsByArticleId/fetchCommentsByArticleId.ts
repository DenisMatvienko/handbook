/**
 *    Fetch comments by article id
 *      - View comments on page
 *      - Get articles fetch
 *        contain comment's in Article
 *
 *     @param articleId
 *      - is ID by which we want to receive comments load to specific article
 *        if articleId is undefined - return error
 *
 *     @param response.axios.get.config
 *       https://github.com/typicode/json-server#relationships
 *       - In response near of url using params, what is mean? Query params:
 *         params: {
 *             articleId - is ID by which we want to receive comments
 *             _expand - Using this key we get the user because we want to display all information
 *             about him in comment section (avatar, username, etc..). Want to receive full entity User.
 *         };
 */

import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/provider/StoreProvider';
import { Comment } from 'entities/Comment';
import {
  getArticleCommentsLimit,
  getArticleCommentsPage,
} from 'pages/ArticleDetailsPage/model/selectors/comments/GetComments';

export const fetchCommentsByArticleId = createAsyncThunk<Comment[],
    string | undefined,
    ThunkConfig<string>>(
      'pages/fetchCommentsByArticleId',
      async (articleId, thunkAPI) => {
        const {
          extra,
          rejectWithValue,
          getState,
        } = thunkAPI;

        if (!articleId) {
          return rejectWithValue('error');
        }

        const limit = getArticleCommentsLimit(getState());
        const page = getArticleCommentsPage(getState());

        try {
          const response = await extra.api.get<Comment[]>('/comments', {
            params: {
              articleId,
              _limit: limit,
              _page: page,
              _expand: 'user',
            },
          });

          if (!response.data) {
            throw new Error();
          }
          return response.data;
        } catch (e) {
          return rejectWithValue('error');
        }
      },
    );
