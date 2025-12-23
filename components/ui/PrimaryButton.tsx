import { ElementType } from "react";

interface PrimaryButtonProps {
    text: string;
    Icon: ElementType;
    href?: string;
    iconClass?: string;
    textClass?: string;
    extraClass?: string;
    gap?: string;
}

export default function PrimaryButton({
    text, Icon, href, iconClass, gap = "gap-2", textClass, extraClass
}: PrimaryButtonProps) {

    const btnClass = `flex items-center w-fit px-4 py-2 ${gap}
    rounded-full ring ring-inset ring-white/20 bg-primary-base tracking-tight font-medium
    cursor-pointer transition ease-out duration-300
    hover:scale-105 ${extraClass}`;

    const content = (
        <>
            <span className={textClass}>{text}</span>
            <Icon className={`size-5 stroke-3 ${iconClass}`} />
        </>
    );

    return href ? (
        <a href={href} className={btnClass}>
            {content}
        </a>
    ) : (
        <button type="button" className={btnClass}>
            {content}
        </button>
    );
}