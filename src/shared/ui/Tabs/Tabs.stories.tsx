/**
 *    Tabs-story.
 */

import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Theme } from 'app/provider/ThemeProvider';
import { TabItem, Tabs } from './Tabs';

export default {
  title: 'shared/Tabs',
  component: Tabs,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;

const tabs = new Array(20).fill(0).map((item, index) => (
  {
    value: `hello ${index + 1}`,
    content: `hello ${index + 1}`,
  }
));

export const FirstTabs = Template.bind({});
FirstTabs.args = {
  tabs,
  value: 'hello',
};
FirstTabs.decorators = [ThemeDecorator(Theme.DARK)];

export const SecondTabs = Template.bind({});
SecondTabs.args = {
  tabs,
  value: 'hello',
};
SecondTabs.decorators = [ThemeDecorator(Theme.LIGHT)];
