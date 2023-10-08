/**
 *    Icon-story.
 *      - Story of icons themes
 */

import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import 'app/styles/index.scss';
import DateIcon from 'shared/assets/icons/calendar.svg';
import { Icon, IconTheme } from './Icon';

export default {
  title: 'shared/Icon',
  component: Icon,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const BlockIcon = Template.bind({});
BlockIcon.args = {
  Svg: DateIcon,
  theme: IconTheme.BLOCK_ICON,
};
