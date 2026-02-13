import type { ReactNode } from 'react';

export type AppLayoutProps = {
    children: ReactNode;
    title: string;
    loggedIn: boolean;
};

export type AuthLayoutProps = {
    children?: ReactNode;
    name?: string;
    title?: string;
    description?: string;
};
