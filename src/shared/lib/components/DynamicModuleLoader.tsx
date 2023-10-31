/**
 *    - DynamicModuleLoader
 *      Dynamically add reducers when wrapped component mount, and delete reducers when component
 *      will unmount. Decision for max optimization of app
 *
 *      Add reducers in runtime. When app is working, reducers could be added.
 *      Like provider wrap component and use reducerManager methods
 *
 *    @param componentName
 *      - the name of the lazy component/chunk in which we make the lazy reducer;
 *    @param reducer
 *      - name of reducer/reducers, which add into component;
 *    @param removeAfterUnmount
 *      - reducer will unmount with component/chunk;
 *
 *    @param ReducerList
 *      - This type allow to add more than 1 reducer,
 *      we are decompose object, here componentName and reducer
 *
 *    @param ReducerListEntry
 *      - types for decompose tuple's (which contain key: 'component-name',)
 *      from props
 *
 *    @note 'reducers' in 'Object.entries'
 *      - StateSchemaKey = keyof StateSchema - different type than 'string'
 *      - 'Object.entries' - when get keys from object by default perceive they as 'string'
 *        Strict didn't allow that cause sees type mismatch, with error:
 *        TS2345: Type 'string' is not assignable to type 'keyof StateSchema'
 *        Solve: by 'as';
 */

import { FC, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';
import { ReduxStoreWithManager, StateSchema } from 'app/provider/StoreProvider';
import { StateSchemaKey } from 'app/provider/StoreProvider/config/StateSchema';
import { Reducer } from '@reduxjs/toolkit';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

export type ReducersList = {
  [name in StateSchemaKey]?: Reducer;
}

interface DynamicModuleLoaderProps {
  reducers: ReducersList,
  removeAfterUnmount?: boolean,
}

type ReducerListEntry = [StateSchemaKey, Reducer]

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {
  const {
    children,
    reducers,
    removeAfterUnmount = true,
  } = props;

  const store = useStore() as ReduxStoreWithManager;
  const dispatch = useAppDispatch();

  useEffect(() => {
    /**
     * In moment when component did mount we are add reducer
     */
    Object.entries(reducers)
      .forEach(([name, reducer]) => {
        store.reducerManager?.add(name as StateSchemaKey, reducer);
        dispatch({ type: `@INIT ${name} reducer` });
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
        Object.entries(reducers)
          .forEach(([name, reducer]) => {
            store.reducerManager?.remove(name as StateSchemaKey);
            dispatch({ type: `@DESTROY ${name} reducer` });
          });
      }
    };
    // eslint-disable-next-line
  }, []);

  return (
      // eslint-disable-next-line react/jsx-no-useless-fragment
      <>
          {children}
      </>
  );
};
