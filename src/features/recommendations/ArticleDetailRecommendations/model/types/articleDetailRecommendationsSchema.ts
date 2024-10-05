import { EntityState } from '@reduxjs/toolkit';
import { Recommendation } from 'entities/Recommendation/model/types/recommendation';

export interface ArticleDetailRecommendationsSchema extends EntityState<Recommendation> {
    isLoading?: boolean,
    error?: string,

    hasMore?: boolean,
    limit: number,
    _inited: boolean,
}
