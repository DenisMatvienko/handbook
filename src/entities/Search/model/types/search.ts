import { User } from 'entities/User';

export interface Search {
    id: string,
    title: string,
    subtitle: string,
    views: number,
    createdAt: string,
    user: User;
}
