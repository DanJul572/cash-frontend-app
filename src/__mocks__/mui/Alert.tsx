import type { ReactNode } from 'react';

interface AlertProps {
    children?: ReactNode;
    severity?: string;
}

const Alert = ({ children, severity, ...props }: AlertProps) => {
    return (
        <div role="alert" data-severity={severity} {...props}>
            {children}
        </div>
    );
};

export default Alert;
