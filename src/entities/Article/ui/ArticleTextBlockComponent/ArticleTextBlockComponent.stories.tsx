/**
 *    ArticleTextBlockComponent-story.
 *      - ArticleTextBlockComponent
 */

import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Theme } from 'app/provider/ThemeProvider';
import { ArticleTextBlockComponent } from './ArticleTextBlockComponent';

export default {
  title: 'enterSlice/ArticleTextBlockComponent',
  component: ArticleTextBlockComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof ArticleTextBlockComponent>;

const Template: ComponentStory<typeof ArticleTextBlockComponent> = (args) => <ArticleTextBlockComponent {...args} />;

export const FirstArticleTextBlockComponent = Template.bind({});
FirstArticleTextBlockComponent.args = {};
FirstArticleTextBlockComponent.decorators = [ThemeDecorator(Theme.DARK)];
FirstArticleTextBlockComponent.decorators = [StoreDecorator({})];

export const SecondArticleTextBlockComponent = Template.bind({});
SecondArticleTextBlockComponent.args = {};
SecondArticleTextBlockComponent.decorators = [ThemeDecorator(Theme.DARK)];
SecondArticleTextBlockComponent.decorators = [StoreDecorator({})];
