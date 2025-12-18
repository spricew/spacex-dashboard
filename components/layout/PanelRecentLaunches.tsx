import { getRecentLaunches } from '@/lib/api/spacex';

import { Clock } from 'lucide-react';
import { ChevronRight } from 'lucide-react';

import RowCard from '@/components/ui/RowCard';
import PrimaryButton from '@/components/ui/PrimaryButton';

export default async function PanelRecentLaunches() {
  const launches = await getRecentLaunches();

  const glassCard =
    'rounded-3xl ring ring-inset ring-white/10 bg-black/30 backdrop-blur-xl shadow-lg shadow-black/20';

  return (
    <section className={`flex flex-col gap-4 p-6 ${glassCard}`}>
      <header className="flex items-center gap-2">
        <span className={`flex size-12 items-center justify-center rounded-full ${glassCard}`}>
          <Clock className="w-6 h-6 text-white/80" />
        </span>
        <h2 className="text-3xl tracking-tight font-medium">
          Recent Launches
        </h2>
      </header>

      <div className="flex flex-col gap-2 flex-1">
        {launches.map((launch) => (
          <RowCard
            key={launch.id}
            launchName={launch.name}
            id={launch.id}
            patch={launch.links.patch.small}
            launchDate={launch.date_utc}
            successStatus={launch.success}
            // patch={launch.links?.patch?.small}
          />
        ))}

        <PrimaryButton
          text="See All"
          Icon={ChevronRight}
          iconClass="-mr-2"
          textClass="-mr-3"
        />
      </div>
    </section>
  );
}
