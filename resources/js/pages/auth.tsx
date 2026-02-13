import { Link } from '@inertiajs/react';
import AuthForm from '@/components/auth/auth-form';
import AppLayout from '@/layouts/app-layout';

export default function Auth({
    isRegister,
    loggedIn,
}: {
    isRegister: boolean;
    loggedIn: boolean;
}) {
    return (
        <AppLayout
            title={isRegister ? 'Register' : 'Login'}
            loggedIn={loggedIn}
        >
            <div className="mx-4 flex h-full max-w-7xl flex-col items-center space-y-4 pt-10 xl:m-auto">
                <h1 className="text-center text-2xl font-bold">
                    {isRegister ? 'Happy to have you' : 'Welcome back'}
                </h1>
                <AuthForm isRegister={isRegister} />
                <p className="text-sm">
                    {isRegister ? (
                        <>
                            Already have an account?{' '}
                            <Link
                                href="/login"
                                className="link text-primary link-hover"
                            >
                                Log in
                            </Link>
                            .
                        </>
                    ) : (
                        <>
                            Don't have an account?{' '}
                            <Link
                                href="/register"
                                className="link text-primary link-hover"
                            >
                                Register
                            </Link>
                            .
                        </>
                    )}
                </p>
            </div>
        </AppLayout>
    );
}
