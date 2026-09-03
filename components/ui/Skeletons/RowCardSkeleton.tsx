export function RowCardSkeleton() {
    return (
        <div className="flex flex-1 items-center justify-between gap-1 p-5
        rounded-3xl ring ring-inset ring-white/10 bg-black/40 backdrop-blur-xl">

            {/* Left side: patch + info */}
            <header className="flex items-center gap-4">
                {/* Patch */}
                <div className="flex shrink-0 size-12">
                    <div className="h-full w-full rounded-full bg-white/10 animate-pulse" />
                </div>

                <div className="flex flex-col gap-1.5">
                    {/* Name + flight number */}
                    <div className="flex items-center gap-2">
                        <div className="h-5 w-40 rounded-lg bg-white/10 animate-pulse" />
                        <div className="h-4 w-16 rounded-lg bg-white/10 animate-pulse" />
                    </div>

                    {/* Id */}
                    <div className="flex items-center gap-2">
                        <div className="size-4 rounded-full bg-white/10 animate-pulse" />
                        <div className="h-3 w-24 rounded-lg bg-white/10 animate-pulse" />
                    </div>

                    {/* Badge + rocket + date */}
                    <div className="flex gap-2 items-center">
                        <div className="h-5 w-16 rounded-full bg-white/10 animate-pulse" />
                        <div className="h-4 w-24 rounded-lg bg-white/10 animate-pulse" />
                        <div className="h-4 w-28 rounded-lg bg-white/10 animate-pulse" />
                    </div>
                </div>
            </header>

            {/* Chevron */}
            <div className="size-7 rounded-lg bg-white/10 animate-pulse shrink-0" />
        </div>
    );
}
