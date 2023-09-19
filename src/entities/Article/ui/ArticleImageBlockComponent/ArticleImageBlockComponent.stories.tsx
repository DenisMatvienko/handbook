/**
 *    ArticleImageBlockComponent-story.
 *      - ArticleImageBlockComponent
 */

import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Theme } from 'app/provider/ThemeProvider';
import { ArticleImageBlockComponent } from './ArticleImageBlockComponent';

export default {
  title: 'enterSlice/ArticleImageBlockComponent',
  component: ArticleImageBlockComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof ArticleImageBlockComponent>;

const Template: ComponentStory<typeof ArticleImageBlockComponent> = (args) => <ArticleImageBlockComponent {...args} />;

export const FirstArticleImageBlockComponent = Template.bind({});
FirstArticleImageBlockComponent.args = {};
FirstArticleImageBlockComponent.decorators = [ThemeDecorator(Theme.DARK)];
FirstArticleImageBlockComponent.decorators = [StoreDecorator({})];

export const SecondArticleImageBlockComponent = Template.bind({});
SecondArticleImageBlockComponent.args = {};
SecondArticleImageBlockComponent.decorators = [ThemeDecorator(Theme.DARK)];
SecondArticleImageBlockComponent.decorators = [StoreDecorator({})];
