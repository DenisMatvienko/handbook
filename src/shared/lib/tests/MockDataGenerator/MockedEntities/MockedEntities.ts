// eslint-disable-next-line max-classes-per-file
import { Article } from 'entities/Article';
import { Recommendation } from 'entities/Recommendation';
import { mockedArticle, mockedRecommendation } from '../MockedData/MockedData';

export class ArticleMock {
  article: Article;

  constructor() {
    this.article = mockedArticle;
  }

  getArticlesMock(count: number) {
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
}

export class RecommendationMock {
  // Recommendation data
  recommendation: Recommendation;

  constructor() {
    this.recommendation = mockedRecommendation;
  }

  getRecommendationsMock(count: number) {
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
