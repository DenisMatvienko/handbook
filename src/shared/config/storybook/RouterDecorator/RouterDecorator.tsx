import { Story } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import '../../../../app/styles/index.scss';
import { StoreProvider } from 'app/provider/StoreProvider';

export const RouterDecorator = (story: () => Story) => (
    <BrowserRouter>
        {story()}
    </BrowserRouter>
);
