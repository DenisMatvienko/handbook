/**
 *    - Main app, using other components and routes
 *
 *    @param useTheme
 *      using theme by this hook, use by ThemeContext. See more on: 'app/provider/ThemeProvider'
 *
 *    @param initAuthData
 *      if when we have logged user, this action init this in local storage. That move doing here
 *      for init user on first start app. See more on: 'entities/User/slice/UserSlice'
 *
 *    @param AppRouter
 *      see more: 'app/provider/router/ui/AppRouter.tsx'
 *
 *    @func useNavigate
 *      If you need to do something after event (ex: after auth you need to redirect into profile)
 */

import { useTheme } from 'app/provider/ThemeProvider';
import { getUserInited, userActions } from 'entities/User';
import { Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { PageLoader } from 'widgets/PageLoader';
import { AppRouter } from './provider/router';

function App() {
  const { theme } = useTheme();
  const dispatch = useAppDispatch();
  const inited = useSelector(getUserInited);

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

  return (
      <div className={`app ${classNames('app', {}, [theme])}`}>
          <Suspense fallback={<PageLoader />}>
              {inited && <AppRouter />}
          </Suspense>
      </div>
  );
}

export default App;
