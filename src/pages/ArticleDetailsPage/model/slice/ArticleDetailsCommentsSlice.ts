/**
 *      - ArticleDetailsCommentsSlice createEntityAdapter slice;
 *        See more: https://redux-toolkit.js.org/api/createEntityAdapter;
 *
 *      @param selectId;
 *        - Assume IDs are stored in a field other than `comment.id`;
 *
 *      @param sortComparer;
 *        - Keep the "all IDs" array sorted based on comment titles;
 *
 *      @param reducers;
 *        - Can pass adapter functions directly as case reducers.  Because we're passing this
 *          as a value, `createSlice` will auto-generate the `bookAdded` action type / creator;
 *
 *      @param getInitialState();
 *        - function return default state by selector
 *
 *      @note when add selector in page - will get error:
 *      TS2739: Type 'StateSchema' is missing the following properties from type 'EntityState<Comment>': ids, entities
 *      Need add unique IDs of each item. Must be strings or numbers
 */

import { createEntityAdapter, createSlice, EntityState } from '@reduxjs/toolkit';
import { Comment } from 'entities/Comment/model/types/comment';
import { StateSchema } from 'app/provider/StoreProvider';

const commentAdapter = createEntityAdapter<Comment>({
  selectId: (comment) => comment.id,
  sortComparer: (a, b) => a.id.localeCompare(b.id),
});

const commentSlice = createSlice({
  name: 'comment',
  initialState: commentAdapter.getInitialState,
  reducers: {
    bookAdded: commentAdapter.addOne,
    booksReceived(state, action) {
      // Or, call them as "mutating" helpers in a case reducer
      commentAdapter.setAll(state, action.payload.books);
    },
  },
});

// Can create a set of memoized selectors based on the location of this entity state
const commentsSelectors = commentAdapter.getSelectors<StateSchema>(
  (state) => state.articleDetailsComments || commentAdapter.getInitialState(),
);
