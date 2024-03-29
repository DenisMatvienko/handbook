/**
 *    - React router dom v6
 *      Protected Routes and Authentication with React Router
 *
 *      -When we log out, we get “page not found” on the profile page.
 *       it violates ux (cause at time didn't understand for user, what happen).
 *       React Router v6 lets you get around this/
 *
 *      -If user get protected page, requireAuth will redirect him on main page
 *
 *      @param auth
 *        if user !auth - undefined
 *        Redirect them to the /login page, but save the current location they were
 *        trying to go to when they were redirected. This allows us to send them
 *        along to that page after they login, which is a nicer user experience
 *        than dropping them off on the home page.
 */

import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

export function RequireAuth({ children }: { children: JSX.Element }) {
  const auth = useSelector(getUserAuthData);
  const location = useLocation();

  if (!auth) {
    return <Navigate to={RoutePath.main} state={{ from: location }} replace />;
  }

  return children;
}
