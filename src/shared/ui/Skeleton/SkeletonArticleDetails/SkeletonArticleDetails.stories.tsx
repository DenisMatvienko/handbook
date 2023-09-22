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
  title: 'enterSlice/SkeletonArticleDetails',
  component: SkeletonArticleDetails,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof SkeletonArticleDetails>;

const Template: ComponentStory<typeof SkeletonArticleDetails> = (args) => <SkeletonArticleDetails {...args} />;

export const FirstSkeletonArticleDetails = Template.bind({});
FirstSkeletonArticleDetails.args = {};
FirstSkeletonArticleDetails.decorators = [ThemeDecorator(Theme.DARK)];
FirstSkeletonArticleDetails.decorators = [StoreDecorator({})];

export const SecondSkeletonArticleDetails = Template.bind({});
SecondSkeletonArticleDetails.args = {};
SecondSkeletonArticleDetails.decorators = [ThemeDecorator(Theme.DARK)];
SecondSkeletonArticleDetails.decorators = [StoreDecorator({})];
