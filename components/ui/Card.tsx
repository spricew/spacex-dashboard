import { formatDate } from "@/lib/utils/formatDate";
import Badge from "./Badge";
import PrimaryButton from "./PrimaryButton";
import { ChevronRight, KeyRound, Calendar, CircleQuestionMark, Rocket } from "lucide-react";

interface CardProps {
    id: string;
    launchName: string;
    patch?: string;
    launchDate: string;
    successStatus: boolean;
    isUpcoming?: boolean;
    details?: string;
    rocket?: string;
    hrefString?: string;
}

const glassCard =
    'rounded-3xl ring ring-inset ring-white/10 bg-black/30 backdrop-blur-xl shadow-lg shadow-black/20';

export default function CardProps({
    launchName,
    id,
    patch,
    launchDate,
    successStatus,
    isUpcoming,
    details,
    rocket,
    hrefString,
}: CardProps) {

    return (
        <div
            className={`relative flex flex-col gap-4 w-70 h-80 p-6 overflow-hidden ${glassCard}`}
        >
            <div className="flex flex-col gap-1">

                {rocket && (
                    <div className="flex gap-1.5 items-center">

                        <Rocket className="size-4" />
                        <span className="text-base tracking-tight font-medium">{rocket}</span>
                    </div>
                )}

                <div className="flex items-center gap-2">
                    <Calendar className="size-4" />
                    <span className="text-sm font-medium">{formatDate(launchDate)}</span>
                </div>
            </div>
            {/* Launch info */}
            <header className="flex items-center gap-2">
                {patch && (
                    <picture className="size-10">
                        <img
                            src={patch}
                            alt="launch patch"
                            className="object-contain w-full h-full"
                        />
                    </picture>
                )}
                <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                        <span className="text-2xl tracking-tight font-semibold">
                            {launchName}
                        </span>
                        <Badge status={successStatus} UpcomingState={isUpcoming} />
                    </div>
                    <div className="flex items-center gap-2">
                        <KeyRound className="size-3.5" />
                        <span className="text-xs font-medium">{id}</span>
                    </div>
                </div>
            </header>

            <div className="flex flex-col gap-1">
                <h4 className="font-medium">Launch Details</h4>
                {details ? (
                    <p className="text-sm leading-tight text-pretty line-clamp-5">
                        {details}
                    </p>
                ) :
                    (<div className="flex gap-2 items-center">
                        <CircleQuestionMark className="size-5" />
                        <p className="text-sm">
                            Classified… or maybe just unknown.
                        </p>
                    </div>
                    )}
            </div>

            {hrefString && (
                <PrimaryButton
                    text="See more"
                    Icon={ChevronRight}
                    iconClass="-mr-2 stroke-3"
                    textClass="-mr-3"
                    extraClass="mt-auto self-end bg-white/10 backdrop-blur-md"
                    href={hrefString}
                />
            )}
        </div>
    );
}
