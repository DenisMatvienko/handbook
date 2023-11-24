/**
 *    Article.
 *      - Data of entity Article;
 *
 *    @param type
 *      - In each of "blocks" interfaces (code, image, text) extending ArticleBlockBase with field "type".
 *      Despite this, we still explicitly indicate the "type" - field in each interface.
 *      This made for autocomplete.
 */ import { User } from 'entities/User';

export enum ArticleBlockType {
  CODE = 'CODE',
  IMAGE = 'IMAGE',
  TEXT = 'TEXT',
}

export interface ArticleBlockBase {
  id: string,
  type: ArticleBlockType;
}

export interface ArticleCodeBlock extends ArticleBlockBase {
  type: ArticleBlockType.CODE
  code: string,
}

export interface ArticleImageBlock extends ArticleBlockBase {
  type: ArticleBlockType.IMAGE,
  src: string,
  title: string,
}

export interface ArticleTextBlock extends ArticleBlockBase {
  type: ArticleBlockType.TEXT,
  title?: string,
  paragraphs: string[],
}

export enum ArticleType {
  IT = 'IT',
  JS = 'JS',
  ARCHITECTURE = 'Architecture',
}

export type ArticleBlock = ArticleTextBlock | ArticleImageBlock | ArticleCodeBlock;

export enum ArticleView {
  LIST='LIST',
  GRID='GRID',
}

export interface Article {
  id: string,
  title: string,
  subtitle: string,
  img: string,
  views: number,
  createdAt: string,
  user: User;
  type: ArticleType[],
  blocks: ArticleBlock[],
}
