import type { PropsWithChildren } from 'react';

const Card = ({ children, ...props }: PropsWithChildren) => {
    return <section {...props}>{children}</section>;
};

export default Card;
