/**
 *    SkeletonComment-story.
 *      - SkeletonComment
 */

import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Theme } from 'app/provider/ThemeProvider';
import { SkeletonComment } from './SkeletonComment';

export default {
  title: 'enterSlice/SkeletonComment',
  component: SkeletonComment,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof SkeletonComment>;

const Template: ComponentStory<typeof SkeletonComment> = (args) => <SkeletonComment {...args} />;

export const FirstSkeletonComment = Template.bind({});
FirstSkeletonComment.args = {};
FirstSkeletonComment.decorators = [ThemeDecorator(Theme.DARK)];
FirstSkeletonComment.decorators = [StoreDecorator({})];

export const SecondSkeletonComment = Template.bind({});
SecondSkeletonComment.args = {};
SecondSkeletonComment.decorators = [ThemeDecorator(Theme.DARK)];
SecondSkeletonComment.decorators = [StoreDecorator({})];
