import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="flex justify-between items-center px-4 md:px-12 py-6
      bg-primary-800 shadow-lg">

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
    </header>
  );
}
