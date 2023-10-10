/**
 *    Tag-story.
 *      - Tag
 */

import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Theme } from 'app/provider/ThemeProvider';
import { Tag } from './Tag';

export default {
  title: 'enterSlice/Tag',
  component: Tag,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof Tag>;

const Template: ComponentStory<typeof Tag> = (args) => <Tag {...args} />;

export const FirstTag = Template.bind({});
FirstTag.args = {};
FirstTag.decorators = [ThemeDecorator(Theme.DARK)];
FirstTag.decorators = [StoreDecorator({})];

export const SecondTag = Template.bind({});
SecondTag.args = {};
SecondTag.decorators = [ThemeDecorator(Theme.DARK)];
SecondTag.decorators = [StoreDecorator({})];
