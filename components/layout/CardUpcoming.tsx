import { getUpcomingLaunch } from "@/lib/api/spacex"
import LongCard from "@/components/ui/LongCard";

export default async function CardUpcoming() {
    const upcoming = await getUpcomingLaunch();
    return (
        <LongCard
            title="Next Launch"
            launchName={upcoming.name}
            id={upcoming.id}
            patch={upcoming.links.patch.small}
            launchDate={upcoming.date_utc}
            successStatus={upcoming.success}
            isUpcoming={upcoming.upcoming}
            details={upcoming.details}
            // bgImage="/test3.png"
        />
    );
}