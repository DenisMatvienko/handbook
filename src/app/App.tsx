import './styles/index.scss';
import { classNames } from 'shared/lib/classNames/classNames'
import { useTheme } from 'app/provider/ThemeProvider';
import { AppRouter } from './provider/providers';
import { Navbar } from 'widgets/Navbar';

import { Sidebar } from 'widgets/Sidebar';
import { Suspense } from 'react';
import { useTranslation } from 'react-i18next';

const App = () => {
    // We have global access to theme
    const { theme, toggleTheme } = useTheme();


    return (
        <div className={`app ${classNames('app', {}, [theme])}`}>
            <Suspense fallback="Loading..">
                <Navbar />
                <div className='content-page'>
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

export default App;