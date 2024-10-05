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
import {
  MockedEntitiesGenerator,
} from 'shared/lib/tests/MockDataGenerator/MockedEntitiesGenerator/MockedEntitiesGenerator';
import { RecommendationsArticleDetailList } from './RecommendationsArticleDetailList';

export default {
  title: 'entities/RecommendationsArticleDetailList',
  component: RecommendationsArticleDetailList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof RecommendationsArticleDetailList>;

const Template: ComponentStory<typeof RecommendationsArticleDetailList> = (args) => <RecommendationsArticleDetailList {...args} />;
const recommendations = new MockedEntitiesGenerator().createRecommendationsMock(16);

export const FirstRecommendationsArticleDetailList = Template.bind({});
FirstRecommendationsArticleDetailList.args = {
  recommendations,
};
FirstRecommendationsArticleDetailList.decorators = [StoreDecorator({})];

export const SecondRecommendationsArticleDetailList = Template.bind({});
SecondRecommendationsArticleDetailList.args = {
  recommendations,
};
SecondRecommendationsArticleDetailList.decorators = [StoreDecorator({})];
SecondRecommendationsArticleDetailList.decorators = [ThemeDecorator(Theme.DARK)];
