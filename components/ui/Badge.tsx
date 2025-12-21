interface BadgeProps {
    status: boolean;
    UpcomingState?: boolean;
    extraClass?: string;
}

export default function Badge({ status, UpcomingState, extraClass }: BadgeProps) {
    let statusStyles = status
        ? {
            badge: 'text-green-400 bg-green-900 ring-green-400/20',
            dot: 'bg-green-400',
            label: 'Success',
        }
        : {
            badge: 'text-red-300 bg-red-800 ring-red-400/20',
            dot: 'bg-red-400',
            label: 'Failed',
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
            className={`flex items-center h-fit w-fit px-1.5 py-0.5 text-xs font-medium rounded-full ring ring-inset 
            ${extraClass} ${statusStyles.badge}`}
        >
            <span
                className={`mr-1 inline-block size-1.5 rounded-full ${statusStyles.dot}`}
            />
            {statusStyles.label}
        </span>
    );
}