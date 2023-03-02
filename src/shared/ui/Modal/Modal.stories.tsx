import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/provider/ThemeProvider';
import { Modal } from './Modal';

export default {
  title: 'widgets/Modal',
  component: Modal,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const ModalLight = Template.bind({});
ModalLight.args = {
  isOpen: true,
  children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem error ipsam non officiis optio pariatur possimus sequi veniam! Architecto at ducimus ea explicabo harum quis quos sed, sint totam voluptates?',
};

export const ModalDark = Template.bind({});
ModalDark.args = {
  isOpen: true,
  children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem error ipsam non officiis optio pariatur possimus sequi veniam! Architecto at ducimus ea explicabo harum quis quos sed, sint totam voluptates?',
};
ModalDark.decorators = [ThemeDecorator(Theme.DARK)];
