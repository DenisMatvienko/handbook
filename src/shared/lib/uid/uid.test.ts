/**
 *    uid helper test;
 *      - check on length, type and coincidences of 'id' which returned from uid helper.
 *
 *    @param findDuplicates;
 *      - helper func which check how many times match duplicate in array from arg.
 */

import { uid } from 'shared/lib/uid/uid';

const findDuplicates = (array: Array<string>) => {
  const duplicate = array.filter((item, index) => array.indexOf(item) !== index);
  return duplicate.length;
};

describe('uid', () => {
  test('check on type', () => {
    expect(typeof uid()).toBe('string');
  });

  test('check on length', () => {
    expect(uid().length).toBe(18);
  });

  test('check on coincidences', () => {
    const expected = [];
    for (let i = 0; i <= 500; i++) {
      expected.push(uid());
    }
    expect(findDuplicates(expected)).toBe(0);
  });

  test('check findDuplicates helper', () => {
    const expected = ['1', '2', '2', '3', '1', '3'];
    expect(findDuplicates(expected)).toBe(3);
  });
});
