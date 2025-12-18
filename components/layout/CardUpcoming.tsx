import { getUpcomingLaunch } from "@/lib/api/spacex"
import SquareCard from "@/components/ui/SquareCard";

export default async function CardUpcoming() {
    return (
        <SquareCard title="Upcoming Launches" content="Some info about upcoming launches" />
    );
}