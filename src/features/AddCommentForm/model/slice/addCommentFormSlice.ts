/**
 *      - addCommentFormSlice reducers slice
 */

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AddCommentFormSchema } from '../types/addCommentForm';

const initialState: AddCommentFormSchema = {
  text: '',
};

export const addCommentFormSlice = createSlice({
  name: 'addCommentForm',
  initialState,
  reducers: {
    setText: (state, action:PayloadAction<string>) => {
      state.text = action.payload;
    },
  },
  // extraReducers: (builder) => {
  // builder
  //   .addCase(enter_fetch_data.pending, (state, action) => { // ввести fetch из service
  //     state.error = undefined;
  //     state.isLoading = true;
  //   })
  //   .addCase(enter_fetch_data.fulfilled, ( // ввести fetch из service
  //     state,
  //     action: PayloadAction<add_entity_type>, // ввести главный тип сущности определяющий данные сущности (Profile, Article и тд)
  //   ) => {
  //     state.isLoading = false;
  //     state.data = action.payload;
  //   })
  //   .addCase(enter_fetch_data.rejected, (state, action) => { // ввести fetch из service
  //     state.isLoading = false;
  //     state.error = action.payload;
  //   });
  // },
});

export const { actions: addCommentFormActions } = addCommentFormSlice;
export const { reducer: addCommentFormReducer } = addCommentFormSlice;
