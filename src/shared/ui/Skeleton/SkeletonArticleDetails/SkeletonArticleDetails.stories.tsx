/**
 *    SkeletonArticleDetails-story.
 *      - SkeletonArticleDetails
 */

import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Theme } from 'app/provider/ThemeProvider';
import { SkeletonArticleDetails } from './SkeletonArticleDetails';

export default {
  title: 'shared/SkeletonArticleDetails',
  component: SkeletonArticleDetails,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof SkeletonArticleDetails>;

const Template: ComponentStory<typeof SkeletonArticleDetails> = (args) => <SkeletonArticleDetails {...args} />;

export const LightSkeletonArticleDetails = Template.bind({});
LightSkeletonArticleDetails.args = {};

export const DarkSkeletonArticleDetails = Template.bind({});
DarkSkeletonArticleDetails.args = {};
DarkSkeletonArticleDetails.decorators = [ThemeDecorator(Theme.DARK)];

export const PinkSkeletonArticleDetails = Template.bind({});
PinkSkeletonArticleDetails.args = {};
PinkSkeletonArticleDetails.decorators = [ThemeDecorator(Theme.PINK)];
