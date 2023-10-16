/**
 *    UserSchema
 *    - interface for state.
 *
 *    If authData - undefined, user wasn't authorized.
 *
 *    @param _inited;
 *      - bool flag, default - false,
 *        after init user data will true.
 *        _ - mean cannot be changed.
 */

export interface User {
  id: string;
  username: string;
  avatar?: string;
}

export interface UserSchema {
  authData?: User;

  _inited: boolean;
}
