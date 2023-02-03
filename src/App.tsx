import React, { Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './styles/index.scss'
import { AboutPageAsync } from '../src/pages/AboutPage/AboutPage.async'
import { MainPageAsync } from './pages/MainPage/MainPage.async';
import { useTheme } from './theme/useTheme';
import { classNames } from './helpers/classNames/classNames'

const App = () => {


    // We have global access to theme
    const { theme, toggleTheme } = useTheme();


    return (
        // className={'app ${theme}'}
        <div className={`app ${classNames('app', {}, [theme])}`}>
            <button onClick={toggleTheme}>Change theme</button>
            <Link className='' to={'/'}>Главная</Link>
            <Link className='' to={'/about'}>О сайте</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPageAsync />} />
                    <Route path={'/'} element={<MainPageAsync />} />
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;