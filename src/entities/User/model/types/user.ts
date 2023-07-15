/**
 *  - UserSchema - interface for state.
 *    If authData - undefined, user wasn't authorized
 */

export interface User {
  id: string;
  username: string;
}

export interface UserSchema {
  authData?: User;
}
