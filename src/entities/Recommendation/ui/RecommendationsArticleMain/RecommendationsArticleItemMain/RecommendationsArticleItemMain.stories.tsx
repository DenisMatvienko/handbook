/**
 *    RecommendationsArticleItemMain-story.
 *      - RecommendationsArticleItemMain
 */

import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Theme } from 'app/provider/ThemeProvider';
import { mockedRecommendation } from 'shared/lib/tests/MockDataGenerator/MockedData/MockedData';
import { RecommendationsArticleItemMain } from './RecommendationsArticleItemMain';

export default {
  title: 'entities/RecommendationsArticleItemMain',
  component: RecommendationsArticleItemMain,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof RecommendationsArticleItemMain>;

const Template: ComponentStory<typeof RecommendationsArticleItemMain> = (args) => <RecommendationsArticleItemMain {...args} />;
const recommendation = mockedRecommendation;

export const FirstRecommendationsArticleItemMain = Template.bind({});
FirstRecommendationsArticleItemMain.args = {
  recommendation,
};
FirstRecommendationsArticleItemMain.decorators = [StoreDecorator({})];

export const SecondRecommendationsArticleItemMain = Template.bind({});
SecondRecommendationsArticleItemMain.args = {
  recommendation,
};
SecondRecommendationsArticleItemMain.decorators = [ThemeDecorator(Theme.DARK)];
