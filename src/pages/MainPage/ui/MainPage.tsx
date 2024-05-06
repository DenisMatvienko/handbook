import React from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page/Page';
import { BugButton } from 'app/provider/ErrorBoundary';
import classes from './MainPage.module.scss';

const MainPage = () => {
  const { t } = useTranslation('main');

  return (
      <Page>
          <div className={classes.mainPage__wrapper}>
              <h1 className={classes.mainPage__title}>
                  {t('Hi')}
              </h1>
              <h1 className={classes.mainPage__title}>
                  {t('Title')}
              </h1>
              <span className={classes.mainPage__paragraph}>
                  {t('Subtitle')}
              </span>
              <BugButton />
          </div>
      </Page>
  );
};

export default MainPage;
