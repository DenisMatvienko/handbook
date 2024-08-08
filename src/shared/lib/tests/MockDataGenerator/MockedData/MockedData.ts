import { Article } from 'entities/Article';
import { ArticleBlockType, ArticleType } from 'entities/Article/model/types/article';

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
