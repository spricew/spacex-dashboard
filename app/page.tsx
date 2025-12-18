import { getLatestLaunch } from '@/lib/api/spacex';

import Header from '@/components/layout/Header';
import Sidebar from '@/components/layout/Sidebar';
import PanelRecentLaunches from '@/components/layout/PanelRecentLaunches';
import Banner from '@/components/ui/Banner';
import SquareCard from '@/components/ui/SquareCard';
import LongCard from '@/components/ui/LongCard';
import CardUpcoming from '@/components/layout/CardUpcoming';

export default async function Home() {
  const launch = await getLatestLaunch();
  return (
    <div className="relative flex flex-col h-screen w-full">
      <Header />

      <picture className="absolute inset-0 -z-50 w-full h-full">
        <img
          src="/earthBg.jpg"
          className="object-cover w-full h-full"
          alt="Earth background"
        />
      </picture>

      <div className="grid grid-cols-[350px_1fr] gap-2 flex-1 p-2">

        {/* left side */}
        <section className='grid grid-rows-[130px_1fr] gap-2'>
          <Sidebar />
          <LongCard
            title="Latest Launch"
            launchName={launch.name}
            id={launch.id}
            patch={launch.links.patch.small}
            launchDate={launch.date_utc}
            successStatus={launch.success}
            details={launch.details}
            bgImage="/test.png" />
        </section>

        {/* Main content */}
        <main className="grid grid-rows-[200px_1fr] gap-2">
          {/* General info */}
          <section className="grid grid-cols-[42em_1fr] gap-2">
            <Banner />
            <div className="flex gap-2">
              <SquareCard title="Succesfull Launches" content="Contenido de la tarjeta 1" />
              <SquareCard title="Failed Launches" content="Contenido de la tarjeta 2" />
            </div>
          </section>

          <div className='grid grid-cols-[2fr_1fr] gap-2'>
            {/* Recent launches */}
            <PanelRecentLaunches />

            {/* Upcoming launch */}
            <CardUpcoming />
          </div>
        </main>
      </div>
    </div>
  );
}