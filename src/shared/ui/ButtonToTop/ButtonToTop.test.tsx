/**
 *      Button to top test;
 */

import { Sidebar } from 'widgets/Sidebar/ui/Sidebar/Sidebar';
import { fireEvent, render, screen } from '@testing-library/react';
import { withTranslation } from 'react-i18next';
import {
  renderWithTranslation,
} from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { ButtonToTop } from 'shared/ui/ButtonToTop/ButtonToTop';
import { Theme } from 'app/provider/ThemeProvider';

describe('Button to top', () => {
  test('Button component test when scrollY on 1500px', () => {
    componentRender(<ButtonToTop />);
    fireEvent.scroll(window, { target: { scrollY: 1500 } });
    expect(screen.getByTestId('ButtonToTop'))
      .toBeInTheDocument();
  });
});
