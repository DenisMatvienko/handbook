/**
 *    NavbarSearchList-story.
 *      - NavbarSearchList
 */

import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Theme } from 'app/provider/ThemeProvider';
import { NavbarSearchList } from './NavbarSearchList';

export default {
  title: 'enterSlice/NavbarSearchList',
  component: NavbarSearchList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof NavbarSearchList>;

const Template: ComponentStory<typeof NavbarSearchList> = (args) => <NavbarSearchList {...args} />;

export const FirstNavbarSearchList = Template.bind({});
FirstNavbarSearchList.args = {};
FirstNavbarSearchList.decorators = [ThemeDecorator(Theme.DARK)];
FirstNavbarSearchList.decorators = [StoreDecorator({})];

export const SecondNavbarSearchList = Template.bind({});
SecondNavbarSearchList.args = {};
SecondNavbarSearchList.decorators = [ThemeDecorator(Theme.DARK)];
SecondNavbarSearchList.decorators = [StoreDecorator({})];
