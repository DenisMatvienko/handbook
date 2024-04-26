import { StateSchema } from 'app/provider/StoreProvider';

export const getNavbarSearchIsOpen = (state: StateSchema) => state.navbar?.searchIsOpen || false;
