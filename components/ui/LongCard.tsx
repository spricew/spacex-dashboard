import Badge from "./Badge";

interface LongCardProps {
    title: string;
    launchName: string;
    id: string;
    successStatus: boolean;
    details?: string;
    image?: string;
}

const glassCard =
    'rounded-3xl ring ring-inset ring-white/10 bg-black/30 backdrop-blur-xl shadow-lg shadow-black/20';

export default function LongCard({
    title,
    launchName,
    id,
    successStatus,
    details,
    image,
}: LongCardProps) {

    return (
        <div
            className={`relative flex flex-col gap-4 w-full h-full p-6 overflow-hidden ${glassCard}`}
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
            <h3 className="text-xl tracking-tight font-medium">
                {title}
            </h3>

            {/* Launch info */}
            <header className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                    
                    <span className="text-2xl tracking-tight font-semibold">
                        {launchName}
                    </span>
                    <Badge status={successStatus} />
                </div>
                <span className="text-xs font-medium">{id}</span>
            </header>

            <div className="flex flex-col gap-1">
                <h4>Launch Details</h4>
                {
                    details ? (
                        <p className="text-sm leading-tight text-pretty line-clamp-5">
                            {details}
                        </p>
                    ) :
                        (<p className="text-sm text-justify">
                            Classified… or maybe just unknown.
                        </p>)
                }
            </div>
        </div>
    );
}
