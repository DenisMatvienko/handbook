import { classNames } from 'shared/lib/classNames/classNames';
import { LoaderSpinner } from 'shared/ui/Loaders/LoaderSpinner/LoaderSpinner';
import classes from './PageLoader.module.scss';

interface PageLoaderProps {
    className?: string;
}

export const PageLoader = ({ className }: PageLoaderProps) => (
    <div className={classNames(classes.PageLoader, {}, [className])}>
        <LoaderSpinner />
    </div>
);
