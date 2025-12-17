import Badge from "./Badge";

interface LongCardProps {
    title: string;
    launchName: string;
    id: string;
    successStatus: boolean;
    image?: string;
}

const glassCard =
    'rounded-3xl ring ring-inset ring-white/10 bg-black/30 backdrop-blur-xl shadow-lg shadow-black/20';

export default function LongCard({
    title,
    launchName,
    id,
    successStatus,
    image,
}: LongCardProps) {
    
    return (
        <div
            className={`relative flex flex-col gap-2 w-full h-full p-6 overflow-hidden ${glassCard}`}
        >
            {image && (
                <picture className="absolute inset-0 -z-10 w-full h-full">
                    <img
                        src={image}
                        alt=""
                        className="object-cover w-full h-full"
                    />
                </picture>
            )}

            {/* Title */}
            <h3 className="text-3xl tracking-tight font-medium">
                {title}
            </h3>

            {/* Launch info */}
            <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                    <span className="text-2xl tracking-tight font-semibold">
                        {launchName}
                    </span>

                    <Badge status={successStatus} />
                </div>

                <span className="text-xs font-medium">
                    {id}
                </span>
            </div>
        </div>
    );
}
