import { Link } from '@inertiajs/react';
import Hero from '@/components/hero';
import List from '@/components/list';
import AppLayout from '@/layouts/app-layout';

export default function Home() {
    return (
        <AppLayout title="Home">
            <div className="space-y-18">
                <Hero
                    imgURL="https://www.earthcamhq.com/img/gallery_new/panos/GPX10Pano_042918.jpg"
                    title="Please consider me"
                    desc="A Laravel/React site created by Nicholas Lang to apply for the JR. Backend Developer role with EarthCam."
                    btnText="Why choose me?"
                    btnLink="#why"
                />

                <div id="why" className="mx-4 max-w-7xl xl:m-auto">
                    <div className="flex items-center gap-x-15">
                        <div>
                            <h2 className="text-4xl font-bold">
                                Why choose me?
                            </h2>
                            <p className="mt-8">
                                I had previously applied for the JR. Full Stack
                                Developer role with EarthCam. After the initial
                                and technical interviews however, I was turned
                                down in favor of other candidates that better
                                met the needs of the company. While I was unable
                                to get a specifc answer as to why I was not
                                chosen, I believe it had to do with my lack of
                                knowledge concerning{' '}
                                <a
                                    href="https://laravel.com/"
                                    className="link text-primary link-hover"
                                    target="_blank"
                                >
                                    Laravel
                                </a>
                                , a core part of EarthCam's tech stack.
                            </p>
                            <p className="mt-8">
                                When asked if I would be able to learn Laravel,
                                I claimed that I would be more than capable.
                                Given that the role of JR. Backend Developer is
                                even more dependent on Laravel than the previous
                                one, I wanted to prove that my word could be
                                trusted in that regard.
                            </p>
                            <p className="mt-8">
                                As such, this website has been developed using
                                the tools that most closely match my knowledge
                                of EarthCam's tech stack, being:
                            </p>
                            <List addClass="my-5">
                                <div className="flex items-center gap-4">
                                    <div>
                                        <img
                                            src="https://raw.githubusercontent.com/laravel/art/refs/heads/master/laravel-logo.png"
                                            aria-labelledby="#laravel"
                                            className="size-10"
                                        />
                                    </div>
                                    <a
                                        className="grow link text-lg text-primary link-hover"
                                        href="https://laravel.com/"
                                        target="_blank"
                                        id="laravel"
                                    >
                                        Laravel
                                    </a>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div>
                                        <img
                                            src="https://pngimg.com/uploads/mysql/mysql_PNG23.png"
                                            aria-labelledby="#mysql"
                                            className="size-10"
                                        />
                                    </div>
                                    <a
                                        className="grow link text-lg text-primary link-hover"
                                        href="https://www.mysql.com/"
                                        target="_blank"
                                        id="mysql"
                                    >
                                        MySQL
                                    </a>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div>
                                        <img
                                            src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                                            aria-labelledby="#react"
                                            className="size-10"
                                        />
                                    </div>
                                    <a
                                        className="grow link text-lg text-primary link-hover"
                                        href="https://react.dev/"
                                        target="_blank"
                                        id="react"
                                    >
                                        React
                                    </a>
                                </div>
                            </List>
                            <p>
                                Alongside the use of Tailwind CSS and daisyUI
                                for the front-end, given that's less of a focus
                                for this role.
                            </p>
                            <p className="mt-8">
                                This site was designed to perform fairly simple{' '}
                                <strong>CRUD</strong> (Create, Read, Update,
                                Delete) operations, requiring login to create,
                                update, and delete. Given that I wanted to
                                complete this before applications were closed, I
                                apologize that I couldn't provide a more
                                comprehensive demonstration of my knowledge of
                                Laravel.
                            </p>
                        </div>
                        <figure className="hidden min-w-1/4 space-y-2 md:block">
                            <img
                                className="w-full rounded-3xl object-cover"
                                src="https://nll5171.github.io/img/nick.png"
                                alt="Young white male with glasses, brown hair, and left fringe haircut."
                            />
                            <figcaption className="text-sm">
                                Slightly outdated photo, but I haven't changed
                                too much I don't think.
                            </figcaption>
                        </figure>
                    </div>
                    <div className="flex justify-center">
                        <Link
                            href="/reviews"
                            className="btn mx-auto mt-10 w-full max-w-4xl btn-primary"
                        >
                            View Demo
                        </Link>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
