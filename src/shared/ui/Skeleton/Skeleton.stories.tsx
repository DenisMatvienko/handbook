/**
 *    Skeleton-story.
 *      - Skeleton
 */

import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import 'app/styles/index.scss';
import { Skeleton } from './Skeleton';

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

export const CircleSkeleton = Template.bind({});
CircleSkeleton.args = {
  border: '50%',
  width: 100,
  height: 100,
};
