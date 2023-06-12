import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/provider/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Navbar } from './Navbar';

export default {
  title: 'widgets/Navbar',
  component: Navbar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const Light = Template.bind({});
// Default navbar theme - light
Light.args = {};
Light.decorators = [StoreDecorator(
  {
    loginForm: {
      username: 'admin',
    },
  },
)];

export const Dark = Template.bind({});
// Navbar theme - dark
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
Dark.decorators = [StoreDecorator(
  {
    loginForm: {
      username: 'admin',
    },
  },
)];

export const AuthDark = Template.bind({});
// Navbar theme - dark, authenticated
AuthDark.args = {};
AuthDark.decorators = [ThemeDecorator(Theme.DARK)];
AuthDark.decorators = [StoreDecorator(
  {
    user: {
      authData: {},
    },
  },
)];
