import { Form, router, usePage } from '@inertiajs/react';
import { useState } from 'react';
import SiteLayout from '@/layouts/site-layout';

type Pizza = {
    id: number;
    pname: string;
    categoryname: string;
    vegetarian: boolean;
};

export default function Crud({
    pizzas = [],
    categories = [],
}: {
    pizzas?: Pizza[];
    categories?: string[];
}) {
    const { flash } = usePage().props as { flash?: { success?: string | null } };
    const [editing, setEditing] = useState<Pizza | null>(null);

    return (
        <SiteLayout title="CRUD">
            <div className="mx-auto max-w-5xl px-4 py-12 text-amber-50">
                <h1 className="font-display text-3xl text-amber-300">CRUD — Pizzas</h1>
                <p className="mt-2 text-amber-100/70">
                    Admin-only Create / Read / Update / Delete for the pizzas table.
                </p>

                {flash?.success && (
                    <div className="mt-4 rounded-md border border-emerald-400/40 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-200">
                        {flash.success}
                    </div>
                )}

                <Form
                    action={editing ? `/crud/${editing.id}` : '/crud'}
                    method={editing ? 'put' : 'post'}
                    className="mt-8 grid gap-3 rounded-xl border border-amber-500/20 bg-[#1a120b]/70 p-5 md:grid-cols-4"
                    onSuccess={() => setEditing(null)}
                    key={editing?.id ?? 'create'}
                >
                    {({ errors, processing }) => (
                        <>
                            <div>
                                <label className="mb-1 block text-xs text-amber-100/70">Name</label>
                                <input
                                    name="pname"
                                    defaultValue={editing?.pname ?? ''}
                                    required
                                    className="w-full rounded-md border border-amber-500/30 bg-[#120c08] px-3 py-2"
                                />
                                {errors.pname && (
                                    <p className="mt-1 text-xs text-red-300">{errors.pname}</p>
                                )}
                            </div>
                            <div>
                                <label className="mb-1 block text-xs text-amber-100/70">
                                    Category
                                </label>
                                <select
                                    name="categoryname"
                                    defaultValue={editing?.categoryname ?? categories[0] ?? ''}
                                    required
                                    className="w-full rounded-md border border-amber-500/30 bg-[#120c08] px-3 py-2"
                                >
                                    {categories.map((c) => (
                                        <option key={c} value={c}>
                                            {c}
                                        </option>
                                    ))}
                                </select>
                                {errors.categoryname && (
                                    <p className="mt-1 text-xs text-red-300">{errors.categoryname}</p>
                                )}
                            </div>
                            <div className="flex items-end gap-2 pb-2">
                                <label className="flex items-center gap-2 text-sm">
                                    <input
                                        type="checkbox"
                                        name="vegetarian"
                                        value="1"
                                        defaultChecked={editing?.vegetarian ?? false}
                                    />
                                    Vegetarian
                                </label>
                            </div>
                            <div className="flex items-end gap-2">
                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="rounded-md bg-amber-500 px-4 py-2 text-sm font-semibold text-[#1a120b]"
                                >
                                    {editing ? 'Update' : 'Create'}
                                </button>
                                {editing && (
                                    <button
                                        type="button"
                                        onClick={() => setEditing(null)}
                                        className="rounded-md border border-amber-500/30 px-4 py-2 text-sm"
                                    >
                                        Cancel
                                    </button>
                                )}
                            </div>
                        </>
                    )}
                </Form>

                <div className="mt-8 overflow-x-auto rounded-lg border border-amber-500/20">
                    <table className="min-w-full text-left text-sm">
                        <thead className="bg-[#1a120b]">
                            <tr>
                                <th className="px-3 py-2">ID</th>
                                <th className="px-3 py-2">Name</th>
                                <th className="px-3 py-2">Category</th>
                                <th className="px-3 py-2">Vegetarian</th>
                                <th className="px-3 py-2">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {pizzas.map((pizza) => (
                                <tr key={pizza.id} className="border-t border-amber-500/10">
                                    <td className="px-3 py-2">{pizza.id}</td>
                                    <td className="px-3 py-2">{pizza.pname}</td>
                                    <td className="px-3 py-2">{pizza.categoryname}</td>
                                    <td className="px-3 py-2">
                                        {pizza.vegetarian ? 'Yes' : 'No'}
                                    </td>
                                    <td className="px-3 py-2 space-x-2">
                                        <button
                                            type="button"
                                            className="text-amber-300 underline"
                                            onClick={() => setEditing(pizza)}
                                        >
                                            Edit
                                        </button>
                                        <button
                                            type="button"
                                            className="text-red-300 underline"
                                            onClick={() => {
                                                if (confirm(`Delete ${pizza.pname}?`)) {
                                                    router.delete(`/crud/${pizza.id}`);
                                                }
                                            }}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </SiteLayout>
    );
}
