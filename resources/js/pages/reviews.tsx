import ReviewTimeline from '@/components/review/review-timeline';
import AppLayout from '@/layouts/app-layout';

import type { review, statusCounts } from '@/types/reviews';

export default function Reviews({
    uid,
    reviews,
    statusCounts,
}: {
    uid: number;
    reviews: Array<review>;
    statusCounts: statusCounts;
}) {
    return (
        <AppLayout title="Reviews" loggedIn={uid !== -1}>
            <div className="mx-4 h-full max-w-7xl space-y-4 xl:m-auto">
                <h1 className="pt-4 text-3xl font-bold md:pt-10">
                    Is Nick Lang worth hiring?
                </h1>
                <hr />
                <div className="flex w-full flex-col lg:flex-row">
                    <div className="card grid h-60 grow basis-0 place-items-center rounded-box bg-success py-20 lg:py-0">
                        <span className="text-5xl font-bold">
                            For: {statusCounts[0] ?? 0}
                        </span>
                    </div>
                    <div className="divider lg:divider-horizontal"></div>
                    <div className="card grid h-60 grow basis-0 place-items-center rounded-box bg-error py-20 lg:py-0">
                        <span className="text-5xl font-bold">
                            Against: {statusCounts[1] ?? 0}
                        </span>
                    </div>
                </div>
                <ReviewTimeline uid={uid} reviews={reviews} />
            </div>
        </AppLayout>
    );
}
