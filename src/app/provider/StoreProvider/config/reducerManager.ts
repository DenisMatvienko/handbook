/**
 *    reducerManager - using from redux code splitting
 *
 *      @param keysToRemove
 *        - reducers which want to delete
 *
 *      @param reduce
 *        - by key in keysToRemove, delete key from state
 *
 *      @param add
 *        - by key add new reducer
 *
 *      @param remove
 *        - add key in keysToRemove, and delete key from reducer
 *
 *      @param keysToRemove
 *        - type, see in StateSchema file
 *
 *      @param mountedReducers(getMountedReducers)
 *        - OptionalRecord - this is necessary cause most of the reducers is optional
 */

import {
  AnyAction, combineReducers, createStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import {
  MountedReducers, ReducerManager, StateSchema, StateSchemaKey,
} from './StateSchema';

export function createReducerManager(initialReducers: ReducersMapObject<StateSchema>): ReducerManager {
  const reducers = { ...initialReducers };

  let combinedReducer = combineReducers(reducers);

  let keysToRemove: Array<StateSchemaKey> = [];
  const mountedReducers: MountedReducers = {};

  return {
    getReducerMap: () => reducers,

    reduce: (state: StateSchema, action: AnyAction) => {
      if (keysToRemove.length > 0) {
        state = { ...state };
        keysToRemove.forEach((key) => {
          delete state[key];
        });
        keysToRemove = [];
      }

      return combinedReducer(state, action);
    },

    add: (key: StateSchemaKey, reducer: Reducer) => {
      if (!key || reducers[key] || mountedReducers[key]) {
        return;
      }

      reducers[key] = reducer;
      mountedReducers[key] = true;

      combinedReducer = combineReducers(reducers);
    },

    remove: (key: StateSchemaKey) => {
      if (!key || !reducers[key] || !mountedReducers[key]) {
        return;
      }

      delete reducers[key];

      keysToRemove.push(key);
      mountedReducers[key] = false;

      combinedReducer = combineReducers(reducers);
    },
  };
}
