'use server';

import { getLaunches, getRocketById } from "@/lib/api/spacex";

export async function fetchLaunches(page: number) {
  const launches = await getLaunches({ page, limit: 20 });

  const launchesWithRocket = await Promise.all(
    launches.docs.map(async (launch) => {
      const rocket = await getRocketById(launch.rocket);
      return {
        ...launch,
        rocketName: rocket.name,
      };
    })
  );

  return launchesWithRocket;
}