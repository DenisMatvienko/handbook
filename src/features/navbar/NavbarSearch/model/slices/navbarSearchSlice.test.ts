/**
 *    NavbarSlice test
 *      - test's for NavbarSlice
 *
 *    @test 'add_test_describe'.
 *
 */

import { NavbarSearchSchema } from 'features/navbar/NavbarSearch/model/types/navbarSearchSchema';
import { navbarSearchActions, navbarSearchReducer } from 'features/navbar/NavbarSearch/model/slices/navbarSearchSlice';

const InitialState: DeepPartial<NavbarSearchSchema> = {
  search: '',
  isLoading: false,
  ids: [],
  entities: {},
  hasMore: true,
  limit: 15,
  page: 1,
  _inited: false,
};

describe('NavbarSearchSlice', () => {
  test('setSearch reducer test', () => {
    expect(navbarSearchReducer(
            InitialState as NavbarSearchSchema,
            navbarSearchActions.setSearch('hello'),
    ))
      .toEqual({
        search: 'hello',
        isLoading: false,
        ids: [],
        entities: {},
        hasMore: true,
        limit: 15,
        page: 1,
        _inited: false,
      });
  });

  test('setSearch reducer test', () => {
    expect(navbarSearchReducer(
            InitialState as NavbarSearchSchema,
            navbarSearchActions.setPage(2),
    ))
      .toEqual({
        search: '',
        isLoading: false,
        ids: [],
        entities: {},
        hasMore: true,
        limit: 15,
        page: 2,
        _inited: false,
      });
  });
});
