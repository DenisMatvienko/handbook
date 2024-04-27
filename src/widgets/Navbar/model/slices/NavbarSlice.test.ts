/**
 *    NavbarSlice test
 *      - test's for NavbarSlice
 *
 *    @test 'add_test_describe'.
 *
 */

import { Navbar } from 'widgets/Navbar/model/types/navbar';
import { NavbarActions, NavbarReducer } from 'widgets/Navbar/model/slices/NavbarSlice';

const InitialState: DeepPartial<Navbar> = {
  searchIsOpen: false,
};

describe('NavbarSlice', () => {
  test('setSearchIsOpen reducer test', () => {
    expect(NavbarReducer(
        InitialState as Navbar,
        NavbarActions.setSearchIsOpen(true),
    ))
      .toEqual({
        searchIsOpen: true,
      });
  });
});
