/**
 *     Schema for comments of article details
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
 *            without extends it should be 2 fields(ids, entities) in ArticleDetailsCommentsSchema as:
 *              ids?: Array<string|number>,
 *              entities: Record<any, any>
 */
import { EntityState } from '@reduxjs/toolkit';
import { Comment } from 'entities/Comment/model/types/comment';

export interface ArticleDetailsCommentsSchema extends EntityState<Comment> {
    isLoading?: boolean,
    error?: string,

    limit: number,
    hasMore?: boolean,
    page: number,
}
