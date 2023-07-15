/**
 *  - Main app, using other components and routes
 *
 *  @param useTheme
 *    using theme by this hook, use by ThemeContext. See more on: 'app/provider/ThemeProvider'
 *
 *  @param initAuthData
 *    if when we have logged user, this action init this in local storage. That move doing here
 *    for init user on first start app. See more on: 'entities/User/slice/UserSlice'
 *
 *   @param AppRouter
 *    see more: 'app/provider/router/ui/AppRouter.tsx'
 */

import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/provider/ThemeProvider';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { Suspense, useEffect } from 'react';
import { PageLoader } from 'widgets/PageLoader';
import { userActions } from 'entities/User';
import { useDispatch } from 'react-redux';
import { AppRouter } from './provider/router';

function App() {
  const { theme } = useTheme();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

  return (
      <div className={`app ${classNames('app', {}, [theme])}`}>
          <Suspense fallback={<PageLoader />}>
              <Navbar />
              <div className="content-page">
                  <Sidebar />
                  <AppRouter />
              </div>
          </Suspense>
      </div>
  );
}

export default App;
