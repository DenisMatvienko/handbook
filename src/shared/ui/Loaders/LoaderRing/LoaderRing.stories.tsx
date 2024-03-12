/**
 *    LoaderRing-story.
 *      - LoaderRing
 */

import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Theme } from 'app/provider/ThemeProvider';
import { LoaderRing } from './LoaderRing';

export default {
  title: 'enterSlice/LoaderRing',
  component: LoaderRing,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof LoaderRing>;

const Template: ComponentStory<typeof LoaderRing> = (args) => <LoaderRing {...args} />;

export const FirstLoaderRing = Template.bind({});
FirstLoaderRing.args = {};
FirstLoaderRing.decorators = [ThemeDecorator(Theme.DARK)];
FirstLoaderRing.decorators = [StoreDecorator({})];

export const SecondLoaderRing = Template.bind({});
SecondLoaderRing.args = {};
SecondLoaderRing.decorators = [ThemeDecorator(Theme.DARK)];
SecondLoaderRing.decorators = [StoreDecorator({})];
