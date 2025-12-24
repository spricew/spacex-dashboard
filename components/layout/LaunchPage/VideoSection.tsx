export default function VideoSection({ url }: { url: string }) {
    return (
        <section className="max-w-4xl">
            <h2 className="text-2xl font-medium mb-2">Launch Video</h2>
            <iframe
                src={url}
                className="w-full aspect-video rounded-xl"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
        </section>
    );
}