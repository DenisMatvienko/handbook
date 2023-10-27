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

import { uid } from 'shared/lib/uid/uid';

const findDuplicates = (array: Array<string>) => {
  const duplicate = array.filter((item, index) => array.indexOf(item) !== index);
  return duplicate.length;
};

const runUid = (times: Number) => {
  const expected: Array<string> = [];
  for (let i = 0; i < times; i++) {
    expected[i] = uid();
  }
  return expected;
};

describe('uid', () => {
  test('check on type', () => {
    expect(typeof uid()).toBe('string');
  });

  test('check on length', () => {
    expect(uid().length).toBe(18);
  });

  test('check on coincidences', () => {
    expect(findDuplicates(runUid(500))).toBe(0);
  });

  test('check findDuplicates helper', () => {
    const expected = ['1', '2', '2', '3', '1', '3'];
    expect(findDuplicates(expected)).toBe(3);
  });
});
