import { useForm } from '@inertiajs/react';
import { useState } from 'react';
import type { review } from '@/types/reviews';
import ReviewTimelineForm from './review-timeline-form';

export default function ReviewTimelineItem({
    uid,
    review,
}: {
    uid: number;
    review: review;
}) {
    const { delete: destroy } = useForm({});
    const [editing, setEditing] = useState(false);

    function deleteReview(e) {
        e.preventDefault();
        destroy(`/reviews/${review.id}`);
    }

    if (editing)
        return <ReviewTimelineForm review={review} setMaking={setEditing} />;

    return (
        <div
            className={`timeline-box p-6 ${review.status ? 'timeline-end bg-error' : 'timeline-start bg-success'}`}
        >
            <span className="text-base">{review.message}</span>

            {/* Edit/Delete Options (only user's reviews can be edited) */}
            {review.user_id === uid && (
                <div className="mt-4 flex flex-wrap justify-end gap-2">
                    <button
                        className="btn btn-outline btn-secondary"
                        onClick={() => setEditing(true)}
                    >
                        Edit
                    </button>
                    <form onSubmit={deleteReview}>
                        <button type="submit" className="btn btn-primary">
                            Delete
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
}
