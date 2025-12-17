import Link from 'next/link';
import { ElementType } from 'react';

interface ListItemProps {
    href: string;
    label: string;
    Icon: ElementType;
}

export default function ListItem({ href, label, Icon }: ListItemProps) {
    return (
        <li className='flex gap-4 items-center text-lg'>
            <Icon className="size-6 text-white/80" />
            <Link href={href}>{label}</Link>
        </li>
    );
}