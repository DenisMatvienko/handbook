// eslint-disable-next-line max-classes-per-file
import { Article } from 'entities/Article';
import { mockedArticle } from '../MockedData/MockedData';

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

export class UserMock {
  // Articles data
}
