import ListItem from "@/components/ui/ListItem";
import { Home } from "lucide-react";
import { Rocket } from "lucide-react";

export default function Sidebar() {
    return (
        <aside className="flex flex-col p-6 rounded-3xl justify-center
        ring ring-inset ring-white/10 bg-black/30 backdrop-blur-xl shadow-lg shadow-black/20">
            <nav>
                <ul className="space-y-4">
                    <ListItem href="/" label="Home" Icon={Home} />
                    <ListItem href="/launches" label="Launches" Icon={Rocket} />
                </ul>
            </nav>
        </aside>
    );
}