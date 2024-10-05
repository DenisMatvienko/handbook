/**
 *    ArticleTypeTabs-story.
 *      - ArticleTypeTabs
 */

import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/provider/ThemeProvider';
import { ArticleType } from 'entities/Article/model/types/article';
import { ArticleTypeTabs } from './ArticleTypeTabs';

export default {
  title: 'entities/ArticleTypeTabs',
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

export const SecondArticleTypeTabs = Template.bind({});
SecondArticleTypeTabs.args = {};
SecondArticleTypeTabs.decorators = [ThemeDecorator(Theme.LIGHT)];
