import { Suspense } from "react";
import Navbar from "@/components/layout/Navbar";
import List from "@/components/layout/LaunchPage/List";
import { fetchLaunches } from "@/app/Launches/actions";
import Image from "next/image";
import { Skeleton } from "@/components/ui/Skeletons/Skeleton";

export default async function Launches() {
    const initialLaunches = fetchLaunches(1);

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />

            <div className="fixed inset-0 -z-50 w-full h-full">
                <Image
                    src="/earthBg.jpg"
                    fill
                    className="object-cover"
                    alt="Earth background"
                    priority
                    sizes="100vw"
                />
            </div>

            <div className="flex flex-col gap-6 px-4 py-8 md:px-24 md:py-18">
                <Suspense fallback={
                    <Skeleton />
                }>
                    <List initialLaunches={initialLaunches} />
                </Suspense>
            </div>
        </div>
    );
}
