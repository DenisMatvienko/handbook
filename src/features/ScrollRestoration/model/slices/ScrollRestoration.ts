/**
 *      - ScrollRestoration reducers slice
 */

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ScrollRestorationSchema } from '../types/ScrollRestorationSchema';

const initialState: ScrollRestorationSchema = {
  scroll: {},
};

export const ScrollRestoration = createSlice({
  name: 'ScrollRestoration',
  initialState,
  reducers: {
    setScrollPosition: (state, action:PayloadAction<{path: string; position: number}>) => {
      state.scroll[action.payload.path] = action.payload.position;
    },
  },
});

export const { actions: ScrollRestorationActions } = ScrollRestoration;
export const { reducer: ScrollRestorationReducer } = ScrollRestoration;
