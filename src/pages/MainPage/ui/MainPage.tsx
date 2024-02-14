import React from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page/Page';
import { BugButton } from 'app/provider/ErrorBoundary';
import classes from './MainPage.module.scss';

const MainPage = () => {
  const { t } = useTranslation();

  return (
      <Page>
          <div className={classes.mainPage__wrapper}>
              <h1 className={classes.mainPage__title}>
                  Привет! 👋
              </h1>
              <h1 className={classes.mainPage__title}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                  commodo consequat.
              </h1>
              <p className={classes.mainPage__paragraph}>
                  Как дела Whereas recognition of the inherent dignity
              </p>
              <BugButton />
          </div>
      </Page>
  );
};

export default MainPage;
