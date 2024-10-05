/**
 *    initNavbarSearch fetching
 *      -
 */

import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/provider/StoreProvider';
import { navbarSearchActions } from 'features/navbar/NavbarSearch/model/slices/navbarSearchSlice';
import { fetchNavbarSearch } from 'features/navbar/NavbarSearch/model/services/fetchNavbarSearch/fetchNavbarSearch';
import { getNavbarSearchInited } from 'features/navbar/NavbarSearch/model/selectors/getNavbarSearchSelectors';
import { getNavbarSearchIsOpen } from 'widgets/Navbar/model/selectors/getNavbarSelectors';

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
        const searchModalIsOpen = getNavbarSearchIsOpen(getState());

        const inited = getNavbarSearchInited(getState());

        if (!inited && searchModalIsOpen) {
          const searchFromUrl = searchParams.get('search');

          if (searchFromUrl) {
            dispatch(navbarSearchActions.setSearch(searchFromUrl));
          }

          dispatch(fetchNavbarSearch({}));
        }
      },
    );
