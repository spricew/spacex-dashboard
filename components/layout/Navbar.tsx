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
    </header>
  );
}
