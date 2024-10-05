import { User } from 'entities/User';
import { Article } from 'entities/Article';

export enum RecommendationType {
    ALL = 'ALL',
    IT = 'IT',
    JS = 'JS',
    ARCHITECTURE = 'Architecture',
}

export interface Recommendation {
    id: string,
    articleId: string,
    title: string,
    subtitle: string,
    img: string,
    views: number,
    createdAt: string,
    type: RecommendationType[],
    user: User;
    article: Article;
}
