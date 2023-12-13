import React from 'react';
import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/provider/ErrorBoundary';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Page } from 'shared/ui/Page/Page';

const MainPage = () => {
  const { t } = useTranslation();

  return (
      <Page>
          <BugButton />
          <Text
              title={t('Edit')}
              theme={TextTheme.BACKGROUND_TEXT}
              align={TextAlign.LEFT}
          />
          <Text
              theme={TextTheme.BACKGROUND_TEXT}
              text={t('Главная страница')}
              align={TextAlign.LEFT}
          />
      </Page>
  );
};

export default MainPage;
