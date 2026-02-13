export default function AuthFormField({
    label,
    type,
    name,
    placeholder,
    required,
}: {
    label: string;
    type: string;
    name: string;
    placeholder: string;
    required: boolean;
}) {
    return (
        <label className="fieldset">
            <span className="label">{label}</span>
            <input
                type={type}
                className="validator input"
                id={name}
                name={name}
                placeholder={placeholder}
                required={required}
            />
            {required && <p className="validator-hint hidden">Required</p>}
        </label>
    );
}
