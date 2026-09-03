export function CardSkeleton() {
    return (
        <div className="relative flex flex-col flex-1 gap-4 min-w-72 w-80 h-100 p-6
        rounded-3xl ring ring-inset ring-white/10 bg-black/30 backdrop-blur-xl shadow-lg shadow-black/20">

            <div className="flex justify-between items-start">
                <div className="size-12 rounded-full bg-white/10 animate-pulse" />
                <div className="h-6 w-20 rounded-full bg-white/10 animate-pulse" />
            </div>

            <div className="flex flex-col gap-2">
                <div className="h-6 w-3/4 rounded-lg bg-white/10 animate-pulse" />
                <div className="h-3 w-1/2 rounded-lg bg-white/10 animate-pulse" />
            </div>

            <div className="flex gap-4">
                <div className="h-4 w-24 rounded-lg bg-white/10 animate-pulse" />
                <div className="h-4 w-28 rounded-lg bg-white/10 animate-pulse" />
            </div>

            <div className="flex flex-col gap-2">
                <div className="h-4 w-32 rounded-lg bg-white/10 animate-pulse" />
                <div className="h-3 w-full rounded-lg bg-white/10 animate-pulse" />
                <div className="h-3 w-5/6 rounded-lg bg-white/10 animate-pulse" />
                <div className="h-3 w-2/3 rounded-lg bg-white/10 animate-pulse" />
            </div>

            <div className="mt-auto self-end h-10 w-32 rounded-full bg-white/10 animate-pulse" />
        </div>
    );
}
