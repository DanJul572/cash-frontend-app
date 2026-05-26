import type { PropsWithChildren } from 'react';

interface AlertProps extends PropsWithChildren {
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
