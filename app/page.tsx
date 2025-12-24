import Navbar from '@/components/layout/Navbar';
import Sidebar from '@/components/layout/Home/Sidebar';
import CardRecents from '@/components/layout/Home/CardRecents/CardRecents';
import CardUpcoming from '@/components/layout/Home/CardUpcoming';
import LatestLaunch from '@/components/layout/Home/LatestLaunch';

export default function Home() {
  return (
    <div className="relative flex flex-col h-full lg:h-screen w-full">
      <Navbar />

      <picture className="fixed -z-50 w-full h-full">
        <img
          src="/earthBg.jpg"
          className="object-cover w-full h-full"
          alt="Earth background"
        />
      </picture>

      <div className="flex-1 h-fit p-4 md:p-0 overflow-y-auto lg:overflow-hidden">

        <div className="grid h-full grid-cols-1 md:grid-cols-[350px_1fr]">
          {/* left side */}
          <section className='md:grid grid-rows-[1fr_3fr] gap-2 md:py-4 md:pl-4'>
            <Sidebar />
            <LatestLaunch />
          </section>

          {/* Recent launches */}
            <CardRecents />
        </div>
      </div>
    </div>
  );
} 