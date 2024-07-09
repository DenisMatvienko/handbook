/**
 *    ArticleDetailRecommendations-story.
 *      - ArticleDetailRecommendations
 */

import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Theme } from 'app/provider/ThemeProvider';
import { ArticleDetailRecommendations } from './ArticleDetailRecommendations';

export default {
  title: 'enterSlice/ArticleDetailRecommendations',
  component: ArticleDetailRecommendations,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof ArticleDetailRecommendations>;

const Template: ComponentStory<typeof ArticleDetailRecommendations> = (args) => <ArticleDetailRecommendations {...args} />;

export const FirstArticleDetailRecommendations = Template.bind({});
FirstArticleDetailRecommendations.args = {};
FirstArticleDetailRecommendations.decorators = [ThemeDecorator(Theme.DARK)];
FirstArticleDetailRecommendations.decorators = [StoreDecorator({})];

export const SecondArticleDetailRecommendations = Template.bind({});
SecondArticleDetailRecommendations.args = {};
SecondArticleDetailRecommendations.decorators = [ThemeDecorator(Theme.DARK)];
SecondArticleDetailRecommendations.decorators = [StoreDecorator({})];
