import { formatDate } from "@/lib/utils/formatDate";
import Badge from "./Badge";
import PrimaryButton from "./PrimaryButton";
import { ChevronRight } from "lucide-react";
import { KeyRound } from "lucide-react";
import { Calendar } from "lucide-react";

interface LongCardProps {
    title: string;
    launchName: string;
    id: string;
    patch?: string;
    launchDate: string;
    successStatus: boolean;
    details?: string;
    bgImage?: string;
}

const glassCard =
    'rounded-3xl ring ring-inset ring-white/10 bg-black/30 backdrop-blur-xl shadow-lg shadow-black/20';

export default function LongCard({
    title,
    launchName,
    id,
    patch,
    launchDate,
    successStatus,
    details,
    bgImage,
}: LongCardProps) {

    return (
        <div
            className={`relative flex flex-col gap-4 w-full h-full p-6 overflow-hidden ${glassCard}`}
        >
            {bgImage && (
                <picture className="absolute inset-0 -z-10 w-full h-full">
                    <img
                        src={bgImage}
                        alt=""
                        className="object-cover w-full h-fit"
                    />
                </picture>
            )}

            <div className="flex flex-col gap-1">
                {/* Title */}
                <h3 className="text-xl tracking-tight font-medium">
                    {title}
                </h3>
                <div className="flex items-center gap-2">
                    <Calendar className="size-4" />
                    <span className="text-sm font-medium">{formatDate(launchDate)}</span>
                </div>
            </div>
            {/* Launch info */}
            <header className="flex items-center gap-2">
                {
                    patch && (
                        <picture className="size-10">
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
                        <span className="text-2xl tracking-tight font-semibold">
                            {launchName}
                        </span>
                        <Badge status={successStatus} />
                    </div>
                    <div className="flex items-center gap-2">
                        <KeyRound className="size-3.5" />
                        <span className="text-xs font-medium">{id}</span>
                    </div>
                </div>
            </header>

            <div className="flex flex-col gap-1">
                <h4 className="font-medium">Launch Details</h4>
                {
                    details ? (
                        <p className="text-sm leading-tight text-pretty line-clamp-5">
                            {details}
                        </p>
                    ) :
                        (<p className="text-sm">
                            Classified… or maybe just unknown.
                        </p>)
                }
            </div>
            <PrimaryButton
                text="See more"
                Icon={ChevronRight}
                iconClass="-mr-2 stroke-3"
                textClass="-mr-3"
                extraClass="mt-auto self-end bg-white/10 backdrop-blur-md"
            />
        </div>
    );
}
