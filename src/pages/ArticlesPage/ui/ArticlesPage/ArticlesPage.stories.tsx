/**
 *    ArticlesPage-story.
 *      - ArticlesPage
 */

import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Theme } from 'app/provider/ThemeProvider';
import ArticlesPage from './ArticlesPage';

export default {
  title: 'enterSlice/ArticlesPage',
  component: ArticlesPage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof ArticlesPage>;

const Template: ComponentStory<typeof ArticlesPage> = (args) => <ArticlesPage {...args} />;

export const FirstArticlesPage = Template.bind({});
FirstArticlesPage.args = {};
FirstArticlesPage.decorators = [ThemeDecorator(Theme.DARK)];
FirstArticlesPage.decorators = [StoreDecorator({})];

export const SecondArticlesPage = Template.bind({});
SecondArticlesPage.args = {};
SecondArticlesPage.decorators = [ThemeDecorator(Theme.DARK)];
SecondArticlesPage.decorators = [StoreDecorator({})];
