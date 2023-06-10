// UserSchema - interface for state.
// If authData - undef., user wasn't authorized

export interface User {
  id: string;
  username: string;
}

export interface UserSchema {
  authData?: User;
}
