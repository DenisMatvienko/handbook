// /**
//  *    AddCommentForm-story.
//  *      - AddCommentForm
//  */
//
// import React from 'react';
// import { ComponentMeta, ComponentStory } from '@storybook/react';
// import 'app/styles/index.scss';
// import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
// import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
// import { Theme } from 'app/provider/ThemeProvider';
// import { AddCommentForm } from './AddCommentForm';
//
// export default {
//   title: 'features/AddCommentForm',
//   component: AddCommentForm,
//   argTypes: {
//     backgroundColor: { control: 'color' },
//   },
//   args: {
//     to: '/',
//   },
// } as ComponentMeta<typeof AddCommentForm>;
//
// const Template: ComponentStory<typeof AddCommentForm> = (args) => <AddCommentForm {...args} />;
//
// export const FirstAddCommentForm = Template.bind({});
// FirstAddCommentForm.args = {};
// FirstAddCommentForm.decorators = [ThemeDecorator(Theme.DARK)];
//
// export const SecondAddCommentForm = Template.bind({});
// SecondAddCommentForm.args = {};
