import { mockedArticle } from 'shared/lib/tests/MockDataGenerator/MockedData/MockedData';

export class MockNormalizedDataGenerator {
  // Data's which uses as mock
  entity: Record<string, object> = {};

  createNormalizedArticleMock(count: number, data?: DeepPartial<object>) {
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
