// eslint-disable-next-line max-classes-per-file
import { Article } from 'entities/Article';
import { Recommendation } from 'entities/Recommendation';
import { mockedArticle, mockedRecommendation } from '../MockedData/MockedData';

export class MockedEntitiesGenerator {
  article: Article;

  recommendation: Recommendation;

  constructor() {
    this.article = mockedArticle;
    this.recommendation = mockedRecommendation;
  }

  createArticlesMock(count: number) {
    const articles: Article[] = new Array(count)
      .fill(0)
      .map((item, index) => (
        {
          ...this.article,
          id: String(index),
        }
      ));

    return articles;
  }

  createRecommendationsMock(count: number) {
    const recommendations: Recommendation[] = new Array(count)
      .fill(0)
      .map((item, index) => (
        {
          ...this.recommendation,
          id: String(index),
          articleId: String(index + 1),
        }
      ));

    return recommendations;
  }
}
