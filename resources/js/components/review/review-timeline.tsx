import type { review } from '@/types/reviews';

export default function ReviewTimeline({
    uid,
    reviews,
}: {
    uid: number;
    reviews: Array<review>;
}) {
    return (
        <>
            <h2 className="text-center text-2xl font-bold">
                Here's what some "definitely real" people have had to say.
            </h2>

            {reviews.length >= 0 ? (
                <ul className="timeline timeline-vertical">
                    <li>
                        <div className="timeline-start timeline-box bg-success p-6 text-base">
                            He's a quick learner, more than capable of adapting
                            to new technologies in a short time-frame.
                        </div>
                        <hr className="w-4" />
                    </li>
                    <li>
                        <hr className="w-4" />
                        <div className="timeline-end timeline-box bg-error p-6 text-base">
                            I don't think it'd be smart of me to mention any
                            negatives, unfortunately.
                        </div>
                        <hr className="w-4" />
                    </li>
                    <li>
                        <hr />
                        <div className="timeline-start timeline-box">iPod</div>
                        <hr />
                    </li>
                    <li>
                        <hr />
                        <div className="timeline-end timeline-box">iPhone</div>
                        <hr />
                    </li>
                    <li>
                        <hr />
                        <div className="timeline-start timeline-box">
                            Apple Watch
                        </div>
                    </li>
                </ul>
            ) : (
                <p>Nothing apparently.</p>
            )}
        </>
    );
}
