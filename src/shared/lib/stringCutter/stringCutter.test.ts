/**
 *    uid helper test;
 *      - check on length, type and coincidences of 'id' which returned from uid helper.
 *
 *    @param findDuplicates;
 *      - helper func which check how many times match duplicate in array from arg.
 *
 *    @param runUid
 *      - run uid() function
 *      - arg: times - count of run
 */

import { stringCutter } from './stringCutter';

describe('uid', () => {
  test('check on type', () => {
    expect(typeof stringCutter('hello', 2)).toBe('string');
  });

  test('check on cutTo args', () => {
    expect(stringCutter('hello', 2)).toBe('he...');
  });

  test('check on cutTo negative', () => {
    expect(stringCutter('hello', -2)).toBe('hello');
  });
});
