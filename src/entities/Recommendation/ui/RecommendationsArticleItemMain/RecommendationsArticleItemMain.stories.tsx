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
import { RecommendationsArticleItemMain } from './RecommendationsArticleItemMain';

export default {
  title: 'enterSlice/RecommendationsArticleItemMain',
  component: RecommendationsArticleItemMain,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof RecommendationsArticleItemMain>;

const Template: ComponentStory<typeof RecommendationsArticleItemMain> = (args) => <RecommendationsArticleItemMain {...args} />;

export const FirstRecommendationsArticleItemMain = Template.bind({});
FirstRecommendationsArticleItemMain.args = {};
FirstRecommendationsArticleItemMain.decorators = [ThemeDecorator(Theme.DARK)];
FirstRecommendationsArticleItemMain.decorators = [StoreDecorator({})];

export const SecondRecommendationsArticleItemMain = Template.bind({});
SecondRecommendationsArticleItemMain.args = {};
SecondRecommendationsArticleItemMain.decorators = [ThemeDecorator(Theme.DARK)];
SecondRecommendationsArticleItemMain.decorators = [StoreDecorator({})];
