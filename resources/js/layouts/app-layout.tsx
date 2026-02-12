import { Head } from '@inertiajs/react';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';

import type { AppLayoutProps } from '@/types';

export default function AppLayout({ title, children }: AppLayoutProps) {
    return (
        <>
            <Head title={title}></Head>
            <Navbar />
            {children}
            <Footer />
        </>
    );
}
