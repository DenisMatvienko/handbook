import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import 'app/styles/index.scss';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import avatar from 'shared/assets/tests/storybookImg/heavy.jpg';
import { ProfileDataItemReadonly } from './ProfileDataItemReadonly';

export default {
  title: 'entities/ProfileDataItemReadonly',
  component: ProfileDataItemReadonly,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProfileDataItemReadonly>;

const Template: ComponentStory<typeof ProfileDataItemReadonly> = (args) => <ProfileDataItemReadonly {...args} />;

export const ProfileDataItemReadonlyOk = Template.bind({});
ProfileDataItemReadonlyOk.args = {
  data: {
    avatar,
  },
};
ProfileDataItemReadonlyOk.decorators = [StoreDecorator({})];
