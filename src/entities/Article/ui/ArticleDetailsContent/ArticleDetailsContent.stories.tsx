/**
 *    ArticleDetailsContent-story.
 *      - ArticleDetailsContent
 */

import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Theme } from 'app/provider/ThemeProvider';
import { ArticleDetailsContent } from './ArticleDetailsContent';

export default {
  title: 'enterSlice/ArticleDetailsContent',
  component: ArticleDetailsContent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof ArticleDetailsContent>;

const Template: ComponentStory<typeof ArticleDetailsContent> = (args) => <ArticleDetailsContent {...args} />;

export const FirstArticleDetailsContent = Template.bind({});
FirstArticleDetailsContent.args = {};
FirstArticleDetailsContent.decorators = [ThemeDecorator(Theme.DARK)];
FirstArticleDetailsContent.decorators = [StoreDecorator({})];

export const SecondArticleDetailsContent = Template.bind({});
SecondArticleDetailsContent.args = {};
SecondArticleDetailsContent.decorators = [ThemeDecorator(Theme.DARK)];
SecondArticleDetailsContent.decorators = [StoreDecorator({})];
