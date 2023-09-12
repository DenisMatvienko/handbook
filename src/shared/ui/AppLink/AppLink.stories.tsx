import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/provider/ThemeProvider';
import { Dark } from 'widgets/PageError/ui/PageError.stories';
import { AppLink, AppLinkTheme } from './AppLink';

export default {
  title: 'shared/AppLink',
  component: AppLink,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />;

export const PrimaryTheme = Template.bind({});
PrimaryTheme.args = {
  children: 'Text',
  theme: AppLinkTheme.PRIMARY,
};

export const PrimaryThemeDark = Template.bind({});
PrimaryThemeDark.args = {
  children: 'Text',
  theme: AppLinkTheme.PRIMARY,
};
PrimaryThemeDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SecondaryTheme = Template.bind({});
SecondaryTheme.args = {
  children: 'Text',
  theme: AppLinkTheme.SECONDARY,
};

export const SecondaryThemeDark = Template.bind({});
SecondaryThemeDark.args = {
  children: 'Text',
  theme: AppLinkTheme.SECONDARY,
};
SecondaryThemeDark.decorators = [ThemeDecorator(Theme.DARK)];

export const WhiteTheme = Template.bind({});
WhiteTheme.args = {
  children: 'Text',
  theme: AppLinkTheme.LIGHT,
};

export const WhiteThemeDark = Template.bind({});
WhiteThemeDark.args = {
  children: 'Text',
  theme: AppLinkTheme.LIGHT,
};
WhiteThemeDark.decorators = [ThemeDecorator(Theme.DARK)];
