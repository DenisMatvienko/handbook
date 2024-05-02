/**
 *    NavbarSearchListItem-story.
 *      - NavbarSearchListItem
 */

import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Theme } from 'app/provider/ThemeProvider';
import { SearchArticleType } from 'entities/Search/model/types/search';
import { NavbarSearchListItem } from './NavbarSearchListItem';

export default {
  title: 'entities/NavbarSearchListItem',
  component: NavbarSearchListItem,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof NavbarSearchListItem>;

const Template: ComponentStory<typeof NavbarSearchListItem> = (args) => <NavbarSearchListItem {...args} />;

export const FirstNavbarSearchListItem = Template.bind({});
FirstNavbarSearchListItem.args = {
  article: {
    id: '1',
    title: 'hello',
    subtitle: 'search item subtitle',
    views: 1024,
    createdAt: '12.01.2024',
    type: [SearchArticleType.ALL, SearchArticleType.IT],
    user: {
      id: '1',
      username: 'admin',
    },
  },
};
FirstNavbarSearchListItem.decorators = [StoreDecorator({})];
