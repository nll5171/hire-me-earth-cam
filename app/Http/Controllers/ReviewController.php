<?php

namespace App\Http\Controllers;

use App\Http\Requests\ReviewRequest;
use App\Models\Review;
use App\ReviewStatus;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;
use Inertia\Inertia;

class ReviewController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        // Filter by user_id, status (for/against), updated_at
        $reviews = Review::query()
            ->when($request->user_id,
                fn ($query) => $query->where('user_id', $request->user_id))
            ->when(in_array($request->status, ReviewStatus::values()),
                fn ($query) => $query->where('status', $request->status))
            ->when($request->updated_at,
                fn ($query) => true) // TO-DO: Filter by updated_at somehow
            ->latest()
            ->get();


        $statusCounts = Review::statusCounts();
        //dd($reviews);

        return Inertia::render('reviews', [
            'loggedIn' => Auth::user() != null,
            'reviews' => $reviews,
            'statusCounts' => $statusCounts,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(ReviewRequest $request)
    {
        // TO-DO: Process creation of a new review in the DB
        $data = $request->safe()->all();
        Auth::user()->reviews()->create($data);

        return to_route('reviews.index')
            ->with('success', 'Review created!');
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(ReviewRequest $request, Review $review)
    {
        Gate::authorize('modify', $review);

        $data = $request->safe()->all();
        $review->update($data);

        return back()->with('success', 'Review updated!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Review $review)
    {
        Gate::authorize('modify', $review);

        $review->delete();

        return to_route('reviews.index');
    }
}
