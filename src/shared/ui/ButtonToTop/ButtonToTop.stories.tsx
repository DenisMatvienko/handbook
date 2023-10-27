/**
 *    ButtonToTop-story.
 *      - ButtonToTop
 */

import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Theme } from 'app/provider/ThemeProvider';
import { ButtonToTop } from './ButtonToTop';

export default {
  title: 'shared/ButtonToTop',
  component: ButtonToTop,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof ButtonToTop>;

const Template: ComponentStory<typeof ButtonToTop> = (args) => <ButtonToTop {...args} />;

export const FirstButtonToTop = Template.bind({});
FirstButtonToTop.args = {};
FirstButtonToTop.decorators = [ThemeDecorator(Theme.DARK)];
FirstButtonToTop.decorators = [StoreDecorator({})];

export const SecondButtonToTop = Template.bind({});
SecondButtonToTop.args = {};
SecondButtonToTop.decorators = [ThemeDecorator(Theme.DARK)];
SecondButtonToTop.decorators = [StoreDecorator({})];
