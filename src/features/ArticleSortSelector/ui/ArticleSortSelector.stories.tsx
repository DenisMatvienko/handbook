/**
 *    ArticleSortSelector-story.
 *      - ArticleSortSelector
 */

import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Theme } from 'app/provider/ThemeProvider';
import { ArticleSortSelector } from './ArticleSortSelector';

export default {
  title: 'enterSlice/ArticleSortSelector',
  component: ArticleSortSelector,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof ArticleSortSelector>;

const Template: ComponentStory<typeof ArticleSortSelector> = (args) => <ArticleSortSelector {...args} />;

export const FirstArticleSortSelector = Template.bind({});
FirstArticleSortSelector.args = {};
FirstArticleSortSelector.decorators = [ThemeDecorator(Theme.DARK)];
FirstArticleSortSelector.decorators = [StoreDecorator({})];

export const SecondArticleSortSelector = Template.bind({});
SecondArticleSortSelector.args = {};
SecondArticleSortSelector.decorators = [ThemeDecorator(Theme.DARK)];
SecondArticleSortSelector.decorators = [StoreDecorator({})];
