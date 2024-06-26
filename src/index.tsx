import 'app/styles/index.scss';
import 'app/styles/fonts/fonts.scss';
import { ThemeProvider } from 'app/provider/ThemeProvider';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from 'app/App';

import './shared/config/i18n/i18n';
import { ErrorBoundary } from 'app/provider/ErrorBoundary';
import { StoreProvider } from 'app/provider/StoreProvider';

render(
    <BrowserRouter>
        <StoreProvider>
            <ThemeProvider>
                <ErrorBoundary>
                    <App />
                </ErrorBoundary>
            </ThemeProvider>
        </StoreProvider>
    </BrowserRouter>,
    document.getElementById('root'),
);
