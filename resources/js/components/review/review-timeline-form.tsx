import { router, useForm, usePage } from '@inertiajs/react';
import { useState } from 'react';
import type { review } from '@/types/reviews';
import { request } from 'http';

// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
export default function ReviewTimelineForm({
    review,
    setMaking,
}: {
    review?: review;
    setMaking: Function;
}) {
    const { errors } = usePage().props;

    const [values, setValues] = useState({
        message: review?.message ?? '',
        status: review?.status ?? 0,
    });

    function handleChange(e) {
        const value =
            e.target.checked !== undefined
                ? e.target.checked
                    ? 1
                    : 0
                : e.target.value;

        setValues((values) => ({
            ...values,
            [e.target.id]: value,
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();

        console.log(request);

        if (review) router.patch(`/reviews/${review.id}`, values);
        else router.post('/reviews', values);
    }

    return (
        <div
            className={`w-full timeline-box p-6 lg:max-w-md ${values.status === 0 ? 'timeline-start bg-success' : 'timeline-end bg-error'}`}
        >
            <form onSubmit={handleSubmit} className="">
                <div className="flex flex-col items-center justify-center gap-y-1">
                    <fieldset className="fieldset rounded-box border-base-300 bg-base-300/50 p-2">
                        <div className="flex items-center justify-center gap-2">
                            <span className="grow basis-0 text-sm">For</span>
                            <input
                                id="status"
                                type="checkbox"
                                checked={values.status === 1}
                                onChange={handleChange}
                                className="toggle border-success bg-success/80 checked:border-error checked:bg-error/80"
                            />
                            <span className="grow basis-0 text-sm">
                                Against
                            </span>
                        </div>
                        {errors.status && (
                            <p className="mt-2 text-xs text-error">
                                {errors.status}
                            </p>
                        )}
                    </fieldset>

                    <fieldset className="mb-2 fieldset w-full rounded-box border-base-300 bg-base-300/50 p-2">
                        <label>Write your review</label>
                        <textarea
                            id="message"
                            value={values.message}
                            onChange={handleChange}
                            className="validator textarea h-24 w-full"
                            placeholder="I'd trust this man with my life."
                            required
                        ></textarea>
                        <p className="validator-hint hidden">Required</p>
                        {errors.message && (
                            <p className="text-xs text-error first-of-type:mt-2">
                                {errors.message}
                            </p>
                        )}
                    </fieldset>
                </div>

                {/* Cancel and Create/Update Options */}
                <div className="flex flex-wrap justify-end gap-2">
                    <button
                        type="button"
                        className="btn btn-outline btn-secondary"
                        onClick={() => setMaking(false)}
                    >
                        Cancel
                    </button>
                    <button type="submit" className="btn btn-primary">
                        {review ? 'Update' : 'Create'}
                    </button>
                </div>
            </form>
        </div>
    );
}
