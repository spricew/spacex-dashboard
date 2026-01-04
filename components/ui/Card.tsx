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
    extraClass?: string;
}

const glassCard =
    'rounded-3xl ring ring-inset ring-white/10 bg-black/30 backdrop-blur-xl shadow-lg shadow-black/20';

export default function Card({
    launchName,
    id,
    patch,
    launchDate,
    successStatus,
    isUpcoming,
    details,
    rocket,
    hrefString,
    extraClass
}: CardProps) {

    return (
        <div
            className={`scale-up relative flex flex-col flex-1 gap-4 min-w-72 w-80 h-100 p-6 overflow-hidden ${extraClass} ${glassCard}`}
        >

            <div className="flex justify-between items-start">
                {patch && (
                    <picture className="size-12">
                        <img
                            src={patch}
                            alt="launch patch"
                            className="object-contain w-full h-full"
                        />
                    </picture>
                )}
                <Badge status={successStatus} UpcomingState={isUpcoming} />

            </div>

            {/* Launch info */}
            <div className="flex flex-col gap-1">
                <span className="text-2xl tracking-tight leading-6.5 line-clamp-2 text-pretty font-semibold ">
                    {launchName}
                </span>
                <div className="flex items-center gap-2">
                    <KeyRound className="size-3.5 text-secondary-400" />
                    <span className="text-xs font-medium">{id}</span>
                </div>
            </div>

            <div className="flex gap-4">
                {rocket && (
                    <div className="flex gap-1.5 items-center">
                        <Rocket className="size-4 text-secondary-400" />
                        <span className="text-sm tracking-tight font-medium">{rocket}</span>
                    </div>
                )}

                <div className="flex items-center gap-1.5">
                    <Calendar className="size-4 text-secondary-400" />
                    <span className="text-sm font-medium">{formatDate(launchDate)}</span>
                </div>
            </div>

            <div className="flex flex-col gap-1">
                <h4 className="font-medium">Mission Details</h4>
                {details ? (
                    <p className="text-sm leading-tight text-pretty line-clamp-5">
                        {details}
                    </p>
                ) :
                    (<div className="flex items-center gap-2 p-4 bg-white/10 rounded-xl">
                        <CircleQuestionMark className="size-5 text-secondary-400" />
                        <p className="text-sm">
                            Classified… or maybe just unknown.
                        </p>
                    </div>
                    )}
            </div>

            {hrefString && (
                <PrimaryButton
                    text="See details"
                    icon={<ChevronRight className="size-5 stroke-3 -ml-1 -mr-2" />}
                    extraClass="mt-auto self-end bg-white/10 backdrop-blur-md
                    transition-color duration-300 ease-out hover:bg-white/20"
                    href={hrefString}
                />
            )}
        </div>
    );
}
