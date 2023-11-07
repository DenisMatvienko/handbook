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
import { ArticleList } from './ArticleList';

export default {
  title: 'enterSlice/ArticleList',
  component: ArticleList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof ArticleList>;

const Template: ComponentStory<typeof ArticleList> = (args) => <ArticleList {...args} />;

export const FirstArticleList = Template.bind({});
FirstArticleList.args = {};
FirstArticleList.decorators = [ThemeDecorator(Theme.DARK)];
FirstArticleList.decorators = [StoreDecorator({})];

export const SecondArticleList = Template.bind({});
SecondArticleList.args = {};
SecondArticleList.decorators = [ThemeDecorator(Theme.DARK)];
SecondArticleList.decorators = [StoreDecorator({})];
