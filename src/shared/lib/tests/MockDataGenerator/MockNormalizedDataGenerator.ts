import { mockedArticle, mockedRecommendation } from 'shared/lib/tests/MockDataGenerator/MockedData/MockedData';

export class MockNormalizedDataGenerator {
  // Data's which uses as mock
  entity: Record<string, object> = {};

  createUniversalDataMock(count: number, data?: DeepPartial<object>) {
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

  createNormalizedArticleMock(count: number) {
    for (let i = 0; i < count; i++) {
      const key = new Array(count).fill(0).map((_, i) => String(i))[i];
      const value = {
        mockedArticle,
        id: String(key),
      };
      this.entity[key] = value;
    }
    return this.entity;
  }

  createNormalizedRecommendationMock(count: number) {
    for (let i = 0; i < count; i++) {
      const key = new Array(count).fill(0).map((_, i) => String(i))[i];
      const value = {
        mockedRecommendation,
        id: String(key),
        articleId: String(key + 1),
      };
      this.entity[key] = value;
    }
    return this.entity;
  }
}
