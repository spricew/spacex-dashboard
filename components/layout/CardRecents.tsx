import { getRecentLaunches, getRocketById } from '@/lib/api/spacex';
import { Clock, ChevronRight } from 'lucide-react';

import RowCard from '@/components/ui/RowCard';
import PrimaryButton from '@/components/ui/PrimaryButton';

export default async function PanelRecentLaunches() {
  const launches = await getRecentLaunches();

  const launchesWithRocket = await Promise.all(
    launches.map(async (launch) => {
      const rocket = await getRocketById(launch.rocket);

      return {
        ...launch,
        rocketName: rocket.name,
      };
    })
  );

  const glassCard =
    'rounded-3xl ring ring-inset ring-white/10 bg-black/30 backdrop-blur-xl shadow-lg shadow-black/20';

  return (
    <section className={`flex flex-1 flex-col gap-4 p-6 ${glassCard} h-full ovehi`}>
      <header className="flex items-center gap-2">
        <span className={`flex p-2 rounded-full ${glassCard}`}>
          <Clock className="size-6 text-white/80" />
        </span>
        <h2 className="text-2xl tracking-tight font-medium">
          Recent Launches
        </h2>
      </header>

      <div className="flex flex-col gap-2 h-full">
        {launchesWithRocket.map((launch) => (
          <RowCard
            key={launch.id}
            launchName={launch.name}
            id={launch.id}
            patch={launch.links.patch.small}
            launchDate={launch.date_utc}
            successStatus={launch.success}
            rocket={launch.rocketName}
            flightNum={launch.flight_number}
          />
        ))}
      </div>
      <PrimaryButton
        text="See All"
        Icon={ChevronRight}
        iconClass="-mr-2"
        textClass="-mr-3"
        extraClass='self-end'
        href="/Launches"
      />
    </section>
  );
}
