/**
 * devTools - off in production mode
 *
 *  @param AppDispatch - Getting dispatch type
 *    - Store created inside the 'createReduxStore' function, and we cannot get store outside in
 *  AppDispatch. For solving this use ReturnType
 *  useAppDispatch into => shared/lib/hooks/useAppDispatch
 *  https://redux-toolkit.js.org/usage/usage-with-typescript#getting-the-dispatch-type
 *
 *  @param middleware.thunk.extraArgument.api
 *    - Instance API
 *    - Contains authorization header, which contain auth token
 *
 *  @type createReduxStore.navigate
 *    - Taken from useNavigate type
 *
 *  @func navigate
 *    - If you need to do something after event (ex: after auth you need to redirect into profile)
 */

import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { StateSchema } from 'app/provider/StoreProvider/config/StateSchema';
import { counterReducer } from 'entities/Counter/model/slice/CounterSlice';
import { userReducer } from 'entities/User';
import { $api } from 'shared/api/api';
import { NavigateOptions } from 'react-router';
import { To } from 'react-router-dom';
import { createReducerManager } from './reducerManager';

export function createReduxStore(
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>,
  navigate?: (to: To, options?: NavigateOptions) => void,
) {
  const RootReducers: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    counter: counterReducer,
    user: userReducer,
  };

  const reducerManager = createReducerManager(RootReducers);

  const store = configureStore({
    reducer: reducerManager.reduce,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      thunk: {
        extraArgument: {
          api: $api,
          navigate,
        },
      },
    }),
  });

  // @ts-ignore
  store.reducerManager = reducerManager;
  return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
