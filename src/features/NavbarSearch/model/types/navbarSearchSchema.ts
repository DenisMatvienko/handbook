import { EntityState } from '@reduxjs/toolkit';
import { Search } from 'entities/Search/model/types/search';

/**
 *      Search types
 *
 *      @param articleList;
 *          - Data for search request;
 */

export interface NavbarSearchSchema extends EntityState<Search> {
    isLoading?: boolean,
    error?: string,
    search: string,

    hasMore?: boolean,
    limit: number,
    page: number,
}
