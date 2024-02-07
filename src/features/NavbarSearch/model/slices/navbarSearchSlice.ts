/**
 *    navbarSearchSlice
 *
 *      @param setSearch;
 *        - reducer, set to state data which input while searching;
 *
 */

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Article } from 'entities/Article';
import { NavbarSearchSchema } from 'features/NavbarSearch/model/types/navbarSearchSchema';
import { fetchNavbarSearch } from 'features/NavbarSearch/model/services/fetchNavbarSearch';

const initialState: NavbarSearchSchema = {
  isLoading: false,
};

export const navbarSearchSlice = createSlice({
  name: 'navbarSearchSlice',
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.articleList = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNavbarSearch.pending, (state, action) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchNavbarSearch.fulfilled, (
        state,
        action: PayloadAction<Article[]>,
      ) => {
        state.isLoading = false;
      })
      .addCase(fetchNavbarSearch.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: navbarSearchSliceActions } = navbarSearchSlice;
export const { reducer: navbarSearchSliceReducer } = navbarSearchSlice;
