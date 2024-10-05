import { StateSchema } from 'app/provider/StoreProvider';
import { getScrollRestoration, getScrollRestorationBypath } from './GetScrollRestoration';

describe('getScrollRestoration', () => {
  test('selector should return scroll', () => {
    const state: DeepPartial<StateSchema> = {
      scrollRestoration: {
        scroll: {
          '/articles': 123,
        },
      },
    };
    expect(getScrollRestoration(state as StateSchema)).toEqual({ '/articles': 123 });
  });

  test('selector should return error', () => {
    const state: DeepPartial<StateSchema> = {
      scrollRestoration: {},
    };
    expect(getScrollRestoration(state as StateSchema)).toEqual(undefined);
  });

  test('selector getScrollRestorationBypath get path', () => {
    const state: DeepPartial<StateSchema> = {
      scrollRestoration: {
        scroll: {
          '/articles': 123,
        },
      },
    };
    expect(getScrollRestorationBypath(state as StateSchema, '/articles')).toEqual(123);
  });
  test('selector getScrollRestorationBypath error', () => {
    const state: DeepPartial<StateSchema> = {
      scrollRestoration: {
        scroll: {
          '/articles': undefined,
        },
      },
    };
    expect(getScrollRestorationBypath(state as StateSchema, '/articles')).toEqual(0);
  });
});
