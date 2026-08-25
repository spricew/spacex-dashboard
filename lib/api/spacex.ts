import { cache } from 'react';
import fs from 'fs';
import path from 'path';

export interface Launch {
    id: string;
    name: string;
    rocket: string;
    launchpad: string;
    success: boolean | null;
    upcoming: boolean;
    details: string | null;
    flight_number: number;
    date_utc: string;
    links: {
        patch: { small: string; large: string };
        flickr: { original: string[] };
        webcast: string | null;
        youtube_id: string | null;
        article: string | null;
    };
}

const launchesFilePath = path.join(process.cwd(), 'lib', 'data', 'launches.json');
let cachedLaunches: Launch[] = [];

function loadLaunches(): Launch[] {
    if (cachedLaunches.length === 0) {
        const fileData = fs.readFileSync(launchesFilePath, 'utf-8');
        cachedLaunches = JSON.parse(fileData);
    }
    return cachedLaunches;
}

const rockets: Record<string, string> = {
    '5e9d0d95eda69955f709d1eb': 'Falcon 1',
    '5e9d0d95eda69973a809d1ec': 'Falcon 9',
    '5e9d0d95eda69974db09d1ed': 'Falcon Heavy',
    '5e9d0d96ece2174fc709d1ee': 'Starship',
};

export const getRocketById = cache((id: string): { name: string } => ({
    name: rockets[id] ?? 'Unknown Rocket',
}));

export const getLaunchById = cache((id: string) => {
    const launch = loadLaunches().find((l) => l.id === id);
    if (!launch) throw new Error('Launch not found');
    return launch;
});

const BASE_URL = 'local';
export { BASE_URL };

export function getLaunches({
    page = 1,
    limit = 12,
    order = 'desc',
}: {
    page?: number;
    limit?: number;
    order?: 'asc' | 'desc';
}) {
    const launches = [...loadLaunches()].sort((a, b) => {
        const dateA = new Date(a.date_utc).getTime();
        const dateB = new Date(b.date_utc).getTime();
        return order === 'asc' ? dateA - dateB : dateB - dateA;
    });

    const totalDocs = launches.length;
    const totalPages = Math.ceil(totalDocs / limit);
    const offset = (page - 1) * limit;
    const docs = launches.slice(offset, offset + limit);

    return {
        docs,
        totalDocs,
        offset,
        limit,
        totalPages,
        page,
        pagingCounter: offset + 1,
        hasPrevPage: page > 1,
        hasNextPage: page < totalPages,
        prevPage: page > 1 ? page - 1 : null,
        nextPage: page < totalPages ? page + 1 : null,
    };
}

export const getRecentLaunches = cache(() =>
    getLaunches({ limit: 10, order: 'desc', page: 1 }).docs
);

export const getLatestLaunch = cache(() => {
    const pastLaunches = loadLaunches()
        .filter((l) => !l.upcoming)
        .sort((a, b) => new Date(b.date_utc).getTime() - new Date(a.date_utc).getTime());

    if (pastLaunches.length === 0) throw new Error('No latest launch');
    return pastLaunches[0];
});

export const getNextLaunch = cache(() => {
    const upcomingLaunches = loadLaunches()
        .filter((l) => l.upcoming)
        .sort((a, b) => new Date(a.date_utc).getTime() - new Date(b.date_utc).getTime());

    return upcomingLaunches[0] ?? getLatestLaunch();
});

interface Launchpad {
    name: string;
    locality: string;
    region: string;
    launch_attempts: number;
    launch_successes: number;
}

const defaultLaunchpad: Launchpad = {
    name: 'Unknown Launchpad',
    locality: 'Unknown',
    region: 'Unknown',
    launch_attempts: 0,
    launch_successes: 0,
};

export function getLaunchpadById(id: string): Launchpad {
    const launchpads: Record<string, Launchpad> = {
        '5e9e4501f509094ba4566f84': {
            name: 'CCSFS SLC 40',
            locality: 'Cape Canaveral',
            region: 'Florida',
            launch_attempts: 61,
            launch_successes: 59
        },
        '5e9e4502f5090995de566f86': {
            name: 'Kwajalein Atoll Omelek Island',
            locality: 'Omelek Island',
            region: 'Marshall Islands',
            launch_attempts: 5,
            launch_successes: 2
        },
        '5e9e4502f509092b78566f87': {
            name: 'VAFB SLC 4E',
            locality: 'Vandenberg Space Force Base',
            region: 'California',
            launch_attempts: 16,
            launch_successes: 16
        },
        '5e9e4502f509094188566f88': {
            name: 'KSC LC 39A',
            locality: 'Merritt Island',
            region: 'Florida',
            launch_attempts: 38,
            launch_successes: 38
        },
        '5e9e4502f509092706566f89': {
            name: 'SpaceX Starbase Boca Chica',
            locality: 'Boca Chica',
            region: 'Texas',
            launch_attempts: 1,
            launch_successes: 0
        }
    };

    if (launchpads[id]) {
        return launchpads[id];
    }
    return defaultLaunchpad;
}
