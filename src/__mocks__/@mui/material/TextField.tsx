interface TextFieldProps {
    label?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    type?: string;
    name?: string;
}

const TextField = ({
    label,
    value,
    onChange,
    placeholder,
    type = 'text',
    name,
    ...props
}: TextFieldProps) => {
    return (
        <div>
            {label && <label>{label}</label>}

            <input
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                name={name}
                {...props}
            />
        </div>
    );
};

export default TextField;
