/**
 *  StateSchema - Root state type
 *
 *  StateSchemaKey - add keys of StateSchema, in this type can be just items, which same
 *  as keys of StateSchema. Example:
 *  KeysOfStateSchema: Array<StateSchemaKey> = ['user', 'counter', 'loginForm'];
 *
 *  ReducerManager interface describe types returned from ReducerManager
 *  EnhancedStore - standard store type, which store return
 *  CombinedState - combinedReducer return this type, add em in interface 'reduce'
 */

import { CounterSchema } from 'entities/Counter';
import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/AuthByUsername';
import {
  AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { ProfileSchema } from 'entities/Profile/model/type/profile';

export interface StateSchema {
  counter: CounterSchema;
  user: UserSchema;

  /**
   *   Async reducer's
   */
  loginForm?: LoginSchema;
  profile?: ProfileSchema;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager?: ReducerManager;
}
