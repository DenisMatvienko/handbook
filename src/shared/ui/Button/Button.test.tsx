import { render, screen } from '@testing-library/react';
import { Button, ButtonTheme } from './Button';

describe('Button', () => {
  test('Button component render test', () => {
    render(<Button>TEST</Button>);
    expect(screen.getByText('TEST'))
      .toBeInTheDocument();
  });

  test('Button ClassName Theme - "clear" test', () => {
    render(<Button theme={ButtonTheme.CLEAR}>Theme test</Button>);
    expect(screen.getByText('Theme test'))
      .toHaveClass('button button_clear button_size-none button_radius-square');
    screen.debug();
  });
});
