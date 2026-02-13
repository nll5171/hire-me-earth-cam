<?php

use App\Http\Controllers\RegisteredUserController;
use App\Http\Controllers\ReviewController;
use App\Http\Controllers\SessionController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('home', [
        'loggedIn' => Auth::user() != null,
    ]);
})->name('home');

Route::get('/reviews', [ReviewController::class, 'index'])
    ->name('reviews.index');

Route::middleware('guest')->group(function() {
    Route::get('/register', [RegisteredUserController::class, 'create'])
        ->name('register.create');
    Route::post('/register', [RegisteredUserController::class, 'store'])
        ->name('register.store');

    Route::get('/login', [SessionController::class, 'create'])
        ->name('login.create');
    Route::post('/login', [SessionController::class, 'store'])
        ->name('login.store');
});

Route::middleware('auth')->group(function() {
    Route::post('/reviews', [ReviewController::class, 'store'])
        ->name('reviews.store');
    Route::patch('/reviews/{id}', [ReviewController::class, 'update'])
        ->name('reviews.update');
    Route::delete('/reviews/{id}', [ReviewController::class, 'destroy'])
        ->name('reviews.destroy');

    Route::delete('/logout', [SessionController::class, 'destroy'])
        ->name('logout');
});
