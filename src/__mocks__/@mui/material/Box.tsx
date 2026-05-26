import type { PropsWithChildren } from 'react';

const Box = ({ children, ...props }: PropsWithChildren) => {
    return <div {...props}>{children}</div>;
};

export default Box;
