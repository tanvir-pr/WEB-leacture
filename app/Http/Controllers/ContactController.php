<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreContactMessageRequest;
use App\Models\ContactMessage;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;

class ContactController extends Controller
{
    public function create(): Response
    {
        return Inertia::render('contact');
    }

    public function store(StoreContactMessageRequest $request): RedirectResponse
    {
        ContactMessage::query()->create($request->validated());

        return redirect()
            ->route('contact')
            ->with('success', 'Your message was sent successfully.');
    }
}
