import './styles/index.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/provider/ThemeProvider';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { Suspense, useEffect } from 'react';
import { PageLoader } from 'widgets/PageLoader';
import { AppRouter } from './provider/router';

function App() {
  // We have global access to theme
  const { theme } = useTheme();

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
