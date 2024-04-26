/**
 *      - Navbar reducers slice
 */

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Navbar } from 'widgets/Navbar/model/types/navbar';

const initialState: Navbar = {
  searchIsOpen: false,
};

export const NavbarSlice = createSlice({
  name: 'NavbarSlice',
  initialState,
  reducers: {
    setSearchIsOpen: (state, action: PayloadAction<boolean>) => {
      state.searchIsOpen = action.payload;
    },
  },
});

export const { actions: NavbarActions } = NavbarSlice;
export const { reducer: NavbarReducer } = NavbarSlice;
