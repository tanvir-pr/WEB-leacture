import { Head, Link, usePage } from '@inertiajs/react';
import type { ReactNode } from 'react';

type AuthUser = {
    id: number;
    name: string;
    email: string;
    role?: string;
} | null;

type SharedProps = {
    auth: { user: AuthUser };
    creators: { name: string; neptun: string }[];
};

export default function SiteLayout({
    title,
    children,
}: {
    title: string;
    children: ReactNode;
}) {
    const { auth, creators } = usePage().props as unknown as SharedProps;
    const role = auth.user?.role ?? null;
    const isRegistered = Boolean(auth.user);
    const isAdmin = role === 'admin';

    const linkClass =
        'rounded-md px-3 py-2 text-sm font-medium text-amber-50/90 transition hover:bg-white/10 hover:text-white';

    return (
        <>
            <Head title={title} />
            <div className="site-shell flex min-h-screen flex-col">
                <header className="site-header border-b border-white/10 bg-[#1a120b]/90 backdrop-blur">
                    <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-4">
                        <Link href="/" className="font-display text-xl tracking-wide text-amber-100">
                            Pizza Palace
                        </Link>
                        <nav className="flex flex-wrap items-center gap-1">
                            <Link href="/" className={linkClass}>
                                Mainpage
                            </Link>
                            <Link href="/database" className={linkClass}>
                                Database
                            </Link>
                            <Link href="/contact" className={linkClass}>
                                Contact
                            </Link>
                            <Link href="/graph" className={linkClass}>
                                Graph
                            </Link>
                            {isRegistered && (
                                <Link href="/messages" className={linkClass}>
                                    Messages
                                </Link>
                            )}
                            {isAdmin && (
                                <Link href="/crud/" className={linkClass}>
                                    CRUD
                                </Link>
                            )}
                            {!auth.user ? (
                                <>
                                    <Link href="/login" className={linkClass}>
                                        Login
                                    </Link>
                                    <Link
                                        href="/register"
                                        className="rounded-md bg-amber-500 px-3 py-2 text-sm font-semibold text-[#1a120b] hover:bg-amber-400"
                                    >
                                        Register
                                    </Link>
                                </>
                            ) : (
                                <Link
                                    href="/logout"
                                    method="post"
                                    as="button"
                                    className={linkClass}
                                >
                                    Logout
                                </Link>
                            )}
                        </nav>
                    </div>
                </header>

                <main className="flex-1">{children}</main>

                <footer className="border-t border-white/10 bg-[#120c08] px-4 py-6 text-center text-sm text-amber-100/70">
                    <p className="font-medium text-amber-100/90">Creators</p>
                    <ul className="mt-2 space-y-1">
                        {(creators ?? []).map((c) => (
                            <li key={c.neptun}>
                                {c.name} — Neptun: {c.neptun}
                            </li>
                        ))}
                    </ul>
                    <p className="mt-3 text-xs text-amber-100/40">
                        Theme: custom responsive Pizza Palace layout (HTML5UP-inspired)
                    </p>
                </footer>
            </div>
        </>
    );
}
