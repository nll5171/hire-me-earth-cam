import { Link, Form } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';

export default function Reviews({ loggedIn }: { loggedIn: boolean }) {
    return (
        <AppLayout title="Reviews" loggedIn={loggedIn}>
            <p>Reviews go here.</p>
        </AppLayout>
    );
}
