import {
  Button, ButtonRadius, ButtonSize, ButtonTheme,
} from 'shared/ui/Button/Button';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

interface BugButtonProps {
  className?: string;
}

// Component for testing functionality with errors (as ErrorBoundary)
export const BugButton = ({ className }: BugButtonProps) => {
  const [t] = useTranslation();
  const [error, setError] = useState(false);
  const addBug = () => setError(true);

  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);

  return (
      <Button
          onClick={addBug}
          theme={ButtonTheme.BACKGROUND_LBLACK_DPURPLE}
          radius={ButtonRadius.SEMI_ELLIPSE}
      >
          {t('Нажмите для ошибки')}
      </Button>
  );
};
