<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class SessionController extends Controller
{
    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('auth', [
            'state' => 'login',
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $attributes = $request->validate([
            'email' => ['required', 'string', 'email', 'max:255'],
            'password' => ['required', 'string', 'min:12', 'max:255'],
        ]);

        if (!Auth::attempt($attributes)) {
            // failed
            return back()
                ->withErrors(['password' => 'We were unable to authenticate with the given credentials.'])
                ->withInput();
        }

        $request->session()->regenerate();
        return redirect()->intended(route('reviews.index'))->with('success', 'You are now logged in!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request)
    {
        Auth::logout();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return route('home');
    }
}
