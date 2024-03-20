/**
 *    Tabs-story.
 *      - Tabs
 */

import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Theme } from 'app/provider/ThemeProvider';
import { Tabs } from './Tabs';

export default {
  title: 'enterSlice/Tabs',
  component: Tabs,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;

export const FirstTabs = Template.bind({});
FirstTabs.args = {};
FirstTabs.decorators = [ThemeDecorator(Theme.DARK)];
FirstTabs.decorators = [StoreDecorator({})];

export const SecondTabs = Template.bind({});
SecondTabs.args = {};
SecondTabs.decorators = [ThemeDecorator(Theme.DARK)];
SecondTabs.decorators = [StoreDecorator({})];
