/**
 *    ArticleDetails-story.
 */

import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import 'app/styles/index.scss';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Article } from 'entities/Article';
import { ArticleBlockType, ArticleType } from 'entities/Article/model/types/article';
import ArticleDetailsPage from './ArticleDetailsPage';

export default {
  title: 'pages/ArticleDetailsPage',
  component: ArticleDetailsPage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof ArticleDetailsPage>;

const Template: ComponentStory<typeof ArticleDetailsPage> = (args) => <ArticleDetailsPage {...args} />;

const article: Article = {
  id: '1',
  title: 'Управление памятью в JavaScript',
  subtitle: 'Управление памятью и принципах работы сборщика мусора, а также о том, как избежать самых распространенных видов утечек памяти.',
  img: 'https://media.proglib.io/wp-uploads/2018/06/jhkhk.jpg',
  views: 1022,
  createdAt: '19.09.2023',
  type: [ArticleType.IT, ArticleType.ARCHITECTURE, ArticleType.JS],
  blocks: [
    {
      id: '1',
      type: ArticleBlockType.TEXT,
      title: 'Стек и куча',
      paragraphs: [
        'В JavaScript есть два варианта хранения данных: в стеке и в куче; и то, и другое – названия структур данных, которые используются движком для различных целей.',
      ],
    },
    {
      id: '4',
      type: ArticleBlockType.CODE,
      code: "\nconst person = {\n  name: 'John',\n  age: 24,\n};\n\n// JavaScript выделяет память под этот объект в куче. \n// Сами же значения являются примитивными, поэтому храниться они будут в стеке.\n\nconst hobbies = ['hiking', 'reading'];\n\n// Массивы – тоже объекты, значит, они сохраняются в куче.\n\nlet name = 'John'; // выделяет память для строки\nconst age = 24; // выделяет память для числа\nname = 'John Doe'; // выделяет память для новой строки\nconst firstName = name.slice(0,4); // выделяет память для новой строки\n\n// Примитивные значения по своей природе иммутабельны: вместо того, чтобы изменить начальное значение,\n// JavaScript создает еще одно.",
    },
    {
      id: '5',
      type: ArticleBlockType.TEXT,
      title: 'Ссылки в JavaScript',
      paragraphs: [
        'Все переменные в первую очередь указывают на стек. В случае, если значение не является примитивным, в стеке содержится ссылка на объект из кучи.\n\nВ куче нет какого-либо определенного порядка, в связи с чем ссылка на нужную нам область памяти должна храниться в стеке: в этом смысле объект в куче похож на дом, а ссылка – на его адрес.',
      ],
    },
    {
      id: '2',
      type: ArticleBlockType.IMAGE,
      src: 'https://webformyself.com/wp-content/uploads/2018/96/1.jpg',
      title: 'Рис. 1 - Распределение памяти во взаимодействии с Event Loop',
    },
    {
      id: '4',
      type: ArticleBlockType.CODE,
      code: "\nconst person = {\n  name: 'John',\n  age: 24,\n};\n\n// JavaScript выделяет память под этот объект в куче. \n// Сами же значения являются примитивными, поэтому храниться они будут в стеке.\n\nconst hobbies = ['hiking', 'reading'];\n\n// Массивы – тоже объекты, значит, они сохраняются в куче.\n\nlet name = 'John'; // выделяет память для строки\nconst age = 24; // выделяет память для числа\nname = 'John Doe'; // выделяет память для новой строки\nconst firstName = name.slice(0,4); // выделяет память для новой строки\n\n// Примитивные значения по своей природе иммутабельны: вместо того, чтобы изменить начальное значение,\n// JavaScript создает еще одно.",
    },
    {
      id: '3',
      type: ArticleBlockType.IMAGE,
      src: 'https://webformyself.com/wp-content/uploads/2018/96/1.jpg',
      title: 'Рис. 2 - Распределение памяти во взаимодействии с Event Loop',
    },
    {
      id: '6',
      type: ArticleBlockType.TEXT,
      title: 'Ссылки в JavaScript',
      paragraphs: [
        'Все переменные в первую очередь указывают на стек. В случае, если значение не является примитивным, в стеке содержится ссылка на объект из кучи.\n\nВ куче нет какого-либо определенного порядка, в связи с чем ссылка на нужную нам область памяти должна храниться в стеке: в этом смысле объект в куче похож на дом, а ссылка – на его адрес.',
      ],
    },
    {
      id: '4',
      type: ArticleBlockType.IMAGE,
      src: 'https://webformyself.com/wp-content/uploads/2018/96/1.jpg',
      title: 'Рис. 3 - Распределение памяти во взаимодействии с Event Loop',
    },
  ],
};

export const ArticleDetailsOk = Template.bind({});
ArticleDetailsOk.args = {};
ArticleDetailsOk.decorators = [StoreDecorator({
  articleDetails: {
    data: article,
  },
})];
