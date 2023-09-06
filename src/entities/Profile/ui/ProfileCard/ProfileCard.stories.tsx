import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import 'app/styles/index.scss';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/provider/ThemeProvider';
import { ProfileCard } from './ProfileCard';

export default {
  title: 'entities/ProfileCard',
  component: ProfileCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const ProfileCardOk = Template.bind({});
ProfileCardOk.args = {
  data: {
    profileId: 1,
    firstName: 'den',
    lastName: 'den',
    age: 28,
    currency: Currency.RUB,
    country: Country.Russia,
    city: 'SpB',
    username: 'admin',
    avatar: './',
  },
};
ProfileCardOk.decorators = [StoreDecorator({})];

export const ProfileCardError = Template.bind({});
ProfileCardError.args = {
  error: 'true',
};
ProfileCardError.decorators = [StoreDecorator({})];
ProfileCardError.decorators = [ThemeDecorator(Theme.DARK)];

export const ProfileCardIsLoading = Template.bind({});
ProfileCardIsLoading.args = {
  isLoading: true,
};
ProfileCardIsLoading.decorators = [StoreDecorator({})];
