/**
 *    Code-story.
 *      - Code
 */

import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Theme } from 'app/provider/ThemeProvider';
import { Code } from './Code';

export default {
  title: 'shared/Code',
  component: Code,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof Code>;

const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;

export const FirstCode = Template.bind({});
FirstCode.args = {
  text: 'const person = {\n'
    + '  name: \'John\',\n'
    + '  age: 24,\n'
    + '};\n'
    + '\n'
    + '/**'
    + '\n'
    + '*  JavaScript выделяет память под этот объект в куче. \n'
    + '*  Сами же значения являются примитивными, поэтому храниться они будут в стеке.\n'
    + '*/'
    + '\n'
    + 'const hobbies = [\'hiking\', \'reading\'];\n'
    + '\n'
    + '// Массивы – тоже объекты, значит, они сохраняются в куче.\n'
    + '\n'
    + 'let name = \'John\'; // выделяет память для строки\n'
    + 'const age = 24; // выделяет память для числа\n'
    + 'name = \'John Doe\'; // выделяет память для новой строки\n'
    + 'const firstName = name.slice(0,4); // выделяет память для новой строки\n'
    + '\n'
    + '/**'
    + '\n'
    + '*  Примитивные значения по своей природе иммутабельны: вместо того, чтобы изменить начальное значение,\n'
    + '*  JavaScript создает еще одно.\n'
    + '*/',
};
