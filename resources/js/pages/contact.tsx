import { Form, usePage } from '@inertiajs/react';
import SiteLayout from '@/layouts/site-layout';

export default function Contact() {
    const { flash } = usePage().props as {
        flash?: { success?: string | null };
    };

    return (
        <SiteLayout title="Contact">
            <div className="mx-auto max-w-2xl px-4 py-12 text-amber-50">
                <h1 className="font-display text-3xl text-amber-300">Contact</h1>
                <p className="mt-2 text-amber-100/70">
                    Send a message to the site owner. Server-side validation is applied and
                    messages are stored in MySQL.
                </p>

                {flash?.success && (
                    <div className="mt-4 rounded-md border border-emerald-400/40 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-200">
                        {flash.success}
                    </div>
                )}

                <Form
                    action="/contact"
                    method="post"
                    className="mt-8 space-y-4 rounded-xl border border-amber-500/20 bg-[#1a120b]/70 p-6"
                    resetOnSuccess
                >
                    {({ errors, processing }) => (
                        <>
                            <div>
                                <label htmlFor="name" className="mb-1 block text-sm text-amber-100/80">
                                    Name
                                </label>
                                <input
                                    id="name"
                                    name="name"
                                    required
                                    className="w-full rounded-md border border-amber-500/30 bg-[#120c08] px-3 py-2 text-amber-50 outline-none focus:border-amber-400"
                                />
                                {errors.name && (
                                    <p className="mt-1 text-sm text-red-300">{errors.name}</p>
                                )}
                            </div>

                            <div>
                                <label htmlFor="email" className="mb-1 block text-sm text-amber-100/80">
                                    Email
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    required
                                    className="w-full rounded-md border border-amber-500/30 bg-[#120c08] px-3 py-2 text-amber-50 outline-none focus:border-amber-400"
                                />
                                {errors.email && (
                                    <p className="mt-1 text-sm text-red-300">{errors.email}</p>
                                )}
                            </div>

                            <div>
                                <label htmlFor="subject" className="mb-1 block text-sm text-amber-100/80">
                                    Subject
                                </label>
                                <input
                                    id="subject"
                                    name="subject"
                                    required
                                    className="w-full rounded-md border border-amber-500/30 bg-[#120c08] px-3 py-2 text-amber-50 outline-none focus:border-amber-400"
                                />
                                {errors.subject && (
                                    <p className="mt-1 text-sm text-red-300">{errors.subject}</p>
                                )}
                            </div>

                            <div>
                                <label htmlFor="body" className="mb-1 block text-sm text-amber-100/80">
                                    Message
                                </label>
                                <textarea
                                    id="body"
                                    name="body"
                                    required
                                    rows={5}
                                    className="w-full rounded-md border border-amber-500/30 bg-[#120c08] px-3 py-2 text-amber-50 outline-none focus:border-amber-400"
                                />
                                {errors.body && (
                                    <p className="mt-1 text-sm text-red-300">{errors.body}</p>
                                )}
                            </div>

                            <button
                                type="submit"
                                disabled={processing}
                                className="rounded-md bg-amber-500 px-5 py-2.5 text-sm font-semibold text-[#1a120b] hover:bg-amber-400 disabled:opacity-60"
                            >
                                {processing ? 'Sending…' : 'Send message'}
                            </button>
                        </>
                    )}
                </Form>
            </div>
        </SiteLayout>
    );
}
