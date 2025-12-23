import Navbar from "@/components/layout/Navbar";
import Card from "@/components/ui/Card";
import RowCard from "@/components/ui/RowCard";
import PrimaryButton from "@/components/ui/PrimaryButton";

import { ChevronRight } from "lucide-react";

import { getLaunches, getRocketById } from "@/lib/api/spacex";
import React from "react";

export default async function Launches() {
    const launches = await getLaunches();
    const launchesWithRocket = await Promise.all(
        launches.map(async (launch) => {
            const rocket = await getRocketById(launch.rocket);
            return {
                ...launch,
                rocketName: rocket.name,
            };
        })
    );

    return (
        <div className="flex flex-col">
            <Navbar />

            <picture className="fixed inset-0 -z-50 w-full h-screen">
                <img
                    src="/earthBg.jpg"
                    className="object-cover w-full h-full"
                    alt="Earth background"
                />
            </picture>

            <div className="flex flex-col gap-6 px-4 py-8 md:px-24 md:py-18">
                <h1 className="text-2xl text-center md:text-start md:text-3xl tracking-tight font-medium">
                    Recent Launches
                </h1>
                <main className="flex flex-wrap justify-center gap-1 md:gap-2 w-full">
                    {launchesWithRocket.map((launch) => (
                        <React.Fragment key={launch.id}>
                            <div className="w-full md:hidden">
                                <RowCard
                                    launchName={launch.name}
                                    id={launch.id}
                                    patch={launch.links.patch.small}
                                    launchDate={launch.date_utc}
                                    successStatus={launch.success}
                                    rocket={launch.rocketName}
                                    flightNum={launch.flight_number}
                                    hrefString={launch.id}
                                />
                            </div>

                            <div className="hidden md:flex flex-1 w-72">
                                <Card
                                    launchName={launch.name}
                                    id={launch.id}
                                    patch={launch.links.patch.small}
                                    launchDate={launch.date_utc}
                                    rocket={launch.rocketName}
                                    successStatus={launch.success}
                                    details={launch.details}
                                    hrefString={`/Launch/${launch.id}`}
                                />
                            </div>
                        </React.Fragment>
                    ))}
                </main>
                <PrimaryButton
                    text="Load more"
                    icon={<ChevronRight className="size-5 stroke-3 -mr-2" />}
                    textClass="text-lg"
                    extraClass="self-end"
                />
            </div>
        </div>
    );
}