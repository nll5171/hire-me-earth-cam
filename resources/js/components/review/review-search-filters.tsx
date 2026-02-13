import { router } from '@inertiajs/react';

export default function ReviewSearchFilters({ uid }: { uid: number }) {
    // Make an object with three different fields, and change it stately
    const initialParams = new URLSearchParams(window.location.search);

    function makeQuery(e) {
        const params = [];

        if (e.target.id === 'user-filter') {
            if (e.target.checked) params.push(`user_id=${uid}`);
            if (initialParams.get('status'))
                params.push(`status=${initialParams.get('status')}`);
        } else {
            if (e.target.checked)
                params.push(`status=${e.target.id === 'for-filter' ? 0 : 1}`);
            if (initialParams.get('user_id'))
                params.push(`user_id=${initialParams.get('user_id')}`);
        }

        router.get(`/reviews?${params.join('&')}`);
    }

    return (
        <div className="flex items-center gap-2">
            <span>Filter by:</span>
            <form className="flex gap-1">
                <input
                    className="btn"
                    type="checkbox"
                    name="filters"
                    id="user-filter"
                    checked={initialParams.get('user_id') !== null}
                    onChange={makeQuery}
                    aria-label="User's submissions"
                />
                <input
                    className="btn"
                    type="checkbox"
                    name="filters"
                    id="for-filter"
                    checked={
                        initialParams.get('status') !== null &&
                        parseInt(initialParams.get('status')) === 0
                    }
                    onChange={makeQuery}
                    aria-label="For"
                />
                <input
                    className="btn"
                    type="checkbox"
                    name="filters"
                    id="against-filter"
                    checked={
                        initialParams.get('status') !== null &&
                        parseInt(initialParams.get('status')) === 1
                    }
                    onChange={makeQuery}
                    aria-label="Against"
                />
            </form>
        </div>
    );
}
