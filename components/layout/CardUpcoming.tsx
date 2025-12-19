import { getRocketById } from "@/lib/api/spacex";
import { getUpcomingLaunch } from "@/lib/api/spacex";
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
            // details={launch.details}
details="Adipisicing velit adipisicing irure laboris occaecat consequat qui. Sint enim cillum ea cillum. Ullamco deserunt anim enim excepteur id nulla do anim officia eu tempor nisi. Deserunt et dolore reprehenderit dolore aliquip consectetur sunt commodo est anim. Cillum elit mollit enim excepteur commodo non sint nostrud aute nisi sint quis. Veniam sint et est sit pariatur."
            rocket={rocket.name}
            bgImage="/test.png"
        />
    );
}