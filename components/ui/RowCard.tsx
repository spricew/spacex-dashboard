import { formatDate } from "@/lib/utils/formatDate";
import Badge from "./Badge";

import { KeyRound } from "lucide-react";
import { Calendar } from "lucide-react";

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
        <div className="p-6
            rounded-3xl ring ring-inset ring-white/10
           bg-black/40 ">
            {/* Launch info */}
            <header className="flex items-center gap-4">
                {
                    patch && (
                        <picture className="size-12">
                            <img
                                src={patch}
                                alt="launch patch"
                                className="object-contain w-full h-full"
                            />
                        </picture>
                    )
                }
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
                            <span className="flex">{formatDate(launchDate)}</span>
                        </div>

                    </div>
                </div>
            </header>
        </div>
    );
}