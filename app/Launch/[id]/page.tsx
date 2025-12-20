import { getLaunchById, getRocketById } from "@/lib/api/spacex";
import { formatDate } from "@/lib/utils/formatDate";

import Navbar from "@/components/layout/Navbar";
import Badge from "@/components/ui/Badge";

import { KeyRound, Calendar, Rocket, CircleCheck } from "lucide-react";

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
            <div className="grid grid-cols-2 gap-2 px-24 py-18">
                <div className={`flex flex-col gap-4 p-8 ${cardStyles}`}>
                    <header className="flex items-center gap-4">
                        {launch.links.patch.small && (
                            <img
                                src={launch.links.patch.small}
                                alt="Mission patch"
                                className="size-16 object-contain"
                            />
                        )}

                        <div>
                            <h1 className="text-3xl font-semibold tracking-tight">
                                {launch.name}
                            </h1>
                            <span className="flex gap-1 text-sm text-white/50">
                                <KeyRound className="size-4" />
                                {launch.id}
                            </span>
                            <p className="text-sm text-white/60">
                                Flight #{launch.flight_number}
                            </p>
                        </div>
                    </header>

                    {/* Meta info */}
                    <section className="flex flex-wrap gap-6 text-sm">
                        <div>
                            <span className="flex gap-1 text-white/50">
                                <Calendar className="size-4" />
                                Date
                            </span>
                            <span>{formatDate(launch.date_utc)}</span>
                        </div>

                        <div>
                            <span className="flex gap-1 text-white/50">
                                <CircleCheck className="size-4" />
                                Status
                            </span>
                            <Badge status={launch.success} />
                        </div>

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
                        <p className="text-white/80 leading-relaxed">
                            {launch.details ?? "No mission details available."}
                        </p>
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