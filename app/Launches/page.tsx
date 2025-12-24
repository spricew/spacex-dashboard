import Navbar from "@/components/layout/Navbar";
import List from "@/components/layout/LaunchPage/List"
import { fetchLaunches } from "@/app/Launches/actions";

export default async function Launches() {
    const initialLaunches = await fetchLaunches(1);

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />

            <picture className="fixed inset-0 -z-50 w-full h-screen">
                <img
                    src="/earthBg.jpg"
                    className="object-cover w-full h-full"
                    alt="Earth background"
                />
            </picture>

            <div className="flex flex-col gap-6 px-4 py-8 md:px-24 md:py-18">
                <List initialLaunches={initialLaunches} />
            </div>
        </div>
    );
}