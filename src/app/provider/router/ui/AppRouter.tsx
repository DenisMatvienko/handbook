/**
 * - App router:
 *      Loop the routeConfig which creating by Record in config, getting element and path from config
 *   @returns Routes
 *
 *   @param routeConfig
 *      see more: 'shared/config/routeConfig/routeConfig'
 *
 *   @param routes
 *      Let hide components, when user is not authenticated, because if click on profile button,
 *      when user is not auth will open component of ProfileCard, which shouldn't
 */

import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { memo, Suspense, useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PageLoader } from 'widgets/PageLoader';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';

const AppRouter = () => {
  const isAuth = useSelector(getUserAuthData);

  const routes = useMemo(() => Object.values(routeConfig)
    .filter((route) => {
      if (route.authOnly && !isAuth) {
        return false;
      }
      return true;
    }), [isAuth]);

  return (
      <Routes>
          {routes
            .map(({
              element,
              path,
            }) => (
                <Route
                    key={path}
                    path={path}
                    element={(
                        <Suspense fallback={<PageLoader />}>
                            <div className="page-wrapper">
                                {element}
                            </div>
                        </Suspense>
                    )}
                />
            ))}
      </Routes>
  );
};

export default memo(AppRouter);
