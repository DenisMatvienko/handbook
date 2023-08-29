import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import 'app/styles/index.scss';
import { ErrorPalette, ErrorPaletteSize, ErrorPaletteTheme } from './ErrorPalette';

export default {
  title: 'shared/ErrorPalette',
  component: ErrorPalette,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ErrorPalette>;

const Template: ComponentStory<typeof ErrorPalette> = (args) => <ErrorPalette {...args} />;

export const ErrorPaletteLightDefaultXL = Template.bind({});
ErrorPaletteLightDefaultXL.args = {
  theme: ErrorPaletteTheme.DEFAULT,
  title: 'ErrorTitle',
  text: 'ErrorText',
  size: ErrorPaletteSize.XL,
};

export const ErrorPaletteDarkLightDefaultRefreshL = Template.bind({});
ErrorPaletteDarkLightDefaultRefreshL.args = {
  theme: ErrorPaletteTheme.DEFAULT,
  title: 'ErrorTitle',
  text: 'ErrorText',
  size: ErrorPaletteSize.L,
  refresh: true,
};
