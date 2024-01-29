// /**
//  *    NavbarSearch-story.
//  *      - NavbarSearch
//  */
//
// import React from 'react';
// import {ComponentMeta, ComponentStory} from '@storybook/react';
// import 'app/styles/index.scss';
// import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
// import {StoreDecorator} from 'shared/config/storybook/StoreDecorator/StoreDecorator';
// import {Theme} from 'app/provider/ThemeProvider';
// import {NavbarSearch} from './NavbarSearch';
//
// export default {
//     title: 'enterSlice/NavbarSearch',
//     component: NavbarSearch,
//     argTypes: {
//         backgroundColor: {control: 'color'},
//     },
//     args: {
//         to: '/',
//     },
// } as ComponentMeta<typeof NavbarSearch>;
//
// const Template: ComponentStory<typeof NavbarSearch> = (args) => <NavbarSearch {...args} />;
//
// export const FirstNavbarSearch = Template.bind({});
// FirstNavbarSearch.args = {};
// FirstNavbarSearch.decorators = [ThemeDecorator(Theme.DARK)];
// FirstNavbarSearch.decorators = [StoreDecorator({})];
//
// export const SecondNavbarSearch = Template.bind({});
// SecondNavbarSearch.args = {};
// SecondNavbarSearch.decorators = [ThemeDecorator(Theme.DARK)];
// SecondNavbarSearch.decorators = [StoreDecorator({})];
