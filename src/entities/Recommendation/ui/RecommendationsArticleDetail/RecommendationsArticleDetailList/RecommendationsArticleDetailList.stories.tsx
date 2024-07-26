/**
 *    RecommendationsArticleDetailList-story.
 *      - RecommendationsArticleDetailList
 */

import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Theme } from 'app/provider/ThemeProvider';
import { RecommendationsArticleDetailList } from './RecommendationsArticleDetailList';

export default {
  title: 'enterSlice/RecommendationsArticleDetailList',
  component: RecommendationsArticleDetailList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof RecommendationsArticleDetailList>;

const Template: ComponentStory<typeof RecommendationsArticleDetailList> = (args) => <RecommendationsArticleDetailList {...args} />;

export const FirstRecommendationsArticleDetailList = Template.bind({});
FirstRecommendationsArticleDetailList.args = {};
FirstRecommendationsArticleDetailList.decorators = [ThemeDecorator(Theme.DARK)];
FirstRecommendationsArticleDetailList.decorators = [StoreDecorator({})];

export const SecondRecommendationsArticleDetailList = Template.bind({});
SecondRecommendationsArticleDetailList.args = {};
SecondRecommendationsArticleDetailList.decorators = [ThemeDecorator(Theme.DARK)];
SecondRecommendationsArticleDetailList.decorators = [StoreDecorator({})];
