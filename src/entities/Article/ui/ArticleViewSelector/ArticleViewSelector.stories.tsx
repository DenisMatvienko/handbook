/**
 *    ArticleViewSelector-story.
 *      - ArticleViewSelector
 */

import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Theme } from 'app/provider/ThemeProvider';
import { ArticleViewSelector } from './ArticleViewSelector';

export default {
  title: 'enterSlice/ArticleViewSelector',
  component: ArticleViewSelector,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof ArticleViewSelector>;

const Template: ComponentStory<typeof ArticleViewSelector> = (args) => <ArticleViewSelector {...args} />;

export const FirstArticleViewSelector = Template.bind({});
FirstArticleViewSelector.args = {};
FirstArticleViewSelector.decorators = [ThemeDecorator(Theme.DARK)];
FirstArticleViewSelector.decorators = [StoreDecorator({})];

export const SecondArticleViewSelector = Template.bind({});
SecondArticleViewSelector.args = {};
SecondArticleViewSelector.decorators = [ThemeDecorator(Theme.DARK)];
SecondArticleViewSelector.decorators = [StoreDecorator({})];
