
const BASE_URL = 'https://api.spacexdata.com/v5';
export { BASE_URL };

export async function getLaunches() {
    const response = await fetch(`${BASE_URL}/launches`);

    if (!response.ok) {
        throw new Error('Failed to fetch launches');
    }

    const data = await response.json();
    return data;
}

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
                    limit: 2,
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

export async function getLatestLaunch() {
    const response = await fetch(`${BASE_URL}/launches/latest`);

    if (!response.ok) {
        throw new Error('Failed to fetch latest launches');
    }

    const data = await response.json();
    return data;
}