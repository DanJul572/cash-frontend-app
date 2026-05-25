const Box = ({ children, ...props }: any) => {
    return <div {...props}>{children}</div>;
};

export default Box;
