import { Article } from 'entities/Article';
import { Recommendation } from 'entities/Recommendation';
import { ArticleBlockType, ArticleType } from 'entities/Article/model/types/article';
import { RecommendationType } from 'entities/Recommendation/model/types/recommendation';

export const mockedArticle: Article = {
  blocks: [
    {
      id: '1',
      type: ArticleBlockType.TEXT,
      title: 'Стек и куча',
      paragraphs: [
        'В JavaScript есть два варианта хранения данных: в стеке и в куче;',
      ],
    },
  ],
  createdAt: '19.09.2023',
  id: '1',
  img: 'https://media.proglib.io/wp-uploads/2018/06/jhkhk.jpg',
  subtitle: 'Управление памятью и принципах работы сборщика мусора',
  title: 'Управление памятью в JavaScript',
  type: [ArticleType.IT, ArticleType.ARCHITECTURE, ArticleType.JS],
  user: {
    id: '1',
    username: 'JLebowski',
    avatar: 'https://media.proglib.io/wp-uploads/2018/06/jhkhk.jpg',
  },
  views: 1022,
};

export const mockedRecommendation: Recommendation = {
  id: '1',
  articleId: '1',
  title: 'hello',
  subtitle: 'subtitle',
  img: 'path/to/img',
  views: 21,
  createdAt: '21.10.15',
  type: [RecommendationType.IT],
  user: {
    id: '1',
    username: 'den',
    avatar: 'sadsad',
  },
  article: {
    id: '1',
    title: '2',
    subtitle: '21',
    img: 'string',
    views: 21,
    createdAt: '21',
    user: {
      id: '1',
      username: 'den',
      avatar: 'sadsad',
    },
    type: [],
    blocks: [],
  },
};
