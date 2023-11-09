/**
 *    ArticlesPage-component.
 *      - ArticlesPage
 */

import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import React, { memo } from 'react';
import { ArticleList } from 'entities/Article/ui/ArticleList/ArticleList';
import { Article } from 'entities/Article';
import classes from './ArticlesPage.module.scss';

interface ArticlesPageProps {
  className?: string;
}

const article = {
  id: '1',
  title: 'Управление памятью в JavaScript',
  subtitle: 'Управление памятью и принципах работы сборщика мусора, а также о том, как избежать самых распространенных видов утечек памяти.',
  img: 'https://media.proglib.io/wp-uploads/2018/06/jhkhk.jpg',
  views: 1022,
  createdAt: '19.09.2023',
  type: [
    'IT',
    'JS',
    'Architecture',
    'hello',
    'den',
    'will',
    'completely',
    'complete',
    'the',
    'interview',
    'ok',
    'boy',
  ],
  blocks: [
    {
      id: '1',
      type: 'TEXT',
      title: 'Стек и куча',
      paragraphs: [
        'В JavaScript есть два варианта хранения данных: в стеке и в куче; и то, и другое – названия структур данных, которые используются движком для различных целей.',
      ],
    },
    {
      id: '4',
      type: 'CODE',
      code: "\nconst person = {\n  name: 'John',\n  age: 24,\n};\n\n// JavaScript выделяет память под этот объект в куче. \n// Сами же значения являются примитивными, поэтому храниться они будут в стеке.\n\nconst hobbies = ['hiking', 'reading'];\n\n// Массивы – тоже объекты, значит, они сохраняются в куче.\n\nlet name = 'John'; // выделяет память для строки\nconst age = 24; // выделяет память для числа\nname = 'John Doe'; // выделяет память для новой строки\nconst firstName = name.slice(0,4); // выделяет память для новой строки\n\n// Примитивные значения по своей природе иммутабельны: вместо того, чтобы изменить начальное значение,\n// JavaScript создает еще одно.",
    },
    {
      id: '5',
      type: 'TEXT',
      title: 'Ссылки в JavaScript',
      paragraphs: [
        'Все переменные в первую очередь указывают на стек. В случае, если значение не является примитивным, в стеке содержится ссылка на объект из кучи.\n\nВ куче нет какого-либо определенного порядка, в связи с чем ссылка на нужную нам область памяти должна храниться в стеке: в этом смысле объект в куче похож на дом, а ссылка – на его адрес.',
      ],
    },
    {
      id: '2',
      type: 'IMAGE',
      src: 'https://webformyself.com/wp-content/uploads/2018/96/1.jpg',
      title: 'Рис. 1 - Распределение памяти во взаимодействии с Event Loop',
    },
    {
      id: '4',
      type: 'CODE',
      code: "\nconst person = {\n  name: 'John',\n  age: 24,\n};\n\n// JavaScript выделяет память под этот объект в куче. \n// Сами же значения являются примитивными, поэтому храниться они будут в стеке.\n\nconst hobbies = ['hiking', 'reading'];\n\n// Массивы – тоже объекты, значит, они сохраняются в куче.\n\nlet name = 'John'; // выделяет память для строки\nconst age = 24; // выделяет память для числа\nname = 'John Doe'; // выделяет память для новой строки\nconst firstName = name.slice(0,4); // выделяет память для новой строки\n\n// Примитивные значения по своей природе иммутабельны: вместо того, чтобы изменить начальное значение,\n// JavaScript создает еще одно.",
    },
    {
      id: '3',
      type: 'IMAGE',
      src: 'https://webformyself.com/wp-content/uploads/2018/96/1.jpg',
      title: 'Рис. 2 - Распределение памяти во взаимодействии с Event Loop',
    },
    {
      id: '6',
      type: 'TEXT',
      title: 'Ссылки в JavaScript',
      paragraphs: [
        'Все переменные в первую очередь указывают на стек. В случае, если значение не является примитивным, в стеке содержится ссылка на объект из кучи.\n\nВ куче нет какого-либо определенного порядка, в связи с чем ссылка на нужную нам область памяти должна храниться в стеке: в этом смысле объект в куче похож на дом, а ссылка – на его адрес.',
      ],
    },
    {
      id: '4',
      type: 'IMAGE',
      src: 'https://webformyself.com/wp-content/uploads/2018/96/1.jpg',
      title: 'Рис. 3 - Распределение памяти во взаимодействии с Event Loop',
    },
  ],
} as Article;

const ArticlesPage = ({ className }: ArticlesPageProps) => {
  const { t } = useTranslation();

  return (
      <div className={classNames(classes.ArticlesPage, {}, [className])}>
          <ArticleList
              articles={[article]}
          />
      </div>
  );
};

export default memo(ArticlesPage);
