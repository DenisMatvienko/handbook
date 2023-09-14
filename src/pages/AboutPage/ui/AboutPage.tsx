import React from 'react';
import { useTranslation } from 'react-i18next';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';

const AboutPage = () => {
  const { t } = useTranslation('about');

  return (
      <div>
          <Text
              theme={TextTheme.BACKGROUND_TEXT}
              text={t('О сайте')}
              align={TextAlign.LEFT}
          />
      </div>
  );
};

export default AboutPage;
