import { Link } from '@inertiajs/react';
import { useState } from 'react';
import type { review } from '@/types/reviews';
import ReviewTimelineForm from './review-timeline-form';
import ReviewTimelineItem from './review-timeline-item';

export default function ReviewTimeline({
    uid,
    reviews,
}: {
    uid: number;
    reviews: Array<review>;
}) {
    // For displaying review creation form
    const [creating, setCreating] = useState(false);

    return (
        <>
            <h2 className="text-center text-2xl font-bold">
                Here's what some "definitely real" people have had to say.
            </h2>

            <div className="flex items-center justify-center gap-4">
                <span className="text-sm">Want to add your own review?</span>
                {uid !== -1 ? (
                    <button
                        className="btn btn-outline btn-primary"
                        onClick={() => setCreating(true)}
                    >
                        Add review
                    </button>
                ) : (
                    <Link className="btn btn-outline btn-primary" href="/login">
                        Login
                    </Link>
                )}
            </div>

            {reviews.length > 0 || creating ? (
                <ul className="timeline timeline-vertical">
                    {creating && (
                        <li>
                            <ReviewTimelineForm setMaking={setCreating} />
                            <hr className="w-4 rounded-none" />
                        </li>
                    )}

                    {reviews.map((review, index) => (
                        <li key={review.id}>
                            {(index > 0 || creating) && (
                                <hr className="w-4 rounded-none" />
                            )}
                            <ReviewTimelineItem uid={uid} review={review} />
                            {(index === 0 || index < reviews.length - 1) && (
                                <hr className="w-4 rounded-none" />
                            )}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Nothing apparently.</p>
            )}
        </>
    );
}
