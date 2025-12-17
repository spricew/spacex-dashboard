import { Rocket } from 'lucide-react';

import Header from '@/components/layout/Header';
import Banner from '@/components/ui/Banner';
import SquareCard from '@/components/ui/SquareCard';
import LargeCard from '@/components/ui/LargeCard';

export default function Home() {
  return (
    <div className="relative flex flex-col h-screen w-full">
      <Header />
      <picture className="absolute inset-0 -z-50 w-full h-screen">
        <img src="/earthBg.jpg"
          className="object-cover w-full h-full" />
      </picture>

      <div className="grid grid-cols-[350px_1fr] gap-4 h-screen w-full p-4">
        <aside className="flex flex-col w-full col-span-1 p-6 flex-1
        rounded-3xl ring ring-inset ring-white/10
        bg-black/30 backdrop-blur-xl shadow-lg shadow-black/20">
          <h2 className="mb-4 font-semibold">Dashboard</h2>
          <nav>
            <ul className="space-y-2">
              <li><a href="/launches">Launches</a></li>
              <li><a href="/rockets">Rockets</a></li>
              <li><a href="/about">About</a></li>
            </ul>
          </nav>
        </aside>

        <main className="grid grid-rows-[200px_1fr] gap-8">

          {/* general info section */}
          <div className="grid grid-cols-[42em_1fr] gap-4">
            {/* latest launch */}
            <Banner />

            {/* other info */}
            <div className='flex gap-4'>
              <SquareCard title="Tarjeta 1" content="Contenido de la tarjeta 1" />
              <SquareCard title="Tarjeta 2" content="Contenido de la tarjeta 2" />
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <span className="flex justify-center items-center size-12 
                rounded-full ring ring-inset ring-white/10
              bg-white/10 backdrop-blur-xl">
                <Rocket className="w-full aspect-square shrink-0 text-white/80" />
              </span>
              <h1 className='text-3xl tracking-tight font-medium'>Recent Launches</h1>
            </div>
            <div className="flex flex-col h-full gap-2">
              {/* List of recent launches would go here */}
              <LargeCard />
              <LargeCard />
              <LargeCard />
              <button className='py-2 px-6 flex w-fit rounded-full
              ring ring-inset ring-white/20 bg-primary-base
              '>
                See all
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
