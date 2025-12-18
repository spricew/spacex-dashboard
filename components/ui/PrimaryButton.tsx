import { ElementType } from "react";

interface PrimaryButtonProps {
    text: string;
    Icon: ElementType;
    iconClass?: string;
    textClass?: string;
    gap?: string;
}

export default function PrimaryButton({ text, Icon, iconClass, gap="gap-2", textClass }: PrimaryButtonProps) {
    return (
        <button
            className={`flex items-center w-fit px-4 py-2 ${gap}
            rounded-full ring ring-inset ring-white/20 bg-primary-base
            cursor-pointer`}
        >
            <span className={textClass}>{text}</span>
            <Icon className={`size-5 ml-2 ${iconClass}`}/>
        </button>
    );
}