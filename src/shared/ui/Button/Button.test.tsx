import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { render, screen } from '@testing-library/react';

describe('Button', () => {
  test('Button component render test', () => {
    render(<Button>TEST</Button>);
    expect(screen.getByText('TEST')).toBeInTheDocument();
  });

  test('Button ClassName Theme - "clear" test', () => {
    render(<Button theme={ThemeButton.CLEAR}>Theme test</Button>);
    expect(screen.getByText('Theme test')).toHaveClass('clear');
    screen.debug();
  });
});
