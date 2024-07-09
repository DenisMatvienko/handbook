/**
 *    ArticlesPageRecommendations-story.
 *      - ArticlesPageRecommendations
 */

import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Theme } from 'app/provider/ThemeProvider';
import { ArticlesPageRecommendations } from './ArticlesPageRecommendations';

export default {
  title: 'enterSlice/ArticlesPageRecommendations',
  component: ArticlesPageRecommendations,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof ArticlesPageRecommendations>;

const Template: ComponentStory<typeof ArticlesPageRecommendations> = (args) => <ArticlesPageRecommendations {...args} />;

export const FirstArticlesPageRecommendations = Template.bind({});
FirstArticlesPageRecommendations.args = {};
FirstArticlesPageRecommendations.decorators = [ThemeDecorator(Theme.DARK)];
FirstArticlesPageRecommendations.decorators = [StoreDecorator({})];

export const SecondArticlesPageRecommendations = Template.bind({});
SecondArticlesPageRecommendations.args = {};
SecondArticlesPageRecommendations.decorators = [ThemeDecorator(Theme.DARK)];
SecondArticlesPageRecommendations.decorators = [StoreDecorator({})];
