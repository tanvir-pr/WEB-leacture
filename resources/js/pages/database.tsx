import SiteLayout from '@/layouts/site-layout';

type Category = { id: number; cname: string; price: number };
type Pizza = { id: number; pname: string; categoryname: string; vegetarian: boolean };
type Order = {
    id: number;
    pizzaname: string;
    amount: number;
    taken: string;
    dispatched: string | null;
};

export default function DatabasePage({
    categories = [],
    pizzas = [],
    orders = [],
}: {
    categories?: Category[];
    pizzas?: Pizza[];
    orders?: Order[];
}) {
    return (
        <SiteLayout title="Database">
            <div className="mx-auto max-w-6xl space-y-10 px-4 py-12 text-amber-50">
                <div>
                    <h1 className="font-display text-3xl text-amber-300">Database</h1>
                    <p className="mt-2 text-amber-100/70">
                        Pizza homework source — 3 tables via Eloquent ORM (Migration + Seeding).
                    </p>
                </div>

                <section>
                    <h2 className="mb-3 text-xl font-semibold text-amber-200">
                        Categories ({categories.length})
                    </h2>
                    <div className="overflow-x-auto rounded-lg border border-amber-500/20">
                        <table className="min-w-full text-left text-sm">
                            <thead className="bg-[#1a120b]">
                                <tr>
                                    <th className="px-3 py-2">ID</th>
                                    <th className="px-3 py-2">Name</th>
                                    <th className="px-3 py-2">Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {categories.map((c) => (
                                    <tr key={c.id} className="border-t border-amber-500/10">
                                        <td className="px-3 py-2">{c.id}</td>
                                        <td className="px-3 py-2">{c.cname}</td>
                                        <td className="px-3 py-2">{c.price}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                <section>
                    <h2 className="mb-3 text-xl font-semibold text-amber-200">
                        Pizzas ({pizzas.length})
                    </h2>
                    <div className="overflow-x-auto rounded-lg border border-amber-500/20">
                        <table className="min-w-full text-left text-sm">
                            <thead className="bg-[#1a120b]">
                                <tr>
                                    <th className="px-3 py-2">ID</th>
                                    <th className="px-3 py-2">Name</th>
                                    <th className="px-3 py-2">Category</th>
                                    <th className="px-3 py-2">Vegetarian</th>
                                </tr>
                            </thead>
                            <tbody>
                                {pizzas.map((p) => (
                                    <tr key={p.id} className="border-t border-amber-500/10">
                                        <td className="px-3 py-2">{p.id}</td>
                                        <td className="px-3 py-2">{p.pname}</td>
                                        <td className="px-3 py-2">{p.categoryname}</td>
                                        <td className="px-3 py-2">{p.vegetarian ? 'Yes' : 'No'}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                <section>
                    <h2 className="mb-3 text-xl font-semibold text-amber-200">
                        Orders (latest {orders.length})
                    </h2>
                    <div className="overflow-x-auto rounded-lg border border-amber-500/20">
                        <table className="min-w-full text-left text-sm">
                            <thead className="bg-[#1a120b]">
                                <tr>
                                    <th className="px-3 py-2">ID</th>
                                    <th className="px-3 py-2">Pizza</th>
                                    <th className="px-3 py-2">Amount</th>
                                    <th className="px-3 py-2">Taken</th>
                                    <th className="px-3 py-2">Dispatched</th>
                                </tr>
                            </thead>
                            <tbody>
                                {orders.map((o) => (
                                    <tr key={o.id} className="border-t border-amber-500/10">
                                        <td className="px-3 py-2">{o.id}</td>
                                        <td className="px-3 py-2">{o.pizzaname}</td>
                                        <td className="px-3 py-2">{o.amount}</td>
                                        <td className="px-3 py-2">{o.taken}</td>
                                        <td className="px-3 py-2">{o.dispatched ?? '—'}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>
        </SiteLayout>
    );
}
