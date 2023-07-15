import { classNames } from 'shared/lib/classNames/classNames';

describe('classNames', () => {
  test('with only first param', () => {
    expect(classNames('hello')).toBe('hello');
  });

  test('with additional class', () => {
    const expected = 'someClass class1 class2';
    expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(expected);
  });

  test('with mods (2 mods - true) + additional', () => {
    const expected = 'someClass class1 class2 scrollable hovered';
    expect(classNames(
      'someClass',
      {
        scrollable: true,
        hovered: true,
      },
      ['class1', 'class2'],
    )).toBe(expected);
  });

  test('with mods (1 mods false) + additional', () => {
    const expected = 'someClass class1 class2 scrollable';
    expect(classNames(
      'someClass',
      {
        scrollable: true,
        hovered: false,
      },
      ['class1', 'class2'],
    )).toBe(expected);
  });

  test('with mods (1 mods undefined) + additional', () => {
    const expected = 'someClass class1 class2 scrollable';
    expect(classNames(
      'someClass',
      {
        scrollable: true,
        hovered: undefined,
      },
      ['class1', 'class2'],
    )).toBe(expected);
  });
});
