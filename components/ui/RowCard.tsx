import { formatDate } from "@/lib/utils/formatDate";
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
}

export default function RowCard({
    launchName,
    id,
    patch,
    launchDate,
    successStatus,
    rocket,
    flightNum
}: RowCardProps) {
    return (
        <div className="flex flex-1 items-center justify-between p-6
            rounded-3xl ring ring-inset ring-white/10
           bg-black/40 ">
            {/* Launch info */}
            <header className="flex items-center gap-4">
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
                            <span className="text-2xl tracking-tight font-medium">
                                {launchName}
                            </span>
                            <Badge status={successStatus} />
                        </div>
                        <div className="flex items-center gap-2">
                            <KeyRound className="size-4" />
                            <span className="text-sm font-medium">{id}</span>
                        </div>
                    </div>


                    <div className="flex gap-2">
                        {rocket && (
                            <div className="flex gap-1.5 items-center">
                                <Rocket className="size-4" />
                                <span className="text-base tracking-tight font-medium">{rocket}</span>
                            </div>
                        )}
                        <div className="flex gap-1.5 items-center">
                            <Calendar className="size-4" />
                            {formatDate(launchDate)}
                        </div>

                        <div className="flex gap-1 items-center text-white/60">
                            <span className="text-base tracking-tight font-medium"> #{flightNum}</span>
                        </div>
                    </div>
                </div>
            </header>
            <ChevronRight className="size-10" aria-hidden />
        </div>
    );
}