<?php

namespace App\Models;

use App\ReviewStatus;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Review extends Model
{
    /** @use HasFactory<\Database\Factories\ReviewFactory> */
    use HasFactory;

    protected $casts = ['status' => ReviewStatus::class];

    public static function statusCounts()
    {
        // TO-DO: Group count by enum cases (for/against)
        $counts = Review::query()
            ->selectRaw('status, count(*) as count')
            ->groupBy('status')
            ->pluck('count', 'status');

        return collect(ReviewStatus::cases())
            ->mapWithKeys(fn ($status) => [
                $status->value => $counts->get($status->value, 0)
            ])
            ->put('all', Review::all()->count());
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
