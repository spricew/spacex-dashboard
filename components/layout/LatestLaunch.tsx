import { getLatestLaunch } from "@/lib/api/spacex";
import LongCard from "@/components/ui/LongCard";

export default async function LatestLaunch() {
    const launch = await getLatestLaunch();
    return (
        <LongCard
            title="Latest Launch"
            launchName={launch.name}
            id={launch.id}
            patch={launch.links.patch.small}
            launchDate={launch.date_utc}
            successStatus={launch.success}
            details={launch.details}
            hrefString='/'
            bgImage="/test.png" />
    );
}