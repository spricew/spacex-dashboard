import { getLaunchById, getRocketById } from "@/lib/api/spacex";
import { formatDate } from "@/lib/utils/formatDate";

import Navbar from "@/components/layout/Navbar";
import Badge from "@/components/ui/Badge";
import Carousel from "@/components/ui/Carousel";

import { KeyRound, Calendar, Rocket, CircleCheck, CircleQuestionMark, ArrowUpRight, Book } from "lucide-react";
import VideoSection from "@/components/layout/LaunchPage/VideoSection";

interface LaunchPageProps {
    params: Promise<{ id: string }>;
}

export default async function LaunchPage({ params }: LaunchPageProps) {
    const { id } = await params;
    const launch = await getLaunchById(id);
    const rocket = await getRocketById(launch.rocket)

    // youtube video link
    const embedUrl = `https://www.youtube.com/embed/${launch.links.youtube_id}`;
    const imagesUrl = launch.links.flickr?.original || [];

    return (
        <div className="flex flex-col min-h-screen w-full">
            <Navbar />
            <div className="flex flex-col gap-4 px-24 py-18">
                <div className="grid grid-cols-[1fr_25rem] min-h-fit h-100 gap-2">

                    {/* informacion */}
                    <div className={`flex flex-col gap-4 p-8 rounded-3xl bg-primary-300`}>
                        <header className="flex items-center gap-4">

                            {/* icono */}
                            {launch.links.patch.small && (
                                <img
                                    src={launch.links.patch.small}
                                    alt="Mission patch"
                                    className="size-16 object-contain"
                                />
                            )}

                            <div>
                                {/* nombre del launch */}
                                <h1 className="text-3xl font-semibold tracking-tight">
                                    {launch.name}
                                </h1>
                                {/* identificador launch */}
                                <span className="flex gap-1 text-sm text-white/50">
                                    <KeyRound className="size-4" />
                                    {launch.id}
                                </span>
                                {/* numero de vuelo */}
                                <p className="text-sm text-white/60">
                                    Flight #{launch.flight_number}
                                </p>
                            </div>
                        </header>

                        <section className="flex flex-wrap gap-6 text-sm">
                            {/* fecha */}
                            <div>
                                <span className="flex gap-1 text-white/50">
                                    <Calendar className="size-4" />
                                    Date
                                </span>
                                <span>{formatDate(launch.date_utc)}</span>
                            </div>

                            {/* status */}
                            <div>
                                <span className="flex gap-1 text-white/50">
                                    <CircleCheck className="size-4" />
                                    Status
                                </span>
                                <Badge status={launch.success} />
                            </div>

                            {/* cohete */}
                            <div>
                                <span className="flex gap-1 text-white/50">
                                    <Rocket className="size-4" />
                                    Rocket
                                </span>
                                <span>{rocket.name}</span>
                            </div>
                        </section>

                        {/* Detalles */}
                        <section className="max-w-2xl">
                            <h2 className="text-xl font-medium mb-1">Mission Details</h2>
                            {launch.details ? (
                                <p className="text-sm leading-tight text-pretty">
                                    {launch.details}
                                </p>
                            ) :
                                (<div className="flex items-center gap-2 p-4 bg-white/10 rounded-xl">
                                    <CircleQuestionMark className="size-5" />
                                    <p className="text-sm">
                                        Classified… or maybe just unknown.
                                    </p>
                                </div>
                                )}

                            <p className="mt-4 text-base">
                                {/* &nbsp; Adds a single fixed space */}
                                for more information, you can read the&nbsp;
                                <a href={launch.links.article} target="_blank" rel="noopener noreferrer"
                                    className="cursor-pointer group">
                                    <span className="inline-flex gap-0.5 font-medium text-secondary-400
                                group-hover:underline group-hover:underline-offset-2 group-hover:decoration-secondary-400">
                                        official article
                                        <ArrowUpRight strokeWidth={2.5} className="size-5 relative top-0.5" />
                                    </span>
                                </a>
                            </p>
                        </section>
                    </div>

                    {/* launchpad */}
                    <div className="flex flex-col p-6 bg-primary-300 rounded-3xl">

                    </div>
                </div>

                {/* Video */}
                {launch.links.webcast && (
                    <VideoSection url={embedUrl} />
                )}

                {/* images carousel */}
                {imagesUrl.length > 0 &&
                    (
                        <Carousel images={imagesUrl} />
                    )
                }

            </div>
        </div>
    );
}