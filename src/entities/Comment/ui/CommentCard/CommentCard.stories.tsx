/**
 *    CommentCard-story.
 *      - CommentCard
 */

import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Theme } from 'app/provider/ThemeProvider';
import { CommentCard } from './CommentCard';

export default {
  title: 'entities/CommentCard',
  component: CommentCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args) => <CommentCard {...args} />;

export const FirstCommentCard = Template.bind({});
FirstCommentCard.args = {
  comment: {
    id: '2',
    text: 'Hello',
    user: {
      id: '2',
      username: 'Danzel',
    },
  },
};
FirstCommentCard.decorators = [StoreDecorator({})];
