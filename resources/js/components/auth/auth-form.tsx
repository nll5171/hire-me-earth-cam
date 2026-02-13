import { Form, usePage } from '@inertiajs/react';
import AuthFormField from './auth-form-field';

export default function AuthForm({ isRegister }: { isRegister: boolean }) {
    const { errors } = usePage().props;

    return (
        <Form action={isRegister ? '/register' : '/login'} method="POST">
            <fieldset className="fieldset w-xs rounded-box border border-base-300 bg-base-200 p-4">
                <legend className="fieldset-legend">
                    {isRegister ? 'Register' : 'Login'}
                </legend>

                {isRegister && (
                    <AuthFormField
                        label="Full Name"
                        type="text"
                        name="name"
                        placeholder="e.g. John Doe"
                        required={true}
                        error={errors.name}
                    />
                )}

                <AuthFormField
                    label="Email"
                    type="email"
                    name="email"
                    placeholder="e.g. john@example.com"
                    required={true}
                    error={errors.email}
                />

                <AuthFormField
                    label="Password"
                    type="password"
                    name="password"
                    placeholder="Password"
                    required={true}
                    error={errors.password}
                />

                <button type="submit" className="btn mt-4 btn-neutral">
                    {isRegister ? 'Register' : 'Login'}
                </button>
            </fieldset>
        </Form>
    );
}
