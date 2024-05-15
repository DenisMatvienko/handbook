import { User } from 'entities/User';

export enum RecommendationType {
    ALL = 'ALL',
    IT = 'IT',
    JS = 'JS',
    ARCHITECTURE = 'Architecture',
}

export interface Recommendation {
    id: string,
    title: string,
    subtitle: string,
    views: number,
    createdAt: string,
    type: RecommendationType[],
    user: User;
}
