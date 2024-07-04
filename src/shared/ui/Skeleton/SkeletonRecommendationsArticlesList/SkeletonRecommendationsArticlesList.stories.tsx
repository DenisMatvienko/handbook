/**
 *    SkeletonRecommendationsArticlesList-story.
 *      - SkeletonRecommendationsArticlesList
 */

import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Theme } from 'app/provider/ThemeProvider';
import { SkeletonRecommendationsArticlesList } from './SkeletonRecommendationsArticlesList';

export default {
  title: 'enterSlice/SkeletonRecommendationsArticlesList',
  component: SkeletonRecommendationsArticlesList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof SkeletonRecommendationsArticlesList>;

const Template: ComponentStory<typeof SkeletonRecommendationsArticlesList> = (args) => <SkeletonRecommendationsArticlesList {...args} />;

export const FirstSkeletonRecommendationsArticlesList = Template.bind({});
FirstSkeletonRecommendationsArticlesList.args = {};
FirstSkeletonRecommendationsArticlesList.decorators = [ThemeDecorator(Theme.DARK)];
FirstSkeletonRecommendationsArticlesList.decorators = [StoreDecorator({})];

export const SecondSkeletonRecommendationsArticlesList = Template.bind({});
SecondSkeletonRecommendationsArticlesList.args = {};
SecondSkeletonRecommendationsArticlesList.decorators = [ThemeDecorator(Theme.DARK)];
SecondSkeletonRecommendationsArticlesList.decorators = [StoreDecorator({})];
