import SiteLayout from '@/layouts/site-layout';

export default function Crud() {
    return (
        <SiteLayout title="CRUD">
            <div className="mx-auto max-w-3xl px-4 py-12 text-amber-50">
                <h1 className="font-display text-3xl text-amber-300">CRUD</h1>
                <p className="mt-3 text-amber-100/70">
                    Admin CRUD for one Pizza table will be completed in Step 8 (partner). Only
                    admins can open this menu.
                </p>
            </div>
        </SiteLayout>
    );
}
