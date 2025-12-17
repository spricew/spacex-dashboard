interface LongCardProps {
    title: string;
    launchName: string;
    id: string;
    image?: string;
}

export default function LongCard({ title, launchName, id, image }: LongCardProps) {
    return (
        <div
            className="relative flex flex-col justify-start w-full h-full p-6 gap-2
            rounded-3xl ring ring-inset ring-white/10 bg-black/30
            backdrop-blur-xl shadow-lg shadow-black/20 overflow-hidden"
        >
            {image && (
                <>
                    <picture className="absolute inset-0 -z-10 w-full h-full">
                        <img
                            src={image}
                            alt=""
                            className="relative object-cover w-full h-full"
                        />
                    </picture>

                    {/* <div className="absolute inset-0 -z-5 bg-black/50" /> */}
                </>
            )}

            <h3 className="text-3xl tracking-tight font-medium">
                {title}
            </h3>


            <div className="flex flex-col gap-1">
                <span className="text-2xl tracking-tight font-medium">{launchName}</span>
                <span className="text-xs font-medium">{id}</span>
            </div>
        </div>
    );
}
