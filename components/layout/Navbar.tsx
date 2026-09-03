import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="flex justify-between items-center px-4 md:px-12 py-6
      bg-primary-800 shadow-lg relative">

      <Link href={"/"} className="transition ease-out duration-300 hover:scale-105">
        <Image
          src="/SpaceX-White-Logo.svg"
          alt="SpaceX Logo"
          className="object-cover w-40 h-10"
          width={128}
          height={128}
          priority
        />
      </Link>

      <div className="flex gap-2 items-center">

        {/* API Migration Status Badge */}
        <div className="flex items-center group relative">
          <div className="flex items-center space-x-2 bg-yellow-500/20 text-yellow-300 px-3 py-1.5 rounded-full border border-yellow-500/30 text-sm font-medium cursor-help transition-colors hover:bg-yellow-500/30">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
            <span className="hidden sm:inline">Offline Mode</span>
          </div>

          {/* Tooltip */}
          <div className="absolute right-0 top-full mt-2 w-72 p-4 bg-gray-900 text-gray-200 text-xs rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 border border-gray-700">
            <p className="font-semibold text-yellow-400 mb-1 text-sm">SpaceX API Offline</p>
            <p>The official community API is currently archived and unresponsive. To ensure 100% reliability, this dashboard is running smoothly using a secure local static data snapshot.</p>
          </div>
        </div>

        <Link
          href="https://github.com/spricew/spacex-dashboard"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-300 transition-colors duration-200"
        >
          <svg className="size-7" fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
          </svg>
        </Link>
      </div>
    </header>
  );
}
