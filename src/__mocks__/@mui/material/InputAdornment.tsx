import type { PropsWithChildren } from 'react';

const InputAdornment = ({ children, ...props }: PropsWithChildren) => {
    return <span {...props}>{children}</span>;
};

export default InputAdornment;
