import { ElementType } from "react";

interface PrimaryButtonProps {
    text: string;
    Icon: ElementType;
}

export default function PrimaryButton({ text, Icon }: PrimaryButtonProps) {
    return (
        <button
            className="flex items-center w-fit px-4 py-2
            rounded-full ring ring-inset ring-white/20 bg-primary-base
            cursor-pointer"
        >
            {text}
            <Icon className="size-5" />
        </button>
    );
}