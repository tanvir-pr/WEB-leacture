import SiteLayout from '@/layouts/site-layout';

export default function Contact() {
    return (
        <SiteLayout title="Contact">
            <div className="mx-auto max-w-3xl px-4 py-12 text-amber-50">
                <h1 className="font-display text-3xl text-amber-300">Contact</h1>
                <p className="mt-3 text-amber-100/70">
                    Contact form with server-side validation and database save will be completed
                    in Step 5 (partner).
                </p>
            </div>
        </SiteLayout>
    );
}
