/**
 *    Page-story.
 *      - Page wrapper, add paddings, grid layout, and page width.
 *
 *    @param FullPageBlock;
 *      - Page sets indents (padding) for this block.
 */

import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/provider/ThemeProvider';
import { FullPageBlock } from 'shared/ui/Block/FullPageBlock/FullPageBlock';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Page } from './Page';

export default {
  title: 'widgets/Page',
  component: Page,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof Page>;

const Template: ComponentStory<typeof Page> = (args) => <Page {...args} />;

export const FirstPage = Template.bind({});
FirstPage.args = {
  children: <FullPageBlock>hello</FullPageBlock>,
};
FirstPage.decorators = [StoreDecorator({})];
