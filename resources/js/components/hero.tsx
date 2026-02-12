export default function Hero({
    imgURL,
    title,
    desc,
    btnText,
    btnLink,
}: {
    imgURL: string;
    title: string;
    desc: string;
    btnText: string;
    btnLink: string;
}) {
    return (
        <div
            className="hero min-h-screen"
            style={{
                backgroundImage: `url(${imgURL})`,
            }}
        >
            <div className="hero-overlay"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">{title}</h1>
                    <p className="mb-5">{desc}</p>
                    <a className="btn btn-primary" href={btnLink}>
                        {btnText}
                    </a>
                </div>
            </div>
        </div>
    );
}
