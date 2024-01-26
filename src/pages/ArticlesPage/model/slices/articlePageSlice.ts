/**
 *      - articlePageSlice reducers slice
 *
 *      @param setView
 *        - Set article view, from pool of views: LIST or GRID
 *          When article view is selected, reducer set em into local storage, for remember user view
 *
 *      @param initView
 *        - Get selected article view from local storage
 *        Init for list view limit:
 *        LIST = 4
 *        GRID = 9
 *
 *      @param articlesAdapter
 *        setAll:
 *        - Fully change all list, when data in state is change
 *
 *        addMany:
 *        - Add new data from state in end of list
 *
 *
 */

import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Article, ArticleView } from 'entities/Article';
import { StateSchema } from 'app/provider/StoreProvider';
import { ARTICLES_VIEW_LOCALSTORAGE_KEY } from 'shared/const/localstorage';
import { ArticleSortField } from 'entities/Article/model/types/article';
import { SortOrderType } from 'shared/types/sortOrder/sortOrderType';
import { ArticlesPageSchema } from '../types/articlesPageSchema';
import { fetchArticlesList } from '../services/fetchArticleList/fetchArticlesList';

const articlesAdapter = createEntityAdapter<Article>({
  selectId: (article: Article) => article.id,
});

export const getArticles = articlesAdapter.getSelectors<StateSchema>(
  (state) => state.articlesPage || articlesAdapter.getInitialState(),
);

export const articlePageSlice = createSlice({
  name: 'articlePageSlice',
  initialState: articlesAdapter.getInitialState<ArticlesPageSchema>({
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {},
    view: ArticleView.LIST,
    limit: 10,
    order: 'asc',
    sort: ArticleSortField.TITLE,
    search: '',
    page: 1,
    hasMore: true,
    _inited: false,
  }),
  reducers: {
    setView: (state, action:PayloadAction<ArticleView>) => {
      state.view = action.payload;
      localStorage.setItem(ARTICLES_VIEW_LOCALSTORAGE_KEY, action.payload);
    },
    initView: (state) => {
      const view = localStorage.getItem(ARTICLES_VIEW_LOCALSTORAGE_KEY) as ArticleView;
      state.view = view;
      state.limit = view === ArticleView.LIST ? 4 : 9;
      state._inited = true;
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setOrder: (state, action: PayloadAction<SortOrderType>) => {
      state.order = action.payload;
    },
    setSort: (state, action: PayloadAction<ArticleSortField>) => {
      state.sort = action.payload;
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticlesList.pending, (state, action) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchArticlesList.fulfilled, (
        state,
        action: PayloadAction<Article[]>,
      ) => {
        state.isLoading = false;
        articlesAdapter.addMany(state, action.payload);
        state.hasMore = action.payload.length > 0;
      })
      .addCase(fetchArticlesList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: articlePageSliceActions } = articlePageSlice;
export const { reducer: articlePageSliceReducer } = articlePageSlice;
