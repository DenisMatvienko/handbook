import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/provider/ThemeProvider';
import { LoaderSpinner } from './LoaderSpinner';

export default {
  title: 'shared/LoaderSpinner',
  component: LoaderSpinner,
  argTypes: {
    backgroundColor: { control: 'color' },
  },

} as ComponentMeta<typeof LoaderSpinner>;

const Template: ComponentStory<typeof LoaderSpinner> = (args) => <LoaderSpinner {...args} />;

export const LoaderThemeLight = Template.bind({});
LoaderThemeLight.args = {};

export const LoaderThemeDark = Template.bind({});
LoaderThemeDark.args = {};
LoaderThemeDark.decorators = [ThemeDecorator(Theme.DARK)];
