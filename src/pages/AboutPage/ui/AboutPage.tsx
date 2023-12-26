import React from 'react';
import { useTranslation } from 'react-i18next';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Page } from 'widgets/Page/Page';

const AboutPage = () => {
  const { t } = useTranslation('about');

  return (
      <Page>
          <div>
              <Text
                  theme={TextTheme.BACKGROUND_TEXT}
                  text={t('О сайте')}
                  align={TextAlign.LEFT}
              />
          </div>
      </Page>
  );
};

export default AboutPage;
