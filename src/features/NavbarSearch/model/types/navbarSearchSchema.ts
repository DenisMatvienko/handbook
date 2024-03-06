import { Article } from 'entities/Article';
import { EntityState } from '@reduxjs/toolkit';
import { SearchableArticle } from 'features/NavbarSearch/model/types/searchableArticle';

/**
 *      Search types
 *
 *      @param articleList;
 *          - Data for search request;
 */

export interface NavbarSearchSchema extends EntityState<SearchableArticle> {
    isLoading?: boolean,
    error?: string,
    search: string,
}
