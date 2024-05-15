import { EntityState } from '@reduxjs/toolkit';
import { Recommendation } from 'entities/Recommendation/model/types/recommendation';

/**
 *      ArticlesPageRecommendationsSchema
 */

export interface ArticlesPageRecommendationsSchema extends EntityState<Recommendation> {
    isLoading?: boolean,
    error?: string,
}
