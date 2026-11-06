<?php

namespace App\Http\Controllers;

use App\Models\ContactMessage;
use Inertia\Inertia;
use Inertia\Response;

class MessageController extends Controller
{
    public function index(): Response
    {
        $messages = ContactMessage::query()
            ->orderByDesc('created_at')
            ->get()
            ->map(fn (ContactMessage $message) => [
                'id' => $message->id,
                'name' => $message->name,
                'email' => $message->email,
                'subject' => $message->subject,
                'body' => $message->body,
                'sent_at' => $message->created_at?->format('Y-m-d H:i:s'),
            ]);

        return Inertia::render('messages', [
            'messages' => $messages,
        ]);
    }
}
