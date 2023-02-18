import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/provider/ThemeProvider';
import { PageLoader } from './PageLoader';

export default {
  title: 'widgets/PageLoader',
  component: PageLoader,
  argTypes: {
    backgroundColor: { control: 'color' },
  },

} as ComponentMeta<typeof PageLoader>;

const Template: ComponentStory<typeof PageLoader> = (args) => <PageLoader {...args} />;

export const LoaderThemeLight = Template.bind({});
LoaderThemeLight.args = {};

export const LoaderThemeDark = Template.bind({});
LoaderThemeDark.args = {};
LoaderThemeDark.decorators = [ThemeDecorator(Theme.DARK)];
