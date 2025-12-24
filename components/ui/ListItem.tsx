import Link from 'next/link';
import { ElementType } from 'react';

interface ListItemProps {
    href: string;
    label: string;
    Icon: ElementType;
}

export default function ListItem({ href, label, Icon }: ListItemProps) {
    return (
        <li className='flex gap-4 items-center text-lg font-medium tracking-wide
        transition duration-300 ease-out hover:scale-102 hover:text-secondary-400'>
            <Icon className="size-6" />
            <Link href={href}>{label}</Link>
        </li>
    );
}