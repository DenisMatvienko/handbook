import { useDispatch, useSelector } from 'react-redux';
import { Button, ButtonRadius, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { counterActions } from '../model/slice/CounterSlice';

export const Counter = () => {
  const dispatch = useDispatch();
  const counterValue = useSelector(getCounterValue);
  const { t } = useTranslation();

  const increment = () => {
    dispatch(counterActions.increment());
  };

  const decrement = () => {
    dispatch(counterActions.decrement());
  };

  return (
      <div data-testid="counter">
          <h1 data-testid="value-title">{counterValue}</h1>
          <Button
              data-testid="increment-btn"
              theme={ButtonTheme.BACKGROUND_LBLACK_DPURPLE}
              radius={ButtonRadius.SEMI_ELLIPSE}
              onClick={increment}
          >
              {t('incr')}

          </Button>
          <Button
              data-testid="decrement-btn"
              theme={ButtonTheme.BACKGROUND_LBLACK_DPURPLE}
              radius={ButtonRadius.SEMI_ELLIPSE}
              onClick={decrement}
          >
              {t('decr')}
          </Button>
      </div>
  );
};
