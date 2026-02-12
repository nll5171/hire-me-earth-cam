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
        $user = Auth::user();

        // TO-DO: Add additional filters
        //   - User specific
        //   - Status (for/against) [Implemented]
        //   - Date?
        $reviews = $user
            ->reviews()
            ->when(
                in_array($request->status, ReviewStatus::values()),
                    fn ($query) => $query->where('status', $request->status)
            )
            ->latest()
            ->get();

        $statusCounts = Review::statusCounts($user);

        return Inertia::render('reviews', [
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
