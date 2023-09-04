/**

 import React from 'react';
 import { ComponentMeta, ComponentStory } from '@storybook/react';
 import 'app/styles/index.scss';
 import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
 import { Theme } from 'app/provider/ThemeProvider';
 import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
 import { Currency } from 'entities/Currency';
 import { Country } from 'entities/Country';
 import ProfilePage from './ProfilePage';

 export default {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },

} as ComponentMeta<typeof ProfilePage>;

 const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage />;

 export const ProfilePageLight = Template.bind({});
 ProfilePageLight.args = {};
 ProfilePageLight.decorators = [StoreDecorator(
 {
    profile: {
      form: {
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
    },
  },
 ),
 ];

 export const ProfilePageDark = Template.bind({});
 ProfilePageDark.args = {};
 ProfilePageDark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];

 */
