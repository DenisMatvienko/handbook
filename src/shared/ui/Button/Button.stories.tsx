import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/provider/ThemeProvider';
import { Button, ThemeButton } from './Button';

export default {
  title: 'shared/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// Default button (scss class: .Button)
Primary.args = {
  children: 'Text',
};

export const ClearThemeButton = Template.bind({});
// Clear button, without styles (scss class: .clear)
ClearThemeButton.args = {
  children: 'Text',
  theme: ThemeButton.CLEAR,
};

export const OutlineThemeButton = Template.bind({});
// Outline button, with colored border, background - none (scss class: .outline)
OutlineThemeButton.args = {
  children: 'Text',
  theme: ThemeButton.OUTLINE,
};

export const OutlineThemeButtonDark = Template.bind({});
// Same outline button, but just with DARK THEME decorator (scss class: .outline)
OutlineThemeButtonDark.args = {
  children: 'Text',
  theme: ThemeButton.OUTLINE,
};
OutlineThemeButtonDark.decorators = [ThemeDecorator(Theme.DARK)];
