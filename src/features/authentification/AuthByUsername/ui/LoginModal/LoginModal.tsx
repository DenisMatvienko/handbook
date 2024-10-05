import { Modal, ModalTheme } from 'shared/ui/Modal/Modal';
import { PageLoader } from 'widgets/PageLoader';
import { memo, Suspense } from 'react';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';

interface LoginModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

export const LoginModal = memo(({ className, isOpen, onClose }: LoginModalProps) => (
    <Modal
        isOpen={isOpen}
        onClose={onClose}
        modalTheme={ModalTheme.DEFAULT}
        lazy
    >
        <Suspense fallback={<PageLoader />}>
            <LoginFormAsync onSuccess={onClose} />
        </Suspense>
    </Modal>
));
