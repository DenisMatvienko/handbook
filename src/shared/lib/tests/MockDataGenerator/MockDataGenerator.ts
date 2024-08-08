import { ArticleMock } from 'shared/lib/tests/MockDataGenerator/MockedEntities/MockedEntities';
import { mockedArticle } from 'shared/lib/tests/MockDataGenerator/MockedData/MockedData';

export class MockDataGenerator {
  // Data's which uses as mock
  articles: ArticleMock = new ArticleMock();

  entity: Record<string, object> = {};

  createNormalizedArticleMock(count: number, data?: object) {
    for (let i = 0; i < count; i++) {
      const key = new Array(count).fill(0).map((_, i) => String(i))[i];
      const value = {
        ...data ?? mockedArticle,
        id: String(key),
      };
      this.entity[key] = value;
    }
    return this.entity;
  }
}
