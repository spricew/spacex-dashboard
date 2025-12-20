import Navbar from '@/components/layout/Navbar';
import Sidebar from '@/components/layout/Sidebar';
import CardRecents from '@/components/layout/CardRecents';
import Banner from '@/components/ui/Banner';
import SquareCard from '@/components/ui/SquareCard';
import CardUpcoming from '@/components/layout/CardUpcoming';
import LatestLaunch from '@/components/layout/LatestLaunch';

export default function Home() {
  return (
    <div className="relative flex flex-col h-screen w-full">
      <Navbar />

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
          <LatestLaunch />
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
            <CardRecents />

            {/* Upcoming launch */}
            <CardUpcoming />
          </div>
        </main>
      </div>
    </div>
  );
}