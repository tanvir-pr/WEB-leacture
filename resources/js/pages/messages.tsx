import SiteLayout from '@/layouts/site-layout';

export default function Messages() {
    return (
        <SiteLayout title="Messages">
            <div className="mx-auto max-w-3xl px-4 py-12 text-amber-50">
                <h1 className="font-display text-3xl text-amber-300">Messages</h1>
                <p className="mt-3 text-amber-100/70">
                    Message list (newest first) will be completed in Step 6 (partner). Only
                    registered users can open this menu.
                </p>
            </div>
        </SiteLayout>
    );
}
