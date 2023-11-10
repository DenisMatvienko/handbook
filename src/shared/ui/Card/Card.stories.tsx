/**
 *    Card-story.
 *      - Card
 */

import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Theme } from 'app/provider/ThemeProvider';
import { Card } from './Card';

export default {
  title: 'enterSlice/Card',
  component: Card,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const FirstCard = Template.bind({});
FirstCard.args = {};
FirstCard.decorators = [ThemeDecorator(Theme.DARK)];
FirstCard.decorators = [StoreDecorator({})];

export const SecondCard = Template.bind({});
SecondCard.args = {};
SecondCard.decorators = [ThemeDecorator(Theme.DARK)];
SecondCard.decorators = [StoreDecorator({})];
