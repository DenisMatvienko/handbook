import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import 'app/styles/index.scss';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { NotFoundPage } from './NotFoundPage';

export default {
  title: 'pages/NotFoundPage',
  component: NotFoundPage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },

} as ComponentMeta<typeof NotFoundPage>;

const Template: ComponentStory<typeof NotFoundPage> = (args) => <NotFoundPage />;

export const NotFoundPageLight = Template.bind({});
NotFoundPageLight.args = {};
NotFoundPageLight.decorators = [StoreDecorator({})];
