import { Rocket } from 'lucide-react';

import Header from '@/components/layout/Header';
import Sidebar from '@/components/layout/Sidebar';
import Banner from '@/components/ui/Banner';
import SquareCard from '@/components/ui/SquareCard';
import LargeCard from '@/components/ui/LargeCard';

const glassCard =
  'rounded-3xl ring ring-inset ring-white/10 bg-black/30 backdrop-blur-xl shadow-lg shadow-black/20';

export default function Home() {
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

        <section className='grid grid-rows-[300px_1fr]'>
          {/* Sidebar */}
          <Sidebar />
        </section>


        {/* Main content */}
        <main className="grid grid-rows-[200px_1fr] gap-2">
          {/* General info */}
          <section className="grid grid-cols-[42em_1fr] gap-2">
            <Banner />

            <div className="flex gap-2">
              <SquareCard title="Tarjeta 1" content="Contenido de la tarjeta 1" />
              <SquareCard title="Tarjeta 2" content="Contenido de la tarjeta 2" />
            </div>
          </section>

          {/* Recent launches */}
          <section className={`flex flex-col gap-4 p-6 ${glassCard}`}>
            <header className="flex items-center gap-2">
              <span className={`flex size-12 items-center justify-center rounded-full bg-white/10 ${glassCard}`}>
                <Rocket className="w-6 h-6 text-white/80" />
              </span>
              <h2 className="text-3xl tracking-tight font-medium">
                Recent Launches
              </h2>
            </header>

            <div className="flex flex-col gap-2 flex-1">
              <LargeCard />
              <LargeCard />
              <LargeCard />

              <button
                className="mt-auto w-fit rounded-full px-6 py-2 ring ring-inset ring-white/20 bg-primary-base"
              >
                See all
              </button>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
