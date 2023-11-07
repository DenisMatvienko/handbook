/**
 *    ArticleListItem-story.
 *      - ArticleListItem
 */

import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Theme } from 'app/provider/ThemeProvider';
import { ArticleListItem } from './ArticleListItem';

export default {
  title: 'enterSlice/ArticleListItem',
  component: ArticleListItem,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof ArticleListItem>;

const Template: ComponentStory<typeof ArticleListItem> = (args) => <ArticleListItem {...args} />;

export const FirstArticleListItem = Template.bind({});
FirstArticleListItem.args = {};
FirstArticleListItem.decorators = [ThemeDecorator(Theme.DARK)];
FirstArticleListItem.decorators = [StoreDecorator({})];

export const SecondArticleListItem = Template.bind({});
SecondArticleListItem.args = {};
SecondArticleListItem.decorators = [ThemeDecorator(Theme.DARK)];
SecondArticleListItem.decorators = [StoreDecorator({})];
