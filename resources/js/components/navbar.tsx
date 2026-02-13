import { Link, useForm } from '@inertiajs/react';

export default function Navbar({ loggedIn }: { loggedIn: boolean }) {
    const { delete: destroy } = useForm({});

    function logout(e: Event) {
        e.preventDefault();
        destroy('/logout');
    }

    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost lg:hidden"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {' '}
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />{' '}
                        </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="dropdown-content menu z-1 mt-3 w-52 menu-sm rounded-box bg-base-100 p-2 shadow"
                    >
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/reviews">Functionality Demo</Link>
                        </li>
                        <li>
                            <a href="https://nll5171.github.io/Nick_Lang_CV.pdf">
                                Resume
                            </a>
                        </li>
                        {loggedIn ? (
                            <li>
                                <form onSubmit={logout}>
                                    <button className="font-bold" type="submit">
                                        Logout
                                    </button>
                                </form>
                            </li>
                        ) : (
                            <>
                                <li>
                                    <Link className="font-bold" href="/login">
                                        Login
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="font-bold"
                                        href="/register"
                                    >
                                        Register
                                    </Link>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
                <Link href="/" className="btn text-xl btn-ghost">
                    For Your Consideration
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/reviews">Functionality Demo</Link>
                    </li>
                    <li>
                        <a href="https://nll5171.github.io/Nick_Lang_CV.pdf">
                            Resume
                        </a>
                    </li>
                </ul>
            </div>
            <div className="navbar-end hidden space-x-2 sm:flex">
                {loggedIn ? (
                    <form onSubmit={logout}>
                        <button type="submit" className="btn btn-primary">
                            Logout
                        </button>
                    </form>
                ) : (
                    <>
                        <Link
                            className="btn btn-outline btn-secondary"
                            href="/login"
                        >
                            Login
                        </Link>
                        <Link className="btn btn-primary" href="/register">
                            Register
                        </Link>
                    </>
                )}
            </div>
        </div>
    );
}
