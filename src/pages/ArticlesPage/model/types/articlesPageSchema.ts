/**
 *     Normalized schema for comments of article page
 *
 *     @param ids;
 *      see more: https://redux-toolkit.js.org/api/createEntityAdapter
 *         - List of id's for createEntityAdapter, which will took by key id's from object;
 *           Storage of id's key's will an array type with string's
 *
 *      @param EntityState - toolkit interface;
 *          - Extend to interface 2 fields:
 *            1) "ids" - is array with number | string
 *            2) entities - is dictionary object, same as Record
 *            without extends it should be 2 fields(ids, entities) in ArticlePageSchema as:
 *              ids?: Array<string|number>,
 *              entities: Record<any, any>
 *
 *       @param view;
 *          - Is articles view. By grid or list of cards
 *
 *       @param limit;
 *          - Quantity of objects on page;
 *
 *       @param hasMore;
 *          - Shows whether we have downloaded all the articles or whether there are still some undownloaded articles
 */
import { EntityState } from '@reduxjs/toolkit';
import { Article, ArticleView } from 'entities/Article';

export interface ArticlesPageSchema extends EntityState<Article> {
    isLoading?: boolean,
    error?: string,

    view: ArticleView

    page: number,
    limit?: number,
    hasMore: boolean,
}
