/**
 *    ScrollRestoration test
 *      - test's for ScrollRestoration
 *
 *    @test 'ScrollRestoration reducer test'.
 *          check reducers on page: '/articles'
 *          - the latest scroll position was: 100
 *          - emulate scroll moving by get payload to setScrollPosition with position: 50
 *          - that means scroll was moving on position 50
 *          - expect that position on state
 *
 */

import { ScrollRestorationActions, ScrollRestorationReducer, ScrollRestorationSchema } from 'features/ScrollRestoration';

describe('ScrollRestoration', () => {
  test('ScrollRestoration reducer test', () => {
    const state: DeepPartial<ScrollRestorationSchema> = {
      scroll: {
        '/articles': 100,
      },
    };
    expect(ScrollRestorationReducer(
          state as ScrollRestorationSchema,
          ScrollRestorationActions.setScrollPosition({
            position: 50,
            path: '/articles',
          }),
    ))
      .toEqual({
        scroll: {
          '/articles': 50,
        },
      });
  });
});
