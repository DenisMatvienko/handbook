// eslint-disable-next-line max-classes-per-file
import { Article } from 'entities/Article';
import { Comment } from 'entities/Comment';
import { Recommendation } from 'entities/Recommendation';
import { mockedArticle, mockedComment, mockedRecommendation } from '../MockedData/MockedData';

export class MockedEntitiesGenerator {
  article: Article;

  recommendation: Recommendation;

  comment: Comment;

  constructor() {
    this.article = mockedArticle;
    this.recommendation = mockedRecommendation;
    this.comment = mockedComment;
  }

  createCommentMock(count: number) {
    const comment: Comment[] = new Array(count || 16)
      .fill(0)
      .map((item, index) => (
        {
          ...this.comment,
          id: String(index),
        }
      ));

    return comment;
  }

  createArticlesMock(count: number) {
    const articles: Article[] = new Array(count || 16)
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
