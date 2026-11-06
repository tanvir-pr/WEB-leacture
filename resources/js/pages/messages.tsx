import SiteLayout from '@/layouts/site-layout';

type Message = {
    id: number;
    name: string;
    email: string;
    subject: string;
    body: string;
    sent_at: string | null;
};

export default function Messages({ messages = [] }: { messages?: Message[] }) {
    return (
        <SiteLayout title="Messages">
            <div className="mx-auto max-w-4xl px-4 py-12 text-amber-50">
                <h1 className="font-display text-3xl text-amber-300">Messages</h1>
                <p className="mt-2 text-amber-100/70">
                    Contact messages from the database, newest first. Only logged-in users can
                    see this page.
                </p>

                <div className="mt-8 space-y-4">
                    {messages.length === 0 && (
                        <p className="rounded-lg border border-amber-500/20 p-4 text-amber-100/60">
                            No messages yet.
                        </p>
                    )}

                    {messages.map((message) => (
                        <article
                            key={message.id}
                            className="rounded-xl border border-amber-500/20 bg-[#1a120b]/70 p-5"
                        >
                            <div className="flex flex-wrap items-baseline justify-between gap-2">
                                <h2 className="text-lg font-semibold text-amber-200">
                                    {message.subject}
                                </h2>
                                <time className="text-xs text-amber-100/50">{message.sent_at}</time>
                            </div>
                            <p className="mt-1 text-sm text-amber-100/70">
                                From {message.name} &lt;{message.email}&gt;
                            </p>
                            <p className="mt-3 whitespace-pre-wrap text-amber-50/90">{message.body}</p>
                        </article>
                    ))}
                </div>
            </div>
        </SiteLayout>
    );
}
