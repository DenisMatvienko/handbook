/**
 *    CommentList-story.
 *      - CommentList
 */

import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Theme } from 'app/provider/ThemeProvider';
import { CommentList } from './CommentList';

export default {
  title: 'enterSlice/CommentList',
  component: CommentList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />;

export const FirstCommentList = Template.bind({});
FirstCommentList.args = {};
FirstCommentList.decorators = [ThemeDecorator(Theme.DARK)];
FirstCommentList.decorators = [StoreDecorator({})];

export const SecondCommentList = Template.bind({});
SecondCommentList.args = {};
SecondCommentList.decorators = [ThemeDecorator(Theme.DARK)];
SecondCommentList.decorators = [StoreDecorator({})];
