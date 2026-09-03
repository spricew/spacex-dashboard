import { CardSkeleton } from "./CardSkeleton";
import { RowCardSkeleton } from "./RowCardSkeleton";

export function Skeleton() {
    return (
        <div className="flex flex-col md:gap-6 gap-4">
            <div className="flex flex-col md:flex-row md:justify-between gap-8 md:gap-0">
                <h1 className="text-2xl text-center md:text-start md:text-3xl tracking-tight font-medium">
                    Recent Launches
                </h1>
                <div className="h-10 w-48 rounded-xl bg-white/10 animate-pulse" />
            </div>

            {/* launches */}
            <main className="flex flex-wrap justify-center gap-1 md:gap-2 w-full">
                {Array.from({ length: 20 }).map((_, i) => (
                    <div key={i}>
                        <div className="w-full md:hidden">
                            <RowCardSkeleton />
                        </div>
                        <div className="hidden md:flex flex-1 w-80">
                            <CardSkeleton />
                        </div>
                    </div>
                ))}
            </main>
        </div>
    );
}
