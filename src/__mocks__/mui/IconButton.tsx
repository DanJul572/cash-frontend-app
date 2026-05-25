const IconButton = ({ children, onClick, ...props }: any) => {
    return (
        <button type="button" onClick={onClick} {...props}>
            {children}
        </button>
    );
};

export default IconButton;
