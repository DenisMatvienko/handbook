/**
 *    ArticleDetails-story.
 *      - ArticleDetails
 */

import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Theme } from 'app/provider/ThemeProvider';
import { ArticleDetails } from './ArticleDetails';

export default {
  title: 'enterSlice/ArticleDetails',
  component: ArticleDetails,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof ArticleDetails>;

const Template: ComponentStory<typeof ArticleDetails> = (args) => <ArticleDetails {...args} />;

export const FirstArticleDetails = Template.bind({});
FirstArticleDetails.args = {};
FirstArticleDetails.decorators = [ThemeDecorator(Theme.DARK)];
FirstArticleDetails.decorators = [StoreDecorator({})];

export const SecondArticleDetails = Template.bind({});
SecondArticleDetails.args = {};
SecondArticleDetails.decorators = [ThemeDecorator(Theme.DARK)];
SecondArticleDetails.decorators = [StoreDecorator({})];
