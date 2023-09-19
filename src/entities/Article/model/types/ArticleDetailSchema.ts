/**
 *    ArticleDetailSchema
 *      - Main schema for article details
 */
import { Article } from './article';

export interface ArticleDetailSchema {
  isLoading: boolean;
  error?: string;
  data?: Article
}
