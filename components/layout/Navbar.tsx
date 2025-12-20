import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="flex justify-between items-center px-12 py-6
      bg-primary-800 shadow-lg">

      <Link href={"/"} >
        <Image
          src="/SpaceX-White-Logo.svg"
          alt="SpaceX Logo"
          className="object-cover w-40 h-10"
          width={128}
          height={32}
          priority
        />
      </Link>
    </header>
  );
}
