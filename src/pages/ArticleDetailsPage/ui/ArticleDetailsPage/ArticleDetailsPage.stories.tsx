/**
 *    ArticleDetailsPage-story.
 *      - ArticleDetailsPage
 */

import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Theme } from 'app/provider/ThemeProvider';
import ArticleDetailsPage from './ArticleDetailsPage';

export default {
  title: 'enterSlice/ArticleDetailsPage',
  component: ArticleDetailsPage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof ArticleDetailsPage>;

const Template: ComponentStory<typeof ArticleDetailsPage> = (args) => <ArticleDetailsPage {...args} />;

export const FirstArticleDetailsPage = Template.bind({});
FirstArticleDetailsPage.args = {};
FirstArticleDetailsPage.decorators = [ThemeDecorator(Theme.DARK)];
FirstArticleDetailsPage.decorators = [StoreDecorator({})];

export const SecondArticleDetailsPage = Template.bind({});
SecondArticleDetailsPage.args = {};
SecondArticleDetailsPage.decorators = [ThemeDecorator(Theme.DARK)];
SecondArticleDetailsPage.decorators = [StoreDecorator({})];
