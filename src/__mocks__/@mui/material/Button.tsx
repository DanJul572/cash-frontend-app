import type { PropsWithChildren } from 'react';

interface ButtonProps extends PropsWithChildren {
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
}

const Button = ({ children, onClick, type = 'button', ...props }: ButtonProps) => {
    return (
        <button type={type} onClick={onClick} {...props}>
            {children}
        </button>
    );
};

export default Button;
