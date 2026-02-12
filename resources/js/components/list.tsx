import type { ReactNode } from 'react';
import { Children } from 'react';

export default function List({
    addClass,
    children,
}: {
    addClass: string;
    children: ReactNode;
}) {
    return (
        <ul className={`list rounded-box bg-base-100 shadow-md ${addClass}`}>
            {Children.map(children, (child) => (
                <li className="list-row">{child}</li>
            ))}
        </ul>
    );
}
