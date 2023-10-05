/**
 *    ArticleCodeBlockComponent-story.
 *      - ArticleCodeBlockComponent
 */

import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Theme } from 'app/provider/ThemeProvider';
import { ArticleCodeBlockComponent } from './ArticleCodeBlockComponent';

export default {
  title: 'enterSlice/ArticleCodeBlockComponent',
  component: ArticleCodeBlockComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof ArticleCodeBlockComponent>;

const Template: ComponentStory<typeof ArticleCodeBlockComponent> = (args) => <ArticleCodeBlockComponent {...args} />;

export const FirstArticleCodeBlockComponent = Template.bind({});
FirstArticleCodeBlockComponent.args = {};
FirstArticleCodeBlockComponent.decorators = [ThemeDecorator(Theme.DARK)];
FirstArticleCodeBlockComponent.decorators = [StoreDecorator({})];

export const SecondArticleCodeBlockComponent = Template.bind({});
SecondArticleCodeBlockComponent.args = {};
SecondArticleCodeBlockComponent.decorators = [ThemeDecorator(Theme.DARK)];
SecondArticleCodeBlockComponent.decorators = [StoreDecorator({})];
