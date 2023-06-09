// https://react.i18next.com/misc/testing - Sidebar testing with translation
// Sidebar toggle on/off test:
// toggleBtn -get toggle button
// toHaveClass('collapsed') - means that
// sidebar is closed, when 'mods' get class 'collapsed' by the:
// className={classNames(mods: { [classes.collapsed]: collapsed }, when:
// we are click (fireEvent.click(toggleBtn);) on toggleBtn
import { getByTestId, screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { StateSchema } from 'app/provider/StoreProvider';
import { userEvent } from '@storybook/testing-library';
import { Counter } from './Counter';

const initialState = {
  counter: { value: 10 },
};

describe('Counter', () => {
  test('Counter component test', () => {
    componentRender(<Counter />);
    expect(screen.getByTestId('counter')).toBeInTheDocument();
  });

  test('Counter get title test', () => {
    componentRender(<Counter />, {
      initialState,
    });
    expect(screen.getByTestId('value-title')).toHaveTextContent('10');
  });

  test('Counter put on button increment', () => {
    const { getByTestId } = componentRender(<Counter />, {
      initialState,
    });
    const incrementBtn = getByTestId('increment-btn');
    expect(getByTestId('value-title')).toHaveTextContent('10');
    userEvent.click(incrementBtn);
    expect(getByTestId('value-title')).toHaveTextContent('11');
  });

  test('Counter put on button decrement', () => {
    componentRender(<Counter />, {
      initialState,
    });
    userEvent.click(screen.getByTestId('decrement-btn'));
    expect(screen.getByTestId('value-title')).toHaveTextContent('9');
  });
});
