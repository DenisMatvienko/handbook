import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/provider/ThemeProvider';
import { CountrySelect } from './CountrySelect';

export default {
  title: 'entities/CountrySelect',
  component: CountrySelect,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof CountrySelect>;

const Template: ComponentStory<typeof CountrySelect> = (args) => <CountrySelect {...args} />;

export const CountrySelectWithLabel = Template.bind({});
CountrySelectWithLabel.args = {
  label: true,
};
CountrySelectWithLabel.decorators = [ThemeDecorator(Theme.DARK)];

export const CountrySelectEmpty = Template.bind({});
CountrySelectEmpty.args = {};
CountrySelectEmpty.decorators = [ThemeDecorator(Theme.DARK)];
