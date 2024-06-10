/**
 *    ArticlePageFilters-story.
 *      - ArticlePageFilters
 */

import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import 'app/styles/index.scss';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ArticlePageHeader } from './ArticlePageHeader';

export default {
  title: 'features/ArticlePageFilters',
  component: ArticlePageHeader,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof ArticlePageHeader>;

const Template: ComponentStory<typeof ArticlePageHeader> = (args) => <ArticlePageHeader {...args} />;

export const FirstArticlePageFilters = Template.bind({});
FirstArticlePageFilters.args = {};
FirstArticlePageFilters.decorators = [StoreDecorator({})];
