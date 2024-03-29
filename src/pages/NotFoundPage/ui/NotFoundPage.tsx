import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page/Page';
import classes from './NotFoundPage.module.scss';

interface NotFoundPageProps {
    className?: string;
}

export const NotFoundPage = ({ className }: NotFoundPageProps) => {
  const { t } = useTranslation();
  return (
      <Page>
          <div className={classNames(
            classes.notFoundPage,
            {},
            [className],
          )}
          >
              {t('Страница отсутствует')}
          </div>
      </Page>
  );
};
