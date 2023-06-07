import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/provider/ThemeProvider';
import BarsIcon from 'shared/assets/icons/bars-solid.svg';
import {
  Button, ButtonRadius, ButtonSize, ButtonTheme,
} from './Button';

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
  children: <BarsIcon />,
  theme: ButtonTheme.CLEAR,
  square: true,
  size: ButtonSize.XXL,
  radius: ButtonRadius.CIRCLE,
};

export const OutlineThemeButton = Template.bind({});
// Outline button, with colored border, background - none (scss class: .outline)
OutlineThemeButton.args = {
  children: 'Text',
  theme: ButtonTheme.OUTLINE,
};

export const OutlineThemeButtonDark = Template.bind({});
// Same outline button, but just with DARK THEME decorator (scss class: .outline)
OutlineThemeButtonDark.args = {
  children: 'Text',
  theme: ButtonTheme.OUTLINE,
};
OutlineThemeButtonDark.decorators = [ThemeDecorator(Theme.DARK)];

export const BackgroundThemeButton = Template.bind({});
// Background theme test
BackgroundThemeButton.args = {
  children: <BarsIcon />,
  square: true,
  size: ButtonSize.XL,
  radius: ButtonRadius.SUPER_ELLIPSE,
  theme: ButtonTheme.BACKGROUND,
};

export const BackgroundThemeButtonDark = Template.bind({});
// Background theme test - main theme dark
BackgroundThemeButtonDark.args = {
  children: <BarsIcon />,
  square: true,
  size: ButtonSize.XL,
  radius: ButtonRadius.SUPER_ELLIPSE,
  theme: ButtonTheme.BACKGROUND,
};
BackgroundThemeButtonDark.decorators = [ThemeDecorator(Theme.DARK)];

export const InvertedBackgroundThemeButton = Template.bind({});
// Inverted Background theme test
InvertedBackgroundThemeButton.args = {
  children: <BarsIcon />,
  square: true,
  size: ButtonSize.XL,
  radius: ButtonRadius.SUPER_ELLIPSE,
  theme: ButtonTheme.BACKGROUND_INVERTED,
};

export const InvertedBackgroundThemeButtonDark = Template.bind({});
// Inverted Background theme test - main theme dark
InvertedBackgroundThemeButtonDark.args = {
  children: <BarsIcon />,
  square: true,
  size: ButtonSize.XL,
  radius: ButtonRadius.SUPER_ELLIPSE,
  theme: ButtonTheme.BACKGROUND_INVERTED,
};
InvertedBackgroundThemeButtonDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SizeMSuperEllipseSquareButton = Template.bind({});
SizeMSuperEllipseSquareButton.args = {
  children: <BarsIcon />,
  square: true,
  size: ButtonSize.M,
  radius: ButtonRadius.SUPER_ELLIPSE,
  theme: ButtonTheme.BACKGROUND,
};

export const SizeLCircleSquareButton = Template.bind({});
SizeLCircleSquareButton.args = {
  children: <BarsIcon />,
  square: true,
  size: ButtonSize.L,
  radius: ButtonRadius.CIRCLE,
  theme: ButtonTheme.BACKGROUND,
};

export const SizeXLSemiEllipseButton = Template.bind({});
// Button shouldn't use "square = true", because this is not square, this rectangle
SizeXLSemiEllipseButton.args = {
  children: 'Size XL button by Semi-Ellipse radius',
  size: ButtonSize.XL,
  radius: ButtonRadius.SEMI_ELLIPSE,
  theme: ButtonTheme.BACKGROUND,
};

export const SizeXXLEllipseButton = Template.bind({});
// Button shouldn't use "square = true", because this is not square, this rectangle
SizeXXLEllipseButton.args = {
  children: 'Size XXL button by Ellipse radius',
  size: ButtonSize.XXL,
  radius: ButtonRadius.ELLIPSE,
  theme: ButtonTheme.BACKGROUND,
};
