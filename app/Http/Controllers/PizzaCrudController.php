<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Pizza;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class PizzaCrudController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('crud', [
            'pizzas' => Pizza::query()->orderBy('pname')->get(),
            'categories' => Category::query()->orderBy('cname')->pluck('cname'),
        ]);
    }

    public function store(Request $request): RedirectResponse
    {
        $data = $this->validated($request);

        Pizza::query()->create($data);

        return redirect()->route('crud.index')->with('success', 'Pizza created.');
    }

    public function update(Request $request, Pizza $pizza): RedirectResponse
    {
        $data = $this->validated($request, $pizza->id);

        $pizza->update($data);

        return redirect()->route('crud.index')->with('success', 'Pizza updated.');
    }

    public function destroy(Pizza $pizza): RedirectResponse
    {
        $pizza->delete();

        return redirect()->route('crud.index')->with('success', 'Pizza deleted.');
    }

    /**
     * @return array{pname: string, categoryname: string, vegetarian: bool}
     */
    private function validated(Request $request, ?int $ignoreId = null): array
    {
        $unique = 'unique:pizzas,pname';
        if ($ignoreId !== null) {
            $unique .= ','.$ignoreId;
        }

        $validated = $request->validate([
            'pname' => ['required', 'string', 'max:100', $unique],
            'categoryname' => ['required', 'string', 'exists:categories,cname'],
            'vegetarian' => ['sometimes', 'boolean'],
        ]);

        $validated['vegetarian'] = $request->boolean('vegetarian');

        return $validated;
    }
}
