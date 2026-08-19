import fs from 'fs';
import path from 'path';

// Load launches data statically on the server side
const launchesFilePath = path.join(process.cwd(), 'lib', 'data', 'launches.json');
let cachedLaunches: any[] = [];

function loadLaunches() {
    if (cachedLaunches.length === 0) {
        const fileData = fs.readFileSync(launchesFilePath, 'utf-8');
        cachedLaunches = JSON.parse(fileData);
    }
    return cachedLaunches;
}

const BASE_URL = 'local';
export { BASE_URL };

// get launches by id
export async function getLaunchById(id: string) {
    const launches = loadLaunches();
    const launch = launches.find(l => l.id === id);
    if (!launch) {
        throw new Error('Launch not found');
    }
    return launch;
}

// get all launches
export async function getLaunches({
    page = 1,
    limit = 12,
    order = 'desc',
}: {
    page?: number;
    limit?: number;
    order?: 'asc' | 'desc';
}) {
    let launches = [...loadLaunches()];
    
    // Sort by date_utc
    launches.sort((a, b) => {
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
        nextPage: page < totalPages ? page + 1 : null
    };
}

// reutiliza la logica de getlaunches con diferentes parametros
export async function getRecentLaunches() {
    const data = await getLaunches({
        limit: 10,
        order: 'desc',
        page: 1
    });
    return data.docs;
}

// get the latest launch
export async function getLatestLaunch() {
    const launches = loadLaunches();
    const pastLaunches = launches.filter(l => !l.upcoming);
    pastLaunches.sort((a, b) => new Date(b.date_utc).getTime() - new Date(a.date_utc).getTime());
    
    if (pastLaunches.length === 0) throw new Error('No latest launch');
    return pastLaunches[0];
}

// get the next launch
export async function getNextLaunch() {
    const launches = loadLaunches();
    const upcomingLaunches = launches.filter(l => l.upcoming);
    upcomingLaunches.sort((a, b) => new Date(a.date_utc).getTime() - new Date(b.date_utc).getTime());
    
    if (upcomingLaunches.length > 0) {
        return upcomingLaunches[0];
    }
    return getLatestLaunch();
}

// get rocket by id
export async function getRocketById(id: string) {
    const rockets: Record<string, any> = {
        '5e9d0d95eda69955f709d1eb': { name: 'Falcon 1' },
        '5e9d0d95eda69973a809d1ec': { name: 'Falcon 9' },
        '5e9d0d95eda69974db09d1ed': { name: 'Falcon Heavy' },
        '5e9d0d96ece2174fc709d1ee': { name: 'Starship' }
    };
    
    if (rockets[id]) {
        return rockets[id];
    }
    return { name: 'Unknown Rocket' };
}

// get launchpad by id
export async function getLaunchpadById(id: string) {
    const launchpads: Record<string, any> = {
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
    return { 
        name: 'Unknown Launchpad',
        locality: 'Unknown',
        region: 'Unknown',
        launch_attempts: 0,
        launch_successes: 0
    };
}