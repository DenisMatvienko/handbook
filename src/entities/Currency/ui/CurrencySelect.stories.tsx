import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/provider/ThemeProvider';
import { CurrencySelect } from './CurrencySelect';

export default {
  title: 'entities/CurrencySelect',
  component: CurrencySelect,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof CurrencySelect>;

const Template: ComponentStory<typeof CurrencySelect> = (args) => <CurrencySelect {...args} />;

export const CurrencySelectWithLabel = Template.bind({});
CurrencySelectWithLabel.args = {
  label: true,
};
CurrencySelectWithLabel.decorators = [ThemeDecorator(Theme.DARK)];

export const CurrencySelectEmpty = Template.bind({});
CurrencySelectEmpty.args = {};
CurrencySelectEmpty.decorators = [ThemeDecorator(Theme.DARK)];
