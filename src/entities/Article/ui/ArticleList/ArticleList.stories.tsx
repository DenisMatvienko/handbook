/**
 *    ArticleList-story.
 *      - ArticleList
 */

import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Theme } from 'app/provider/ThemeProvider';
import { Article, ArticleView } from 'entities/Article';
import { ArticleBlockType, ArticleType } from 'entities/Article/model/types/article';
import { ArticleList } from './ArticleList';

export default {
  title: 'entities/ArticleList',
  component: ArticleList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof ArticleList>;

const Template: ComponentStory<typeof ArticleList> = (args) => <ArticleList {...args} />;

const article: Article = {
  id: '1',
  title: 'Управление памятью в JavaScript',
  subtitle: 'Управление памятью и принципах работы сборщика мусора',
  img: 'https://media.proglib.io/wp-uploads/2018/06/jhkhk.jpg',
  views: 1022,
  createdAt: '19.09.2023',
  user: {
    id: '1',
    username: 'JLebowski',
  },
  type: [ArticleType.IT, ArticleType.ARCHITECTURE, ArticleType.JS],
  blocks: [
    {
      id: '1',
      type: ArticleBlockType.TEXT,
      title: 'Стек и куча',
      paragraphs: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      ],
    },
  ],
};

export const FirstArticleList = Template.bind({});
FirstArticleList.args = {};
FirstArticleList.decorators = [ThemeDecorator(Theme.DARK)];
FirstArticleList.decorators = [StoreDecorator({})];

export const SecondArticleGrid = Template.bind({});
SecondArticleGrid.args = {};
SecondArticleGrid.decorators = [StoreDecorator({})];
