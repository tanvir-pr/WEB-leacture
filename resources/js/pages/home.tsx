import { Link } from '@inertiajs/react';
import SiteLayout from '@/layouts/site-layout';

export default function Home() {
    return (
        <SiteLayout title="Mainpage">
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#c2410c_0%,_#1a120b_55%,_#0c0805_100%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(251,191,36,0.12),transparent_45%)]" />
                <div className="relative mx-auto flex min-h-[70vh] max-w-6xl flex-col justify-center px-4 py-16 text-amber-50">
                    <p className="mb-3 text-sm uppercase tracking-[0.25em] text-amber-300/80">
                        Web Programming II — Laravel Homework
                    </p>
                    <h1 className="font-display max-w-3xl text-4xl leading-tight sm:text-6xl">
                        Pizza Palace
                    </h1>
                    <p className="mt-5 max-w-2xl text-lg text-amber-100/80">
                        Explore our MySQL pizza catalog — categories, pizzas, and orders —
                        with secure login roles for visitors, registered users, and admins.
                    </p>
                    <div className="mt-8 flex flex-wrap gap-3">
                        <Link
                            href="/database"
                            className="rounded-md bg-amber-500 px-5 py-3 text-sm font-semibold text-[#1a120b] hover:bg-amber-400"
                        >
                            Browse Database
                        </Link>
                        <Link
                            href="/contact"
                            className="rounded-md border border-amber-200/30 px-5 py-3 text-sm font-semibold text-amber-50 hover:bg-white/10"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            </section>

            <section className="bg-[#24180f] px-4 py-14 text-amber-50">
                <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
                    {[
                        {
                            title: 'Database',
                            text: 'Three tables from the Pizza homework source: categories, pizzas, orders.',
                        },
                        {
                            title: 'Roles',
                            text: 'Guest, registered visitor, and admin menus — as required by the task.',
                        },
                        {
                            title: 'Collaboration',
                            text: 'Steps 1–4 by Tanvir; Contact, Messages, Graph, CRUD by partner.',
                        },
                    ].map((item) => (
                        <div key={item.title} className="rounded-xl border border-amber-500/20 bg-[#1a120b]/60 p-6">
                            <h2 className="font-display text-xl text-amber-300">{item.title}</h2>
                            <p className="mt-2 text-sm text-amber-100/70">{item.text}</p>
                        </div>
                    ))}
                </div>
            </section>
        </SiteLayout>
    );
}
