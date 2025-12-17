import { Clock } from 'lucide-react';
import { ChevronRight } from 'lucide-react';

import RowCard from '@/components/ui/RowCard';
import PrimaryButton from '@/components/ui/PrimaryButton';

export default function PanelRecentLaunches() {
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
                <RowCard />
                <RowCard />
                <RowCard />

                <PrimaryButton text="See All" Icon={ChevronRight} />
            </div>
        </section>);
}