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
import { SortOrderType } from 'shared/types/sortOrder/sortOrderType';
import { ArticleSortField } from 'entities/Article/model/types/article';
import { ArticleSortSelector } from './ArticleSortSelector';

export default {
  title: 'features/ArticleSortSelector',
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
FirstArticleSortSelector.args = {
  order: 'asc',
  sort: ArticleSortField.CREATED,
};
FirstArticleSortSelector.decorators = [ThemeDecorator(Theme.DARK)];
