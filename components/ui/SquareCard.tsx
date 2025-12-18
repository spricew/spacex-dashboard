interface SquareCardProps {
    title: string;
    content?: string;
    image?: string;
}

export default function SquareCard({ title, content, image }: SquareCardProps) {
    return (
        <div
            className="relative flex flex-col justify-start w-full h-full p-6 gap-2
            rounded-3xl ring ring-inset ring-white/10 bg-black/30
            backdrop-blur-xl shadow-lg shadow-black/20 overflow-hidden"
        >
            {image && (
                <picture className="absolute inset-0 -z-10 w-full h-full">
                    <img
                        src={image}
                        alt=""
                        className="relative object-cover w-full h-full"
                    />
                </picture>
            )}

            <h3 className="text-2xl tracking-tight font-medium">
                {title}
            </h3>

            {content && (
                <p className="text-base">
                    {content}
                </p>
            )}
        </div>
    );
}
