const BASE_URL = 'https://api.spacexdata.com/v5';
export { BASE_URL };

// get launches by id
export async function getLaunchById(id: string) {
    const response = await fetch(`${BASE_URL}/launches/${id}`);
    if (!response.ok) {
        throw new Error('Failed to fetch launches');
    }
    
    const data = await response.json();
    return data;
}

// get all launches
export async function getLaunches(order: 'asc' | 'desc' = 'desc') {
    const response = await fetch(`${BASE_URL}/launches/query`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            options: {
                sort: {
                    date_utc: order,
                },
                limit: 52,
            },
        }),
    });

    if (!response.ok) {
        throw new Error('Failed to fetch launches');
    }

    const data = await response.json();
    return data.docs;
}

// get recent launches (with limit)
export async function getRecentLaunches() {
    const res = await fetch(
        `${BASE_URL}/launches/query`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                query: {
                    upcoming: false,
                },
                options: {
                    sort: {
                        date_utc: 'desc',
                    },
                    limit: 6,
                },
            }),
        }
    );

    if (!res.ok) {
        throw new Error('Failed to fetch recent launches');
    }

    const data = await res.json();
    const launches = data.docs;

    return launches;
}

// get the latest launch
export async function getLatestLaunch() {
    const response = await fetch(`${BASE_URL}/launches/latest`);

    if (!response.ok) {
        throw new Error('Failed to fetch latest launch');
    }

    const data = await response.json();
    return data;
}

// get the next launch
export async function getNextLaunch() {
    const response = await fetch(`${BASE_URL}/launches/next`);

    if (!response.ok) {
        throw new Error('Failed to fetch next launch');
    }

    const data = await response.json();
    return data;
}

// get rocket by id
export async function getRocketById(id: string) {
    // fecth using v4 instead of v5 because v5 doesn't include a public endpoint /rockets
    const response = await fetch(`https://api.spacexdata.com/v4/rockets/${id}`);

    if (!response.ok) {
        throw new Error("Failed to fetch rocket");
    }

    return response.json();
}