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
    <main className={`flex flex-1 flex-col gap-4 md:min-w-140 p-4 md:px-6 h-full overflow-y-auto`}>
      <section className='flex flex-col gap-4'>
        <header className="flex items-center gap-2">
          <span className={`flex p-2 rounded-full ${glassCard}`}>
            <Clock className="size-6 text-secondary-400" />
          </span>
          <h1 className="text-2xl md:text-3xl tracking-tight font-medium">
            Recent Launches
          </h1>
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
              hrefString={launch.id}
            />
          ))}
        </div>
      </section>
      <PrimaryButton
        text="See All"
        icon={<ChevronRight className="size-5 stroke-3 -mr-2" />}
        textClass="-mr-1"
        extraClass='self-end'
        href="/Launches"
      />
    </main>
  );
}
