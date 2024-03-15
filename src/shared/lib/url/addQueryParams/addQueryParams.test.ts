import { getQueryParams } from 'shared/lib/url/addQueryParams/addQueryParams';

describe('get query params', () => {
  test('check 1 param from object', () => {
    const param = {
      order: 'asc',
    };
    expect(getQueryParams(param)).toBe('?order=asc');
  });

  test('check 2 param from object', () => {
    const param = {
      sort: 'asc',
      order: 'by views',
    };
    expect(getQueryParams(param)).toBe('?sort=asc&order=by+views');
  });

  test('check "undefined" param from object', () => {
    const param = {
      sort: 'asc',
      order: undefined,
    };
    expect(getQueryParams(param)).toBe('?sort=asc');
  });
});
