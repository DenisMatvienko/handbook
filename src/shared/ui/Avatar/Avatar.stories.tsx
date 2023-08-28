import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import 'app/styles/index.scss';
import { Avatar, AvatarTheme } from './Avatar';
import LargeWeightImg from './storybookImg/heavy.jpg';

export default {
  title: 'shared/Avatar',
  component: Avatar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const ClearWithLightWeightImg = Template.bind({});
ClearWithLightWeightImg.args = {
  theme: AvatarTheme.CLEAR,
  src: LargeWeightImg,
};
