import { User } from 'entities/User';

export interface SearchableArticle {
    id: string,
    title: string,
    subtitle: string,
    views: number,
    createdAt: string,
    user: User;
}
