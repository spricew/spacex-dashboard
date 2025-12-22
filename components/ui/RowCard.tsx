import { formatDate } from "@/lib/utils/formatDate";
import Link from "next/link";
import Badge from "./Badge";

import { KeyRound, Calendar, ChevronRight, Rocket } from "lucide-react";

interface RowCardProps {
    launchName: string;
    id: string;
    patch?: string;
    launchDate: string;
    successStatus: boolean;
    rocket: string;
    flightNum: string;
    hrefString: string;
    extraClass?: string;
}

export default function RowCard({
    launchName,
    id,
    patch,
    launchDate,
    successStatus,
    rocket,
    flightNum,
    hrefString,
    extraClass
}: RowCardProps) {
    return (
        <Link href={`/Launch/${hrefString}`} className="transition ease-out duration-300 hover:scale-102">

            <div className={`flex flex-1 items-center justify-between p-4 md:p-6
            rounded-3xl ring ring-inset ring-white/10 bg-black/40 backdrop-blur-xl ${extraClass}`}>
                {/* Launch info */}
                <header className="flex items-center gap-2 md:gap-4">
                    {patch && (
                        <div className="size-12">
                            <img
                                src={patch}
                                alt="launch patch"
                                className="h-full w-full object-contain"
                            />
                        </div>
                    )}
                    <div className="flex flex-col gap-1">
                        <div className="flex flex-col">
                            <div className="flex items-center gap-2">
                                <span className="text-lg md:text-2xl tracking-tight font-medium line-clamp-1 w-3/4 shrink">
                                    {launchName} ad dsaads asd asd asd da ads asdad
                                </span>
                                <div className="flex gap-1 items-center text-white/60">
                                    <span className="w-full text-nowrap text-xs md:text-base tracking-tight font-medium shrink-0">
                                        Flight #{flightNum}
                                    </span>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <KeyRound className="size-4" />
                                <span className="text-xs md:text-sm font-medium">{id}</span>
                            </div>
                        </div>
                        <div className="flex gap-2 items-center text-white/80">
                            <Badge status={successStatus} extraClass="hidden md:inline" />
                            {rocket && (
                                <div className="flex gap-1.5 items-center shrink-0">
                                    <Rocket className="size-4" />
                                    <span className="text-xs md:text-base tracking-tight font-medium">{rocket}</span>
                                </div>
                            )}
                            <div className="flex gap-1.5 items-center shrink-0">
                                <Calendar className="size-4" />
                                <span className="text-xs md:text-base tracking-tight font-medium">{formatDate(launchDate)}</span>
                            </div>
                        </div>
                    </div>
                </header>

                <ChevronRight className="size-7 md:size-10 -mr-1 shrink-0" />
            </div>
        </Link>
    );
}