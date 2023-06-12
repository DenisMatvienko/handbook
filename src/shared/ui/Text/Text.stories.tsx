import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/provider/ThemeProvider';
import { Text, TextTheme } from './Text';

export default {
  title: 'shared/Text',
  component: Text,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const TextLight = Template.bind({});
TextLight.args = {
  title: 'Hello, i\'m title',
  text: 'Hello, i\'m text',
};

export const onlyTextLight = Template.bind({});
onlyTextLight.args = {
  text: 'Hello, i\'m text',
};

export const onlyTitleLight = Template.bind({});
onlyTitleLight.args = {
  title: 'Hello, i\'m title',
};

export const TextErrorLight = Template.bind({});
TextErrorLight.args = {
  title: 'Hello, i\'m title',
  text: 'Hello, i\'m text',
  theme: TextTheme.ERROR,
};

export const onlyTextErrorLight = Template.bind({});
onlyTextErrorLight.args = {
  text: 'Hello, i\'m text',
  theme: TextTheme.ERROR,
};

export const onlyTitleErrorLight = Template.bind({});
onlyTitleErrorLight.args = {
  title: 'Hello, i\'m title',
  theme: TextTheme.ERROR,
};

export const TextDark = Template.bind({});
TextDark.args = {
  title: 'Hello, i\'m title',
  text: 'Hello, i\'m text',
};
TextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTextDark = Template.bind({});
onlyTextDark.args = {
  text: 'Hello, i\'m text',
};
onlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTitleDark = Template.bind({});
onlyTitleDark.args = {
  title: 'Hello, i\'m title',
};
onlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const TextErrorDark = Template.bind({});
TextErrorDark.args = {
  title: 'Hello, i\'m title',
  text: 'Hello, i\'m text',
  theme: TextTheme.ERROR,
};
TextErrorDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTextErrorDark = Template.bind({});
onlyTextErrorDark.args = {
  text: 'Hello, i\'m text',
  theme: TextTheme.ERROR,
};
onlyTextErrorDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTitleErrorDark = Template.bind({});
onlyTitleErrorDark.args = {
  title: 'Hello, i\'m title',
  theme: TextTheme.ERROR,
};
onlyTitleErrorDark.decorators = [ThemeDecorator(Theme.DARK)];
