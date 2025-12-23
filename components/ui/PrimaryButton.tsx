"use client";

import { ReactNode } from "react";
import Link from "next/link";

interface PrimaryButtonProps {
    text: string;
    icon?: ReactNode; 
    href?: string;
    textClass?: string;
    extraClass?: string;
    onClick?: () => void;
}

export default function PrimaryButton({
    text, 
    icon,
    href, 
    textClass, 
    extraClass, 
    onClick
}: PrimaryButtonProps) {

    const btnClass = `flex items-center w-fit px-4 py-2 gap-2
    rounded-full ring ring-inset ring-white/20 bg-primary-base tracking-tight font-medium
    cursor-pointer transition ease-out duration-300
    hover:scale-105 ${extraClass}`;

    const content = (
        <>
            <span className={textClass}>{text}</span>
            {icon}
        </>
    );

    if (href) {
        return (
            <Link href={href} className={btnClass} onClick={onClick}>
                {content}
            </Link>
        );
    }

    return (
        <button type="button" className={btnClass} onClick={onClick}>
            {content}
        </button>
    );
}