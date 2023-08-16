import { render, screen } from '@testing-library/react';
import { ErrorPalette, ErrorPaletteSize, ErrorPaletteTheme } from './ErrorPalette';

describe('ErrorPalette', () => {
  test('ErrorPalette component render test', () => {
    render(<ErrorPalette
        theme={ErrorPaletteTheme.DEFAULT}
        text="ErrorText"
        size={ErrorPaletteSize.XXL}
    />);
    expect(screen.getByText('ErrorText'))
      .toBeInTheDocument();
  });

  test('ErrorPalette when refresh - true', () => {
    const { container } = render(<ErrorPalette
        theme={ErrorPaletteTheme.DEFAULT}
        text="ErrorText"
        size={ErrorPaletteSize.XXL}
        refresh
    />);
    expect(container
      .getElementsByClassName('RefreshButton').length)
      .toBe(1);
  });
});
