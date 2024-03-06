/**
 *    navbarSearchSlice
 *
 *      @param setSearch;
 *        - reducer, set to state data which input while searching;
 *
 */

import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Article } from 'entities/Article';
import { NavbarSearchSchema } from 'features/NavbarSearch/model/types/navbarSearchSchema';
import { StateSchema } from 'app/provider/StoreProvider';
import { fetchArticlesList } from 'pages/ArticlesPage/model/services/fetchArticleList/fetchArticlesList';
import { SearchableArticle } from 'features/NavbarSearch/model/types/searchableArticle';
import { fetchNavbarSearch } from 'features/NavbarSearch/model/services/fetchNavbarSearch';

const articlesSearchAdapter = createEntityAdapter<SearchableArticle>({
  selectId: (article: SearchableArticle) => article.id,
});

export const getSearchArticles = articlesSearchAdapter.getSelectors<StateSchema>(
  (state) => state.navbarSearch || articlesSearchAdapter.getInitialState(),
);

export const navbarSearchSlice = createSlice({
  name: 'navbarSearchSlice',
  initialState: articlesSearchAdapter.getInitialState<NavbarSearchSchema>(
    {
      search: '',
      isLoading: false,
      ids: [],
      entities: {},
    },
  ),
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNavbarSearch.pending, (state, action) => {
        state.error = undefined;
        state.isLoading = true;

        if (action.meta.arg.replace) {
          articlesSearchAdapter.removeAll(state);
        }
      })
      .addCase(fetchNavbarSearch.fulfilled, (
        state,
        action,
      ) => {
        state.isLoading = false;
        articlesSearchAdapter.setAll(state, action.payload);
      })
      .addCase(fetchNavbarSearch.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: navbarSearchActions } = navbarSearchSlice;
export const { reducer: navbarSearchReducer } = navbarSearchSlice;
