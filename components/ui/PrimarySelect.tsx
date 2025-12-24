import { ReactNode } from "react";
import { ChevronRight } from "lucide-react";

interface SelectProps {
    icon?: ReactNode;
    selectValue: string;
    disabled?: boolean;
    onChange?: () => void;
}

export default function PrimarySelect({ icon, selectValue, disabled, onChange }: SelectProps) {
    return (
        <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                {icon}
            </div>
            <select
                value={selectValue}
                onChange={onChange}
                disabled={disabled}
                className="appearance-none py-2 pl-10 pr-8 bg-white/5 ring ring-inset ring-white/10 
          rounded-xl text-base text-white focus:outline-none focus:ring-white/30 hover:bg-white/10
          cursor-pointer transition duration-300 ease-out disabled:opacity-50">

                <option value="desc" className="bg-zinc-900">Newest First</option>
                <option value="asc" className="bg-zinc-900">Oldest First</option>
            </select>

            {/* flechita decorativa del select */}
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <ChevronRight className="size-4 text-white/50 rotate-90" />
            </div>

        </div>
    );
}