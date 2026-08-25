interface BadgeProps {
    status: boolean | null;
    UpcomingState?: boolean;
    extraClass?: string;
}

export default function Badge({ status, UpcomingState, extraClass }: BadgeProps) {
    let statusStyles = status === true
        ? {
            badge: 'text-green-400 bg-green-900 ring-green-400/20',
            dot: 'bg-green-400',
            label: 'Success',
        }
        : status === false
        ? {
            badge: 'text-red-300 bg-red-800 ring-red-400/20',
            dot: 'bg-red-400',
            label: 'Failed',
        }
        : {
            badge: 'text-yellow-300 bg-yellow-900 ring-yellow-400/20',
            dot: 'bg-yellow-400',
            label: 'Unknown',
        };

    if (UpcomingState) {
        statusStyles = {
            badge: 'text-blue-300 bg-blue-900 ring-blue-400/20',
            dot: 'bg-blue-400',
            label: 'Upcoming',
        }
    }

    return (
        <span
            className={`flex flex-nowrap items-center h-fit w-fit px-1.5 py-0.5 
             rounded-full ring ring-inset text-xs font-medium text-nowrap
            ${extraClass} ${statusStyles.badge}`}
        >
            <span className={`mr-1 inline-block size-1.5 rounded-full ${statusStyles.dot}`}/>
            {statusStyles.label}
        </span>
    );
}