/**
 *    TagsInfo-story.
 *      - TagsInfo
 */

import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Theme } from 'app/provider/ThemeProvider';
import { TagsInfo } from './TagsInfo';

export default {
  title: 'enterSlice/TagsInfo',
  component: TagsInfo,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof TagsInfo>;

const Template: ComponentStory<typeof TagsInfo> = (args) => <TagsInfo {...args} />;

export const FirstTagsInfo = Template.bind({});
FirstTagsInfo.args = {};
FirstTagsInfo.decorators = [ThemeDecorator(Theme.DARK)];
FirstTagsInfo.decorators = [StoreDecorator({})];

export const SecondTagsInfo = Template.bind({});
SecondTagsInfo.args = {};
SecondTagsInfo.decorators = [ThemeDecorator(Theme.DARK)];
SecondTagsInfo.decorators = [StoreDecorator({})];
