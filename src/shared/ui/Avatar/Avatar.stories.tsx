import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import 'app/styles/index.scss';
import {
  Avatar, AvatarRadius, AvatarSize, AvatarTheme,
} from './Avatar';
import LargeWeightImg from './storybookImg/heavy.jpg';
import LightWeightImg from './storybookImg/light.jpg';

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

export const ClearWithLargeWeightImg = Template.bind({});
ClearWithLargeWeightImg.args = {
  theme: AvatarTheme.CLEAR,
  size: AvatarSize.XXL,
  src: LargeWeightImg,
  alt: 'hello',
};

export const ClearWithLightWeightImg = Template.bind({});
ClearWithLightWeightImg.args = {
  theme: AvatarTheme.CLEAR,
  size: AvatarSize.XXL,
  radius: AvatarRadius.CIRCLE,
  src: LightWeightImg,
  alt: 'hello',
};

export const CircleSizeXL = Template.bind({});
CircleSizeXL.args = {
  theme: AvatarTheme.CLEAR,
  size: AvatarSize.XL,
  radius: AvatarRadius.CIRCLE,
  src: LightWeightImg,
  alt: 'hello',
};

export const CircleSizeL = Template.bind({});
CircleSizeL.args = {
  theme: AvatarTheme.CLEAR,
  size: AvatarSize.L,
  radius: AvatarRadius.CIRCLE,
  src: LightWeightImg,
  alt: 'hello',
};

export const CircleSizeM = Template.bind({});
CircleSizeM.args = {
  theme: AvatarTheme.CLEAR,
  size: AvatarSize.M,
  radius: AvatarRadius.CIRCLE,
  src: LargeWeightImg,
  alt: 'hello',
};

export const EllipseSizeXL = Template.bind({});
EllipseSizeXL.args = {
  theme: AvatarTheme.CLEAR,
  size: AvatarSize.XL,
  radius: AvatarRadius.ELLIPSE,
  src: LargeWeightImg,
  alt: 'hello',
};

export const SquareSizeXXL = Template.bind({});
SquareSizeXXL.args = {
  theme: AvatarTheme.CLEAR,
  size: AvatarSize.XXL,
  radius: AvatarRadius.SQUARE,
  src: LightWeightImg,
  alt: 'hello',
};
