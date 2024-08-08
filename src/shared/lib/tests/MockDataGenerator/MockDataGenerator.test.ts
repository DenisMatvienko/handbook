/**
 *   Test generated data by mocking api
 */

import { MockDataGenerator } from 'shared/lib/tests/MockDataGenerator/MockDataGenerator';
import { Article } from 'entities/Article';
import { ArticleMock } from 'shared/lib/tests/MockDataGenerator/MockedEntities/MockedEntities';
import { mockedArticle } from './MockedData/MockedData';

const articles: Article[] = new Array(5)
  .fill(0)
  .map((item, index) => (
    {
      ...mockedArticle,
      id: String(index),
    }
  ));

const entities = (count: number):Record<string, object> => {
  const entity: Record<string, object> = {};
  for (let i = 0; i < count; i++) {
    const key = new Array(count).fill(0).map((_, i) => String(i))[i];
    const value = {
      ...mockedArticle,
      id: String(key),
    };
    entity[key] = value;
  }
  return entity;
};

describe('MockDataGenerator', () => {
  test('check on correct normalized data', () => {
    const generated = new MockDataGenerator().createNormalizedArticleMock(16, mockedArticle);
    expect(generated).toEqual(entities(16));
  });

  test('check on correct normalized data with default data', () => {
    const generated = new MockDataGenerator().createNormalizedArticleMock(16);
    expect(generated).toEqual(entities(16));
  });

  test('check on correct articles data', () => {
    const generated = new ArticleMock().getArticlesMock(5);
    expect(generated).toEqual(articles);
  });
});
