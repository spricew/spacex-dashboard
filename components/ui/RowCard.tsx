import { formatDate } from "@/lib/utils/formatDate";
import Badge from "./Badge";

import { KeyRound, Calendar, ChevronRight } from "lucide-react";

interface RowCardProps {
    launchName: string;
    id: string;
    patch?: string;
    launchDate: string;
    successStatus: boolean;
}

export default function RowCard({
    launchName,
    id,
    patch,
    launchDate,
    successStatus,
}: RowCardProps) {
    return (
        <div className="flex items-center justify-between p-6
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
                    <div className="flex items-center gap-2">
                        <span className="text-2xl tracking-tight font-medium">
                            {launchName}
                        </span>
                        <Badge status={successStatus} />
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                            <KeyRound className="size-4" />
                            <span className="text-xs font-medium">{id}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Calendar className="size-4" />
                            {formatDate(launchDate)}
                        </div>
                    </div>
                </div>
            </header>
            <ChevronRight className="size-10" aria-hidden />
        </div>
    );
}