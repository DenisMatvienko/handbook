/**
 *    devTools - off in production mode
 *
 *    @param AppDispatch - Getting dispatch type
 *      - Store created inside the 'createReduxStore' function, and we cannot get store outside in
 *      AppDispatch. For solving this use ReturnType
 *      useAppDispatch into => shared/lib/hooks/useAppDispatch
 *      https://redux-toolkit.js.org/usage/usage-with-typescript#getting-the-dispatch-type
 *
 *    @param middleware.thunk.extraArgument.api
 *      - Instance API
 *      - Contains authorization header, which contain auth token
 *
 *    @type createReduxStore.navigate
 *      - Taken from useNavigate type
 *
 *    @func navigate
 *      - If you need to do something after event (ex: after auth you need to redirect into profile)
 *
 *    @note reducer in store
 *      - Manually cast to type 'ReducersMapObject<StateSchema>', by keyword 'as',
 *      because 'getDefaultMiddleware' fall with error. But 'getDefaultMiddleware' using correctly,
 *      as it said documentation.
 *      The reducer contained the wrong type because of reducerManager
 *
 *      Solve: extraArgument move to a separate variable, and catch error, that field 'navigate'
 *      in  'ThunkExtraArg', may be undefined, because it wasn't optional
 */

import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { StateSchema, ThunkExtraArg } from 'app/provider/StoreProvider/config/StateSchema';
import { counterReducer } from 'entities/Counter/model/slice/CounterSlice';
import { userReducer } from 'entities/User';
import { $api } from 'shared/api/api';
import { NavigateOptions } from 'react-router';
import { To } from 'react-router-dom';
import { articleDetailsCommentsReducer } from 'pages/ArticleDetailsPage/model/slice/ArticleDetailsCommentsSlice';
import { createReducerManager } from './reducerManager';

export function createReduxStore(
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>,
) {
  const RootReducers: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    counter: counterReducer,
    user: userReducer,
  };

  const reducerManager = createReducerManager(RootReducers);

  const myCustomApiService: ThunkExtraArg = {
    api: $api,
  };

  const store = configureStore({
    // @ts-ignore
    reducer: reducerManager.reduce as ReducersMapObject<StateSchema>,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      thunk: {
        extraArgument: myCustomApiService,
      },
    }),
  });

  // @ts-ignore
  store.reducerManager = reducerManager;
  return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
