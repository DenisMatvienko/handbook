/**
 *    initNavbarSearch fetching
 *      -
 */

import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/provider/StoreProvider';
import { navbarSearchActions } from 'features/NavbarSearch/model/slices/navbarSearchSlice';
import { fetchNavbarSearch } from 'features/NavbarSearch/model/services/fetchNavbarSearch/fetchNavbarSearch';
import { getNavbarSearchInited } from 'features/NavbarSearch/model/selectors/getNavbarSearchSelectors';

export const initNavbarSearch = createAsyncThunk<void,
    void,
    ThunkConfig<string>>(
      'navbarSearch/initNavbarSearch',
      async (_, thunkAPI) => {
        const {
          dispatch,
          getState,
        } = thunkAPI;

        const searchParams = new URLSearchParams(window.location.search);

        const inited = getNavbarSearchInited(getState());

        if (!inited) {
          const searchFromUrl = searchParams.get('search');

          if (searchFromUrl) {
            dispatch(navbarSearchActions.setSearch(searchFromUrl));
          }

          dispatch(fetchNavbarSearch({}));
        }
      },
    );
