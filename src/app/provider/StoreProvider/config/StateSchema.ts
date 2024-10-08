/**
 *  Root state type's
 *
 *  @param StateSchema
 *    - Async reducers: optional (because load as it need)
 *    - Static reducers: required (because load always)
 *
 *  @param scrollRestoration
 *    - non async schema
 *
 *  @param StateSchemaKey
 *    - add keys of StateSchema, in this type can be just items, which same
 *      as keys of StateSchema. Example:
 *      KeysOfStateSchema: Array<StateSchemaKey> = ['user', 'counter', 'loginForm'];
 *
 *  @param ReducerManager
 *    - interface describe types returned from ReducerManager
 *
 *  @type EnhancedStore
 *    - standard store type, which store return
 *
 *  @type CombinedState
 *    - combinedReducer return this type, add em in interface 'reduce'
 *
 *  @param ThunkExtraArg
 *    - exporting type to loginByUsername->generic-args->as type of 'extra' parameter in thunkConfig
 *      @notice ThunkConfig from loginByUsername replaced to ThunkConfig interface - next param;
 *      doing:
 *        1) solve type's error with 'thunkAPI.extra.api';
 *        2) solve type's error with 'extra.navigate('/about')';
 *
 *         @type AxiosInstance
 *          - Get type from '$api' type. See more by: 'shared/api/api.ts/$api'
 *
 *  @param ThunkConfig
 *    - Config from loginByUsername generic, replaced for cut the long args path;
 *      (with generic type <T> for error);
 *      get types from: createAsyncThunk --> ThunkApiConfig extends AsyncThunkConfig -->
 *      --> type AsyncThunkConfig
 */

import { CounterSchema } from 'entities/Counter';
import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/authentification/AuthByUsername';
import {
  AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { ProfileSchema } from 'entities/Profile/model/type/profile';
import { AxiosInstance } from 'axios';
import { To } from 'react-router-dom';
import { NavigateOptions } from 'react-router';
import { Dispatch } from 'redux';
import { ArticleDetailSchema } from 'entities/Article';
import { ArticleDetailsCommentsSchema } from 'pages/ArticleDetailsPage';
import { AddCommentFormSchema } from 'features/comments/AddCommentForm';
import { ArticlesPageSchema } from 'pages/ArticlesPage';
import { ScrollRestorationSchema } from 'features/scroll/ScrollRestoration';
import { NavbarSearchSchema } from 'features/navbar/NavbarSearch/model/types/navbarSearchSchema';
import { Navbar } from 'widgets/Navbar/model/types/navbar';
import {
  ArticlesPageRecommendationsSchema,
} from 'features/recommendations/ArticlesPageRecommendations/model/types/articlesPageRecommendationsSchema';
import {
  ArticleDetailRecommendationsSchema,
} from 'features/recommendations/ArticleDetailRecommendations/model/types/articleDetailRecommendationsSchema';

export interface StateSchema {
  /** Static reducer's */
  counter: CounterSchema;
  user: UserSchema;
  scrollRestoration: ScrollRestorationSchema;

  /** Async reducer's */
  loginForm?: LoginSchema;
  profile?: ProfileSchema;
  articleDetails?: ArticleDetailSchema;
  articleDetailsComments?: ArticleDetailsCommentsSchema;
  addCommentForm?: AddCommentFormSchema;
  articlesPage?: ArticlesPageSchema;
  navbarSearch?: NavbarSearchSchema;
  navbar?: Navbar;
  articlesPageRecommendations?: ArticlesPageRecommendationsSchema;
  articleDetailRecommendations?: ArticleDetailRecommendationsSchema;
}

export type StateSchemaKey = keyof StateSchema;
export type MountedReducers = OptionalRecord<StateSchemaKey, boolean>

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
  api: AxiosInstance;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
  state: StateSchema;
}
