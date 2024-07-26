/**
 *    RecommendationsArticleListMain-story.
 *      - RecommendationsArticleListMain
 */

import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Theme } from 'app/provider/ThemeProvider';
import { RecommendationsArticleListMain } from './RecommendationsArticleListMain';

export default {
  title: 'enterSlice/RecommendationsArticleListMain',
  component: RecommendationsArticleListMain,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof RecommendationsArticleListMain>;

const Template: ComponentStory<typeof RecommendationsArticleListMain> = (args) => <RecommendationsArticleListMain {...args} />;

export const FirstRecommendationsArticleListMain = Template.bind({});
FirstRecommendationsArticleListMain.args = {};
FirstRecommendationsArticleListMain.decorators = [ThemeDecorator(Theme.DARK)];
FirstRecommendationsArticleListMain.decorators = [StoreDecorator({})];

export const SecondRecommendationsArticleListMain = Template.bind({});
SecondRecommendationsArticleListMain.args = {};
SecondRecommendationsArticleListMain.decorators = [ThemeDecorator(Theme.DARK)];
SecondRecommendationsArticleListMain.decorators = [StoreDecorator({})];
