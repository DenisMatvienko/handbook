/**
 *    ArticlePageFilters-story.
 *      - ArticlePageFilters
 */

import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import 'app/styles/index.scss';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ArticlePageFilters } from './ArticlePageFilters';

export default {
  title: 'features/ArticlePageFilters',
  component: ArticlePageFilters,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof ArticlePageFilters>;

const Template: ComponentStory<typeof ArticlePageFilters> = (args) => <ArticlePageFilters {...args} />;

export const FirstArticlePageFilters = Template.bind({});
FirstArticlePageFilters.args = {};
FirstArticlePageFilters.decorators = [StoreDecorator({})];
