/**
 *    https://react.i18next.com/misc/testing - Sidebar testing with translation
 *
 *    - "toggle on/off test"
 *       toggleBtn -get toggle button
 */

import { Sidebar } from 'widgets/Sidebar/ui/Sidebar/Sidebar';
import { fireEvent, render, screen } from '@testing-library/react';
import { withTranslation } from 'react-i18next';
import {
  renderWithTranslation,
} from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';

describe('Sidebar', () => {
  test('Sidebar component test', () => {
    componentRender(<Sidebar />);
    expect(screen.getByTestId('sidebar'))
      .toBeInTheDocument();
  });

  test('Sidebar toggle on/off test', () => {
    componentRender(<Sidebar />);
    const toggleBtn = screen.getByTestId('sidebar-toggle');
    expect(screen.getByTestId('sidebar'))
      .toHaveClass('Sidebar off');
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId('sidebar'))
      .toHaveClass('Sidebar collapsed');
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId('sidebar'))
      .toHaveClass('Sidebar on');
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId('sidebar'))
      .toHaveClass('Sidebar off');
  });
});
