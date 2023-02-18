// https://react.i18next.com/misc/testing - Sidebar testing with translation
// Sidebar toggle on/off test:
// toggleBtn -get toggle button
// toHaveClass('collapsed') - means that
// sidebar is closed, when 'mods' get class 'collapsed' by the:
// className={classNames(mods: { [classes.collapsed]: collapsed }, when:
// we are click (fireEvent.click(toggleBtn);) on toggleBtn

import { Sidebar } from 'widgets/Sidebar/ui/Sidebar/Sidebar';
import { fireEvent, render, screen } from '@testing-library/react';
import { withTranslation } from 'react-i18next';
import {
  renderWithTranslation,
} from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';

describe('Sidebar', () => {
  test('Sidebar component test', () => {
    renderWithTranslation(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('Sidebar toggle on/off test', () => {
    renderWithTranslation(<Sidebar />);
    const toggleBtn = screen.getByTestId('sidebar-toggle');
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});
