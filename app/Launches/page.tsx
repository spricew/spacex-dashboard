import Header from "@/components/layout/Header";
import Card from "@/components/ui/Card";
import { getLaunches } from "@/lib/api/spacex"
import { getRocketById } from "@/lib/api/spacex";

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
        <div className="flex flex-col h-screen">
            <Header />

            <picture className="fixed inset-0 -z-50 w-full h-full">
                <img
                    src="/earthBg.jpg"
                    className="object-cover w-full h-full"
                    alt="Earth background"
                />
            </picture>

            <div className="flex flex-col gap-6 px-24 py-18 ">
                <h2 className="text-3xl tracking-tight font-medium">
                    Recent Launches
                </h2>
                <main className="flex flex-wrap justify-center gap-4 h-fit w-[80em]">
                    {launchesWithRocket.map((launch) => (
                        <Card
                            key={launch.id}
                            launchName={launch.name}
                            id={launch.id}
                            patch={launch.links.patch.small}
                            launchDate={launch.date_utc}
                            rocket={launch.rocketName}
                            successStatus={launch.success}
                            details={launch.details}
                            hrefString='/'
                        />
                    ))}
                </main>
            </div>
        </div>
    );
}