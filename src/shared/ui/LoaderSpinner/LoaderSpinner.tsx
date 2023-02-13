import { classNames } from 'shared/lib/classNames/classNames';
import './LoaderSpinner.scss';

interface LoaderSpinnerProps {
    className?: string;
}

export const LoaderSpinner = ({ className }: LoaderSpinnerProps) => (
    <div className={classNames('lds-spinner', {}, [className])}>
        <div className="lds-spinner">
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
        </div>
    </div>
);
