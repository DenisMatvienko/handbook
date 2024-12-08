/**
 *    Slider-story.
 *      - Slider
 */

import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Theme } from 'app/provider/ThemeProvider';
import { Slider } from './Slider';

export default {
  title: 'enterSlice/Slider',
  component: Slider,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof Slider>;

const Template: ComponentStory<typeof Slider> = (args) => <Slider {...args} />;

export const FirstSlider = Template.bind({});
FirstSlider.args = {};
FirstSlider.decorators = [ThemeDecorator(Theme.DARK)];
FirstSlider.decorators = [StoreDecorator({})];

export const SecondSlider = Template.bind({});
SecondSlider.args = {};
SecondSlider.decorators = [ThemeDecorator(Theme.DARK)];
SecondSlider.decorators = [StoreDecorator({})];
