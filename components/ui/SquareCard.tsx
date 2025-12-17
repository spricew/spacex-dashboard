interface SquareCardProps {
    title: string;
    content?: string;
}

export default function SquareCard({ title, content }: SquareCardProps) {
    return (
        <div className="flex flex-col justify-center w-full h-full p-6
            rounded-3xl ring ring-inset ring-white/10
           bg-white/10 backdrop-blur-xl shadow-lg shadow-black/20">
            <span className="text-2xl font-medium">{title}</span>
            <p className="text-base">{content}</p>
        </div>
    );
}