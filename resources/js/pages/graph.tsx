import SiteLayout from '@/layouts/site-layout';

export default function Graph() {
    return (
        <SiteLayout title="Graph">
            <div className="mx-auto max-w-3xl px-4 py-12 text-amber-50">
                <h1 className="font-display text-3xl text-amber-300">Graph</h1>
                <p className="mt-3 text-amber-100/70">
                    Chart.js visualization based on Pizza MySQL data will be completed in Step 7
                    (partner).
                </p>
            </div>
        </SiteLayout>
    );
}
