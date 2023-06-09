// devTools - off in production mode

import { combineReducers, configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { StateSchema } from 'app/provider/StoreProvider/config/StateSchema';
import { counterReducer } from 'entities/Counter/model/slice/CounterSlice';
import { userReducer } from 'entities/User';

export function createReduxStore(initialState?: StateSchema) {
  const RootReducers: ReducersMapObject<StateSchema> = {
    counter: counterReducer,
    user: userReducer,
  };

  return configureStore<StateSchema>({
    reducer: RootReducers,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });
}
