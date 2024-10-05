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
import {
  MockedEntitiesGenerator,
} from 'shared/lib/tests/MockDataGenerator/MockedEntitiesGenerator/MockedEntitiesGenerator';
import { RecommendationsArticleListMain } from './RecommendationsArticleListMain';

export default {
  title: 'entities/RecommendationsArticleListMain',
  component: RecommendationsArticleListMain,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof RecommendationsArticleListMain>;

const Template: ComponentStory<typeof RecommendationsArticleListMain> = (args) => <RecommendationsArticleListMain {...args} />;
const recommendations = new MockedEntitiesGenerator().createRecommendationsMock(16);

export const FirstRecommendationsArticleListMain = Template.bind({});
FirstRecommendationsArticleListMain.args = {
  recommendations,
};

export const SecondRecommendationsArticleListMain = Template.bind({});
SecondRecommendationsArticleListMain.args = {
  recommendations,
};
SecondRecommendationsArticleListMain.decorators = [ThemeDecorator(Theme.DARK)];
