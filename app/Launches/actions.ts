'use server';

import { getLaunches, getRocketById } from "@/lib/api/spacex";

export async function fetchLaunches(page: number, order?: 'asc' | 'desc') {
  const { docs } = getLaunches({ order, page, limit: 20 });

  return docs.map((launch) => ({
    ...launch,
    rocketName: getRocketById(launch.rocket).name,
  }));
}
