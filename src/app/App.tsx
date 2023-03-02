import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/provider/ThemeProvider';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { Suspense, useEffect, useState } from 'react';
import { PageLoader } from 'widgets/PageLoader';
import { Modal } from 'shared/ui/Modal/Modal';
import { AppRouter } from './provider/router';

function App() {
  // We have global access to theme
  const { theme } = useTheme();

  const [isOpen, setIsOpen] = useState(false);

  return (
      <div className={`app ${classNames('app', {}, [theme])}`}>
          <Suspense fallback={<PageLoader />}>
              <Navbar />
              {/* <button onClick={() => setIsOpen(true)} type="button">123</button> */}
              <div className="content-page">
                  <Sidebar />
                  <AppRouter />
              </div>
          </Suspense>
      </div>
  );
}

export default App;
