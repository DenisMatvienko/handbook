import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import 'app/styles/index.scss';
import { Select } from 'shared/ui/Select/Select';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/provider/ThemeProvider';

export default {
  title: 'shared/Select',
  component: Select,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const SelectPrimary = Template.bind({});
SelectPrimary.args = {
  label: 'Set label pls',
};

export const SelectOptionsDark = Template.bind({});
SelectOptionsDark.args = {
  label: 'Set label pls',
  options: [
    {
      value: 'hello',
      content: 'hello',
    },
    {
      value: 'set',
      content: 'set',
    },
    {
      value: 'label',
      content: 'label',
    },
    {
      value: 'pls',
      content: 'pls',
    },
  ],
};
SelectOptionsDark.decorators = [ThemeDecorator(Theme.DARK)];
