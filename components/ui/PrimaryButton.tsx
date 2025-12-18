import { ElementType } from "react";

interface PrimaryButtonProps {
    text: string;
    Icon: ElementType;
    iconClass?: string;
    textClass?: string;
    extraClass?: string;
    gap?: string;
}

export default function PrimaryButton({ text, Icon, iconClass, gap="gap-2", textClass, extraClass }: PrimaryButtonProps) {
    return (
        <button
            className={`flex items-center w-fit px-4 py-2 ${gap}
            rounded-full ring ring-inset ring-white/20 bg-primary-base tracking-tight font-medium
            cursor-pointer ${extraClass}`}
        >
            <span className={textClass}>{text}</span>
            <Icon className={`size-5 ml-2 ${iconClass}`}/>
        </button>
    );
}