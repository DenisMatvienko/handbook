/**
 *    NavbarSearchList-story.
 *      - NavbarSearchList
 */

import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Theme } from 'app/provider/ThemeProvider';
import { SearchArticleType } from 'entities/Search/model/types/search';
import { NavbarSearchList } from './NavbarSearchList';

export default {
  title: 'entities/NavbarSearchList',
  component: NavbarSearchList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof NavbarSearchList>;

const Template: ComponentStory<typeof NavbarSearchList> = (args) => <NavbarSearchList {...args} />;

const article = {
  subtitle: 'search item subtitle',
  views: 1024,
  createdAt: '12.01.2024',
  type: [SearchArticleType.ALL, SearchArticleType.IT],
  user: {
    id: '1',
    username: 'admin',
  },
};

const articlesMock = new Array(20).fill(0).map((item, index) => (
  {
    id: String(index),
    title: `search item #${index + 1}`,
    ...article,
  }
));

export const FirstNavbarSearchList = Template.bind({});
FirstNavbarSearchList.args = {
  articles: articlesMock,
  isLoading: false,
  isEntered: true,
};
FirstNavbarSearchList.decorators = [ThemeDecorator(Theme.DARK)];
FirstNavbarSearchList.decorators = [StoreDecorator({})];
