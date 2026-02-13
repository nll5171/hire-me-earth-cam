export default function AuthFormField({
    label,
    type,
    name,
    placeholder,
    required,
    error = '',
}: {
    label: string;
    type: string;
    name: string;
    placeholder: string;
    required: boolean;
    error?: string;
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
            {error && (
                <p className="text-xs text-error first-of-type:mt-2">{error}</p>
            )}
        </label>
    );
}
