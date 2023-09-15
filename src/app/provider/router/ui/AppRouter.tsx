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

import { routeConfig, AppRoutesProps } from 'shared/config/routeConfig/routeConfig';
import { memo, Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PageLoader } from 'widgets/PageLoader';

import { RequireAuth } from 'app/provider/router/ui/RequireAuth';

const AppRouter = () => {
  const renderWithWrapper = useCallback((route: AppRoutesProps) => {
    const element = (
        <Suspense fallback={<PageLoader />}>
            <div className="page-wrapper">
                {route.element}
            </div>
        </Suspense>
    );
    return (
        <Route
            key={route.path}
            path={route.path}
            element={
          route.authOnly
            ? <RequireAuth>{element}</RequireAuth>
            : element
        }
        />
    );
  }, []);

  return (
      <Routes>
          {Object.values(routeConfig).map(renderWithWrapper)}
      </Routes>
  );
};

export default memo(AppRouter);
