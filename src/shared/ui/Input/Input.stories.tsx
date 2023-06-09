import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/provider/ThemeProvider';
import { Input, InputTheme } from './Input';

export default {
  title: 'shared/Input',
  component: Input,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const InputSimple = Template.bind({});
// Input theme: Simple, light
InputSimple.args = {
  theme: InputTheme.SIMPLE,
  placeholderTemplate: 'InputSimple',
};

export const InputSimpleDark = Template.bind({});
// Input theme: Simple, dark
InputSimpleDark.args = {
  theme: InputTheme.SIMPLE,
  placeholderTemplate: 'InputSimple',
};
InputSimpleDark.decorators = [ThemeDecorator(Theme.DARK)];
