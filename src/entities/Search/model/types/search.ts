import { User } from 'entities/User';

export enum SearchArticleType {
    ALL = 'ALL',
    IT = 'IT',
    JS = 'JS',
    ARCHITECTURE = 'Architecture',
}

export interface Search {
    id: string,
    title: string,
    subtitle: string,
    views: number,
    createdAt: string,
    type: SearchArticleType[],
    user: User;
}
