import { getLaunchById, getRocketById } from "@/lib/api/spacex";
import { formatDate } from "@/lib/utils/formatDate";

import Navbar from "@/components/layout/Navbar";
import Badge from "@/components/ui/Badge";

import { KeyRound, Calendar, Rocket, CircleCheck, CircleQuestionMark } from "lucide-react";

interface LaunchPageProps {
    params: Promise<{ id: string }>;
}

export default async function LaunchPage({ params }: LaunchPageProps) {
    const { id } = await params;
    const launch = await getLaunchById(id);
    const rocket = await getRocketById(launch.rocket)

    // youtube video link
    const embedUrl = `https://www.youtube.com/embed/${launch.links.youtube_id}`;
    const cardStyles = "ring ring-inset ring-white/10 rounded-3xl";

    return (
        <div className="flex flex-col h-screen w-full">

            <Navbar />
            <div className="grid grid-cols-2 gap-2 px-24 py-18 h-screen">
                <div className={`flex flex-col gap-4 p-8 ${cardStyles}`}>
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

                    {/* Details */}
                    <section className="max-w-3xl">
                        <h2 className="text-xl font-medium mb-2">Mission Details</h2>
                        {launch.details ? (
                            <p className="text-sm leading-tight text-pretty line-clamp-5">
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
                    </section>
                </div>

                <div className={`${cardStyles}`}>
                </div>

                {/* Video */}
                {launch.links.webcast && (
                    <section className="max-w-4xl">
                        <h2 className="text-2xl font-medium mb-2">Launch Video</h2>
                        <iframe
                            src={embedUrl}
                            className="w-full aspect-video rounded-xl"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </section>
                )}
            </div>
        </div>
    );
}