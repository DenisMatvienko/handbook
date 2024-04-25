/**
 *    ArticleTypeTabs-story.
 *      - ArticleTypeTabs
 */

import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Theme } from 'app/provider/ThemeProvider';
import { ArticleTypeTabs } from './ArticleTypeTabs';

export default {
  title: 'enterSlice/ArticleTypeTabs',
  component: ArticleTypeTabs,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof ArticleTypeTabs>;

const Template: ComponentStory<typeof ArticleTypeTabs> = (args) => <ArticleTypeTabs {...args} />;

export const FirstArticleTypeTabs = Template.bind({});
FirstArticleTypeTabs.args = {};
FirstArticleTypeTabs.decorators = [ThemeDecorator(Theme.DARK)];
FirstArticleTypeTabs.decorators = [StoreDecorator({})];

export const SecondArticleTypeTabs = Template.bind({});
SecondArticleTypeTabs.args = {};
SecondArticleTypeTabs.decorators = [ThemeDecorator(Theme.DARK)];
SecondArticleTypeTabs.decorators = [StoreDecorator({})];
