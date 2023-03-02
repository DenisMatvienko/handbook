import '../../../../app/styles/index.scss';
import { Story } from '@storybook/react';
import { Theme, ThemeProvider } from 'app/provider/ThemeProvider';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => (
  // Out of that function can define which theme can use in addDecorator in preview.js!!!!
  // for storybook
    <ThemeProvider
        initialTheme={theme}
    >
        <div className={`app ${theme}`}>
            <StoryComponent />
        </div>
    </ThemeProvider>
);
