import { router } from '@inertiajs/react';
import { useState } from 'react';

export default function ReviewSearchFilters({ uid }: { uid: number }) {
    const [getParams, setParams] = useState('');

    function makeQuery(e) {
        const params = [];

        if (document.querySelector('#user-submission-filter')!.checked)
            params.push(`user_id=${uid}`);

        if (document.querySelector('#for-filter')!.checked)
            params.push(`status=0`);
        else if (document.querySelector('#against-filter')!.checked)
            params.push(`status=1`);

        router.get(`/reviews?${params.join('&')}`);
    }

    return (
        <div className="flex items-center gap-2">
            <span>Filter by:</span>
            <form className="flex gap-1" onChange={makeQuery}>
                <input
                    className="btn"
                    type="checkbox"
                    name="filters"
                    id="user-submission-filter"
                    aria-label="User's submissions"
                />
                <input
                    className="btn"
                    type="checkbox"
                    name="filters"
                    id="for-filter"
                    aria-label="For"
                />
                <input
                    className="btn"
                    type="checkbox"
                    name="filters"
                    id="against-filter"
                    aria-label="Against"
                />
            </form>
        </div>
    );
}
