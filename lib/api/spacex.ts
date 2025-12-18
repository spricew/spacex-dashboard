const BASE_URL = 'https://api.spacexdata.com/v5';
export { BASE_URL };

// get all launches
export async function getLaunches() {
    const response = await fetch(`${BASE_URL}/launches`);

    if (!response.ok) {
        throw new Error('Failed to fetch launches');
    }

    const data = await response.json();
    return data;
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
export async function getUpcomingLaunch() {
    const response = await fetch(`${BASE_URL}/launches/upcoming`);
  
    if (!response.ok) {
      throw new Error('Failed to fetch upcoming launch');
    }
  
    const data = await response.json();
    return data[0];
}