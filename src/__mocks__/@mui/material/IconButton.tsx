import type { PropsWithChildren } from 'react';

interface IconButtonProps extends PropsWithChildren {
    onClick?: () => void;
}

const IconButton = ({ children, onClick, ...props }: IconButtonProps) => {
    return (
        <button type="button" onClick={onClick} {...props}>
            {children}
        </button>
    );
};

export default IconButton;
