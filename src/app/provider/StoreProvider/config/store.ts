// devTools - off in production mode

import { combineReducers, configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { StateSchema } from 'app/provider/StoreProvider/config/StateSchema';
import { counterReducer } from 'entities/Counter/model/slice/CounterSlice';
import { userReducer } from 'entities/User';
// import { loginReducer } from 'features/AuthByUsername';
import { createReducerManager } from './reducerManager';

export function createReduxStore(initialState?: StateSchema) {
  const RootReducers: ReducersMapObject<StateSchema> = {
    counter: counterReducer,
    user: userReducer,
  };

  const reducerManager = createReducerManager(RootReducers);

  const store = configureStore<StateSchema>({
    reducer: reducerManager.reduce,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });

  // @ts-ignore
  store.reducerManager = reducerManager;
  return store;
}
