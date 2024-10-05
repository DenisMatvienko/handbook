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
import {
  MockedEntitiesGenerator,
} from 'shared/lib/tests/MockDataGenerator/MockedEntitiesGenerator/MockedEntitiesGenerator';
import { mockedRecommendation } from 'shared/lib/tests/MockDataGenerator/MockedData/MockedData';
import { RecommendationsArticleDetailItem } from './RecommendationsArticleDetailItem';

export default {
  title: 'entities/RecommendationsArticleDetailItem',
  component: RecommendationsArticleDetailItem,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof RecommendationsArticleDetailItem>;

const Template: ComponentStory<typeof RecommendationsArticleDetailItem> = (args) => <RecommendationsArticleDetailItem {...args} />;
const recommendation = mockedRecommendation;

export const FirstRecommendationsArticleDetailItem = Template.bind({});
FirstRecommendationsArticleDetailItem.args = {
  recommendation,
};
FirstRecommendationsArticleDetailItem.decorators = [StoreDecorator({})];

export const SecondRecommendationsArticleDetailItem = Template.bind({});
SecondRecommendationsArticleDetailItem.args = {
  recommendation,
};
SecondRecommendationsArticleDetailItem.decorators = [ThemeDecorator(Theme.DARK)];
