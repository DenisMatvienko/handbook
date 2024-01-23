/**
 *    ArticlePageFilters-story.
 *      - ArticlePageFilters
 */

import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Theme } from 'app/provider/ThemeProvider';
import { ArticlePageFilters } from './ArticlePageFilters';

export default {
  title: 'enterSlice/ArticlePageFilters',
  component: ArticlePageFilters,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof ArticlePageFilters>;

const Template: ComponentStory<typeof ArticlePageFilters> = (args) => <ArticlePageFilters {...args} />;

export const FirstArticlePageFilters = Template.bind({});
FirstArticlePageFilters.args = {};
FirstArticlePageFilters.decorators = [ThemeDecorator(Theme.DARK)];
FirstArticlePageFilters.decorators = [StoreDecorator({})];

export const SecondArticlePageFilters = Template.bind({});
SecondArticlePageFilters.args = {};
SecondArticlePageFilters.decorators = [ThemeDecorator(Theme.DARK)];
SecondArticlePageFilters.decorators = [StoreDecorator({})];
