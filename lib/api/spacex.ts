
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

export async function getLatestLaunch() {
    const response = await fetch(`${BASE_URL}/launches/latest`);

    if (!response.ok) {
        throw new Error('Failed to fetch launches');
    }

    const data = await response.json();
    return data;
}