import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/provider/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Sidebar, SidebarPosition } from './Sidebar';

export default {
  title: 'widgets/Sidebar',
  component: Sidebar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar {...args} />;

export const SidebarOn = Template.bind({});
SidebarOn.args = {
  startedPosition: SidebarPosition.ON,
};
SidebarOn.decorators = [StoreDecorator({})];

export const SidebarCollapsed = Template.bind({});
SidebarCollapsed.args = {
  startedPosition: SidebarPosition.COLLAPSED,
};
SidebarCollapsed.decorators = [StoreDecorator({})];

export const SidebarOff = Template.bind({});
SidebarOff.args = {
  startedPosition: SidebarPosition.OFF,
};
SidebarOff.decorators = [StoreDecorator({})];
