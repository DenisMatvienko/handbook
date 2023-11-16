/**
 *    SkeletonArticleListItem-story.
 */

import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import 'app/styles/index.scss';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ArticleView } from 'entities/Article';
import { SkeletonArticleListItem } from './SkeletonArticleListItem';

export default {
  title: 'shared/SkeletonArticleListItem',
  component: SkeletonArticleListItem,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof SkeletonArticleListItem>;

const Template: ComponentStory<typeof SkeletonArticleListItem> = (args) => <SkeletonArticleListItem {...args} />;

export const FirstSkeletonArticleList = Template.bind({});
FirstSkeletonArticleList.args = {
  view: ArticleView.LIST,
};
FirstSkeletonArticleList.decorators = [StoreDecorator({})];

export const SecondSkeletonArticleGrid = Template.bind({});
SecondSkeletonArticleGrid.args = {
  view: ArticleView.GRID,
};
SecondSkeletonArticleGrid.decorators = [StoreDecorator({})];
