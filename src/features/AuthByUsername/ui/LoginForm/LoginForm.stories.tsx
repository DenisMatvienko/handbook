import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import 'app/styles/index.scss';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import LoginForm from './LoginForm';

export default {
  title: 'features/LoginForm',
  component: LoginForm,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const CorrectDataLight = Template.bind({});
CorrectDataLight.args = {};
CorrectDataLight.decorators = [
  StoreDecorator(
    {
      loginForm: {
        username: 'admin',
        password: 'admin',
      },
    },
  ),
];

export const WithErrorLight = Template.bind({});
WithErrorLight.args = {};
WithErrorLight.decorators = [
  StoreDecorator(
    {
      loginForm: {
        username: 'admin',
        password: 'admin',
        error: 'error',
      },
    },
  ),
];

export const LoadingLight = Template.bind({});
LoadingLight.args = {};
LoadingLight.decorators = [
  StoreDecorator(
    {
      loginForm: {
        isLoading: true,
      },
    },
  ),
];
