import { CardSkeleton } from "./CardSkeleton";

export function Skeleton() {
    return (
        <div className="flex flex-col md:gap-6 gap-4">
            <div className="flex flex-col md:flex-row md:justify-between gap-8 md:gap-0">
                <h1 className="text-2xl text-center md:text-start md:text-3xl tracking-tight font-medium">
                    Recent Launches
                </h1>
            </div>

            {/* launches */}
            <main className="flex flex-wrap justify-center gap-1 md:gap-2 w-full">
                <CardSkeleton></CardSkeleton>
            </main>
        </div>
    );
}