/**
 * Add reducers in runtime. When app is working, reducers could be added.
 * Like provider wrap component and use reducerManager methods
 *
 * componentName - the name of the lazy component/chunk in which we make the lazy reducer;
 * reducer - name of reducer/reducers, which add into component;
 * removeAfterUnmount - reducer will unmount with component/chunk;
 *
 * ReducerList - This type allow to add more than 1 reducer,
 * we are decompose object, here componentName and reducer
 *
 * ReducerListEntry - types for decompose tuple's (which contain key: 'component-name',)
 * from props
 *
 */

import { FC, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';
import { ReduxStoreWithManager } from 'app/provider/StoreProvider';
import { StateSchemaKey } from 'app/provider/StoreProvider/config/StateSchema';
import { Reducer } from '@reduxjs/toolkit';

export type ReducerList = {
  [name in StateSchemaKey]?: Reducer;
}

interface DynamicModuleLoaderProps {
  reducers: ReducerList,
  removeAfterUnmount?: boolean,
}

type ReducerListEntry = [StateSchemaKey, Reducer]

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {
  const {
    reducers,
    children,
    removeAfterUnmount,
  } = props;

  const store = useStore() as ReduxStoreWithManager;
  const dispatch = useDispatch();

  useEffect(() => {
    /**
     * In moment when component did mount we are add reducer
     */

    Object.entries(reducers).forEach(([name, reducer]: ReducerListEntry) => {
      store.reducerManager.add(name, reducer);
      dispatch({ type: `@INIT ${name}` });
    }, []);

    return () => {
      /**
       * After all, when component not needed, component unmount and
       * remove reducer
       * Notice: component unmount because lazy, code splitting
       *
       *  removeAfterUnmount - bad side, that if false, reducer initialize twice/repeatedly,
       *  see in redux devtools (State/Tree/LoginForm).
       *  Because: when component mounted, and with
       *  mounted we are trigger - 'store.reducerManager.add'
       */
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([name, reducer]: ReducerListEntry) => {
          store.reducerManager.remove(name);
          dispatch({ type: `@DESTROY ${name}` });
        });
      }
    };
    // eslint-disable-next-line
  }, []);

  return (
      <div>
          {children}
      </div>
  );
};
