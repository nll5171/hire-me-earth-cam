import { Head } from '@inertiajs/react';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';

import type { AppLayoutProps } from '@/types';

export default function AppLayout({
    title,
    children,
    loggedIn,
}: AppLayoutProps) {
    return (
        <div className="flex min-h-screen flex-col">
            <Head title={title}></Head>
            <Navbar loggedIn={loggedIn} />
            <main className="grow">{children}</main>
            <Footer />
        </div>
    );
}
