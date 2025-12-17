import Link from 'next/link';

export default function Sidebar() {
    return (
        <aside className="flex flex-col p-6 rounded-3xl ring ring-inset ring-white/10 bg-black/30 backdrop-blur-xl shadow-lg shadow-black/20">
            <h2 className="mb-4 font-semibold">Dashboard</h2>
            <nav>
                <ul className="space-y-2">
                    <li><Link href="/launches">Launches</Link></li>
                    <li><Link href="/rockets">Rockets</Link></li>
                    <li><Link href="/about">About</Link></li>
                </ul>
            </nav>
        </aside>
    );
}