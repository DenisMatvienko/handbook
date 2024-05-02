/**
 *    LoaderRing-story.
 *      - LoaderRing
 */

import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/provider/ThemeProvider';
import { LoaderRing, LoaderRingTheme } from './LoaderRing';

export default {
  title: 'shared/LoaderRing',
  component: LoaderRing,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof LoaderRing>;

const Template: ComponentStory<typeof LoaderRing> = (args) => <LoaderRing {...args} />;

export const DynamicLoaderRing = Template.bind({});
DynamicLoaderRing.args = {
  theme: LoaderRingTheme.DYNAMIC,
};
DynamicLoaderRing.decorators = [ThemeDecorator(Theme.DARK)];

export const StaticLoaderRing = Template.bind({});
StaticLoaderRing.args = {
  theme: LoaderRingTheme.STATIC,
};
StaticLoaderRing.decorators = [ThemeDecorator(Theme.DARK)];
