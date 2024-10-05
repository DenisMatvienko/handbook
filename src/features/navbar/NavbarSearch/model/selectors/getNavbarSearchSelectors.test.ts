import { StateSchema } from 'app/provider/StoreProvider';
import {
  getNavbarErrorSelector,
  getNavbarHasMoreSelector,
  getNavbarIsLoadingSelector, getNavbarPageSelector,
  getNavbarSearchArticleSelector, getNavbarSearchInited,
  getNavbarSearchLimit,
} from 'features/navbar/NavbarSearch/model/selectors/getNavbarSearchSelectors';

describe('navbarSearch selectors', () => {
  test('selector should return date of getNavbarSearchArticleSelector', () => {
    const state: DeepPartial<StateSchema> = {
      navbarSearch: {
        search: 'hello',
      },
    };
    expect(getNavbarSearchArticleSelector(state as StateSchema))
      .toEqual('hello');
  });
  test('selector get empty data of getNavbarSearchLimit', () => {
    const state: DeepPartial<StateSchema> = {
      navbarSearch: {
        limit: 3,
      },
    };
    expect(getNavbarSearchLimit(state as StateSchema))
      .toEqual(3);
  });
  test('selector get empty data of getNavbarIsLoadingSelector', () => {
    const state: DeepPartial<StateSchema> = {
      navbarSearch: {
        isLoading: true,
      },
    };
    expect(getNavbarIsLoadingSelector(state as StateSchema))
      .toEqual(true);
  });
  test('selector get empty data of getNavbarErrorSelector', () => {
    const state: DeepPartial<StateSchema> = {
      navbarSearch: {
        error: 'fatal error',
      },
    };
    expect(getNavbarErrorSelector(state as StateSchema))
      .toEqual('fatal error');
  });
  test('selector get empty data of getNavbarPageSelector', () => {
    const state: DeepPartial<StateSchema> = {
      navbarSearch: {
        page: 1,
      },
    };
    expect(getNavbarPageSelector(state as StateSchema))
      .toEqual(1);
  });
  test('selector get empty data of getNavbarHasMoreSelector', () => {
    const state: DeepPartial<StateSchema> = {
      navbarSearch: {
        hasMore: true,
      },
    };
    expect(getNavbarHasMoreSelector(state as StateSchema))
      .toEqual(true);
  });
  test('selector get empty data of getNavbarSearchInited', () => {
    const state: DeepPartial<StateSchema> = {
      navbarSearch: {
        _inited: true,
      },
    };
    expect(getNavbarSearchInited(state as StateSchema))
      .toEqual(true);
  });
});
