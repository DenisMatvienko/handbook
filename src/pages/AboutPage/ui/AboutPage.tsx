import React from 'react';
import { useTranslation } from 'react-i18next';

const AboutPage = () => {
    // about.json chunk, means that load separately from other translations
    const { t } = useTranslation('about');

    return (
        <div>
            {t('О сайте')}
        </div>
    );
};

export default AboutPage;