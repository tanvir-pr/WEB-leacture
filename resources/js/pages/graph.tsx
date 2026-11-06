import {
    ArcElement,
    BarElement,
    CategoryScale,
    Chart as ChartJS,
    Legend,
    LinearScale,
    Title,
    Tooltip,
} from 'chart.js';
import { Bar, Doughnut } from 'react-chartjs-2';
import SiteLayout from '@/layouts/site-layout';

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend);

type Point = { label: string; value: number };

export default function Graph({
    byCategory = [],
    ordersByPizza = [],
}: {
    byCategory?: Point[];
    ordersByPizza?: Point[];
}) {
    const categoryData = {
        labels: byCategory.map((p) => p.label),
        datasets: [
            {
                label: 'Pizzas per category',
                data: byCategory.map((p) => p.value),
                backgroundColor: ['#f59e0b', '#ea580c', '#b45309', '#fbbf24', '#d97706'],
            },
        ],
    };

    const orderData = {
        labels: ordersByPizza.map((p) => p.label),
        datasets: [
            {
                label: 'Ordered amount (top 10)',
                data: ordersByPizza.map((p) => p.value),
                backgroundColor: '#f59e0b',
            },
        ],
    };

    return (
        <SiteLayout title="Graph">
            <div className="mx-auto max-w-6xl px-4 py-12 text-amber-50">
                <h1 className="font-display text-3xl text-amber-300">Graph</h1>
                <p className="mt-2 text-amber-100/70">
                    Charts built with Chart.js from the Pizza MySQL database.
                </p>

                <div className="mt-10 grid gap-8 lg:grid-cols-2">
                    <div className="rounded-xl border border-amber-500/20 bg-[#1a120b]/70 p-5">
                        <h2 className="mb-4 text-lg text-amber-200">Pizzas by category</h2>
                        <Doughnut data={categoryData} />
                    </div>
                    <div className="rounded-xl border border-amber-500/20 bg-[#1a120b]/70 p-5">
                        <h2 className="mb-4 text-lg text-amber-200">Top ordered pizzas</h2>
                        <Bar
                            data={orderData}
                            options={{
                                responsive: true,
                                plugins: { legend: { display: false } },
                                scales: {
                                    x: { ticks: { color: '#fde68a' } },
                                    y: { ticks: { color: '#fde68a' } },
                                },
                            }}
                        />
                    </div>
                </div>
            </div>
        </SiteLayout>
    );
}
