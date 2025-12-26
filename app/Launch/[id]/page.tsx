import { getLaunchById, getLaunchpadById, getRocketById } from "@/lib/api/spacex";
import { formatDate } from "@/lib/utils/formatDate";

import Navbar from "@/components/layout/Navbar";
import Badge from "@/components/ui/Badge";
import Carousel from "@/components/ui/Carousel";

import { KeyRound, Calendar, Rocket, CircleCheck, CircleQuestionMark, ArrowUpRight, BookOpen, MapPinned, Info } from "lucide-react";
import VideoSection from "@/components/layout/LaunchPage/VideoSection";

interface LaunchPageProps {
    params: Promise<{ id: string }>;
}

export default async function LaunchPage({ params }: LaunchPageProps) {
    const { id } = await params;
    const launch = await getLaunchById(id);
    const rocket = await getRocketById(launch.rocket)
    const launchpad = await getLaunchpadById(launch.launchpad)

    // youtube video link
    const embedUrl = `https://www.youtube.com/embed/${launch.links.youtube_id}`;
    const imagesUrl = launch.links.flickr?.original || [];

    const cardBaseStyle = `gap-4 p-8 rounded-3xl bg-primary-300`

    return (
        <div className="flex flex-col min-h-screen w-full">
            <Navbar />
            <div className="flex flex-col gap-4 p-4 md:px-24 md:py-18">

                <div className="flex flex-col md:grid grid-cols-[1fr_24rem] gap-4">

                    {/* informacion */}
                    <div className={`flex flex-col ${cardBaseStyle}`}>
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
                            <h2 className="text-xl font-medium tracking-tight mb-1">Mission Details</h2>
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

                            {launch.links.article &&
                                (<p className="flex gap-2 items-center mt-4 text-base">
                                    <span className="p-2 rounded-full bg-primary-tint-100">
                                        <BookOpen className="size-5" />
                                    </span>
                                    for more information, you can read the
                                    <a href={launch.links.article} target="_blank" rel="noopener noreferrer"
                                        className="cursor-pointer group">
                                        <span className="inline-flex gap-0.5 font-medium text-secondary-400
                                group-hover:underline group-hover:underline-offset-2 group-hover:decoration-secondary-400">
                                            official article
                                            <ArrowUpRight strokeWidth={2.5} className="size-5 relative top-0.5" />
                                        </span>
                                    </a>
                                </p>)}
                        </section>
                    </div>

                    {/* Launchpad Info */}
                    <div className={`flex flex-col gap-2 ${cardBaseStyle}`}>

                        <span className="flex items-center gap-2 text-sm">
                            <Info className="size-6 text-secondary-400" />
                            <h3 className="text-xl tracking-tighter font-medium">About Launchpad</h3>
                        </span>

                        <div className="flex flex-col gap-1">
                            <span className="text-2xl font-semibold">
                                {launchpad.name}
                            </span>

                            <div className="flex items-center gap-4 text-base tracking-tight font-medium">
                                <span className="flex items-center gap-2 ">
                                    <Rocket className="size-4 text-secondary-400" />
                                    {launchpad.launch_attempts} Launches
                                </span>
                                <span className="flex items-center gap-2">
                                    <CircleCheck className="size-4 text-secondary-400" />
                                    {launchpad.launch_successes} successful
                                </span>
                            </div>
                        </div>
                        <span className="text-lg">
                            <MapPinned className="inline size-5 mr-1 text-secondary-400" />
                            {launchpad.locality}, {launchpad.region}
                        </span>
                    </div>
                </div>

                {/* media container */}
                <div className="flex flex-col md:grid grid-cols-2 gap-4">

                    {/* Video */}
                    <div className={`${cardBaseStyle}`}>
                        {launch.links.webcast ? (
                            <VideoSection url={embedUrl} />
                        ) :
                            (
                                <div className="flex flex-col gap-2 aspect-video">
                                    <h2 className="text-2xl font-medium tracking-tight mb-1">Launch video</h2>
                                    <div className="flex justify-center items-center h-full w-full rounded-xl bg-primary-100">
                                        No video available...
                                    </div>
                                </div>
                            )
                        }

                    </div>

                    {/* images carousel */}
                    <div className="p-8 rounded-3xl bg-primary-300">

                        {imagesUrl.length > 0 ?
                            (
                                <div className="flex flex-col gap-2">
                                    <h2 className="text-2xl font-medium tracking-tight mb-1">Launch pictures</h2>
                                    <Carousel images={imagesUrl} />
                                </div>
                            ) : (
                                <div className="flex flex-col gap-2 aspect-video">
                                    <h2 className="text-2xl font-medium tracking-tight mb-1">Launch pictures</h2>
                                    <div className="flex justify-center items-center h-full w-full rounded-xl bg-primary-100">
                                        No images available...
                                    </div>
                                </div>
                            )
                        }
                    </div>

                </div>
            </div>
        </div>
    );
}