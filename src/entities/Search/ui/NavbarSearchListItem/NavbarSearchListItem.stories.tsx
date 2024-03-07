/**
 *    NavbarSearchListItem-story.
 *      - NavbarSearchListItem
 */

import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Theme } from 'app/provider/ThemeProvider';
import { NavbarSearchListItem } from './NavbarSearchListItem';

export default {
  title: 'enterSlice/NavbarSearchListItem',
  component: NavbarSearchListItem,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof NavbarSearchListItem>;

const Template: ComponentStory<typeof NavbarSearchListItem> = (args) => <NavbarSearchListItem {...args} />;

export const FirstNavbarSearchListItem = Template.bind({});
FirstNavbarSearchListItem.args = {};
FirstNavbarSearchListItem.decorators = [ThemeDecorator(Theme.DARK)];
FirstNavbarSearchListItem.decorators = [StoreDecorator({})];

export const SecondNavbarSearchListItem = Template.bind({});
SecondNavbarSearchListItem.args = {};
SecondNavbarSearchListItem.decorators = [ThemeDecorator(Theme.DARK)];
SecondNavbarSearchListItem.decorators = [StoreDecorator({})];
