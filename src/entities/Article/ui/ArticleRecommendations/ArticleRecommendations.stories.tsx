/**
 *    ArticleRecommendations-story.
 *      - ArticleRecommendations
 */

import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Theme } from 'app/provider/ThemeProvider';
import { ArticleRecommendations } from './ArticleRecommendations';

export default {
  title: 'enterSlice/ArticleRecommendations',
  component: ArticleRecommendations,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof ArticleRecommendations>;

const Template: ComponentStory<typeof ArticleRecommendations> = (args) => <ArticleRecommendations {...args} />;

export const FirstArticleRecommendations = Template.bind({});
FirstArticleRecommendations.args = {};
FirstArticleRecommendations.decorators = [ThemeDecorator(Theme.DARK)];
FirstArticleRecommendations.decorators = [StoreDecorator({})];

export const SecondArticleRecommendations = Template.bind({});
SecondArticleRecommendations.args = {};
SecondArticleRecommendations.decorators = [ThemeDecorator(Theme.DARK)];
SecondArticleRecommendations.decorators = [StoreDecorator({})];
