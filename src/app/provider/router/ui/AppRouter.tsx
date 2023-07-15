/**
 * - App router:
 *      Loop the routeConfig which creating by Record in config, getting element and path from config
 *   @returns Routes
 *
 *   @param routeConfig
 *      see more: 'shared/config/routeConfig/routeConfig'
 */

import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PageLoader } from 'widgets/PageLoader';

const AppRouter = () => (
    <Routes>
        {Object.values(routeConfig).map(({ element, path }) => (
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

export default AppRouter;
