/**
 *    Page-story.
 *      - Page
 */

import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Theme } from 'app/provider/ThemeProvider';
import { Page } from './Page';

export default {
  title: 'enterSlice/Page',
  component: Page,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof Page>;

const Template: ComponentStory<typeof Page> = (args) => <Page {...args} />;

export const FirstPage = Template.bind({});
FirstPage.args = {};
FirstPage.decorators = [ThemeDecorator(Theme.DARK)];
FirstPage.decorators = [StoreDecorator({})];

export const SecondPage = Template.bind({});
SecondPage.args = {};
SecondPage.decorators = [ThemeDecorator(Theme.DARK)];
SecondPage.decorators = [StoreDecorator({})];
