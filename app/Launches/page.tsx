import Card from "@/components/ui/Card";
import { getLaunches } from "@/lib/api/spacex"

export default async function Launches() {
    const launches = await getLaunches();
    return (
        <div className="flex flex-col p-24 gap-4 h-fit">
            <picture className="fixed inset-0 -z-50 w-full h-full">
                <img
                    src="/earthBg.jpg"
                    className="object-cover w-full h-full"
                    alt="Earth background"
                />
            </picture>

            <h1></h1>
            <main className="flex flex-wrap gap-4 h-fit">
                {launches.map((launch) => (
                    <Card
                        key={launch.id}
                        launchName={launch.name}
                        id={launch.id}
                        patch={launch.links.patch.small}
                        launchDate={launch.date_utc}
                        successStatus={launch.success}
                        details={launch.details}
                        hrefString='/'
                    />
                ))}
            </main>
        </div>
    );
}