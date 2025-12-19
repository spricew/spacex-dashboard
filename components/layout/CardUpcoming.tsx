import { getRocketById, getUpcomingLaunch } from "@/lib/api/spacex";
import LongCard from "@/components/ui/LongCard";

export default async function CardUpcoming() {
    const launch = await getUpcomingLaunch();
    const rocket = await getRocketById(launch.rocket);

    return (
        <LongCard
            title="Next Launch"
            launchName={launch.name}
            id={launch.id}
            patch={launch.links.patch.small}
            launchDate={launch.date_utc}
            successStatus={launch.success}
            isUpcoming={launch.upcoming}
            details={launch.details}
            rocket={rocket.name}
            // bgImage="/test.png"
        />
    );
}