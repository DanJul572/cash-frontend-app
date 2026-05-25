const Card = ({ children, ...props }: any) => {
    return <section {...props}>{children}</section>;
};

export default Card;
