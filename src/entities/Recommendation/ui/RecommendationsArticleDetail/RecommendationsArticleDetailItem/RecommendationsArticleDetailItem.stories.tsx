/**
 *    RecommendationsArticleDetailItem-story.
 *      - RecommendationsArticleDetailItem
 */

import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Theme } from 'app/provider/ThemeProvider';
import { RecommendationsArticleDetailItem } from './RecommendationsArticleDetailItem';

export default {
  title: 'enterSlice/RecommendationsArticleDetailItem',
  component: RecommendationsArticleDetailItem,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof RecommendationsArticleDetailItem>;

const Template: ComponentStory<typeof RecommendationsArticleDetailItem> = (args) => <RecommendationsArticleDetailItem {...args} />;

export const FirstRecommendationsArticleDetailItem = Template.bind({});
FirstRecommendationsArticleDetailItem.args = {};
FirstRecommendationsArticleDetailItem.decorators = [ThemeDecorator(Theme.DARK)];
FirstRecommendationsArticleDetailItem.decorators = [StoreDecorator({})];

export const SecondRecommendationsArticleDetailItem = Template.bind({});
SecondRecommendationsArticleDetailItem.args = {};
SecondRecommendationsArticleDetailItem.decorators = [ThemeDecorator(Theme.DARK)];
SecondRecommendationsArticleDetailItem.decorators = [StoreDecorator({})];
