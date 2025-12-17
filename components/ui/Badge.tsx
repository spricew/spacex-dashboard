interface BadgeProps {
    status: boolean;
}

export default function Badge({ status }: BadgeProps) {
    const statusStyles = status
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

    return (
        <span
            className={`flex items-center px-1.5 py-0.5 text-xs font-medium rounded-full ring ring-inset ${statusStyles.badge}`}
        >
            <span
                className={`mr-1 inline-block size-1.5 rounded-full ${statusStyles.dot}`}
            />
            {statusStyles.label}
        </span>
    );
}