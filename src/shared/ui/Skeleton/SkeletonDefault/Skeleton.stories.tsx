/**
 *    Skeleton-story.
 *      - Skeleton
 */

import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/provider/ThemeProvider';
import { Skeleton, SkeletonTheme } from './Skeleton';

export default {
  title: 'shared/Skeleton',
  component: Skeleton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = (args) => <Skeleton {...args} />;

export const FirstSkeleton = Template.bind({});
FirstSkeleton.args = {
  width: '100%',
  height: 200,
};

export const DarkSkeleton = Template.bind({});
DarkSkeleton.args = {
  width: '100%',
  height: 200,
};
DarkSkeleton.decorators = [ThemeDecorator(Theme.DARK)];

export const PinkSkeleton = Template.bind({});
PinkSkeleton.args = {
  width: '100%',
  height: 200,
};
PinkSkeleton.decorators = [ThemeDecorator(Theme.PINK)];

export const CircleSkeleton = Template.bind({});
CircleSkeleton.args = {
  border: '50%',
  width: 100,
  height: 100,
};

export const BlockSkeleton = Template.bind({});
BlockSkeleton.args = {
  border: 10,
  width: 500,
  height: 500,
  theme: SkeletonTheme.BLOCKS,
  block: true,
  children: <Skeleton width="40%" height="5%" border={5} />,
};

export const BlockSkeletonDark = Template.bind({});
BlockSkeletonDark.args = {
  border: 10,
  width: 500,
  height: 500,
  theme: SkeletonTheme.BLOCKS,
  block: true,
  children: <Skeleton width="40%" height="5%" border={5} />,
};
BlockSkeletonDark.decorators = [ThemeDecorator(Theme.DARK)];

export const BlockSkeletonPink = Template.bind({});
BlockSkeletonPink.args = {
  border: 10,
  width: 500,
  height: 500,
  theme: SkeletonTheme.BLOCKS,
  block: true,
  children: <Skeleton width="40%" height="5%" border={5} />,
};
BlockSkeletonPink.decorators = [ThemeDecorator(Theme.PINK)];
