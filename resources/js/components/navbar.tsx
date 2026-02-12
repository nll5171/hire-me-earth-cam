import { Link } from '@inertiajs/react';

export default function Navbar() {
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
                            <Link href="/reviews">Reviews</Link>
                        </li>
                    </ul>
                </div>
                <Link href="/" className="btn text-xl btn-ghost">
                    Please Hire Me
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/reviews">Why You Should Hire Me</Link>
                    </li>
                </ul>
            </div>
            <div className="navbar-end space-x-2">
                <Link className="btn btn-outline btn-secondary" href="/login">
                    Log In
                </Link>
                <Link className="btn btn-primary" href="/register">
                    Register
                </Link>
            </div>
        </div>
    );
}
