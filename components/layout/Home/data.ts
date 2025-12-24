import { getRecentLaunches, getRocketById } from "@/lib/api/spacex";

export async function fetchRecentLaunches() {
  const launches = await getRecentLaunches();

  const launchesWithRocket = await Promise.all(
    launches.map(async (launch:any) => {
      const rocket = await getRocketById(launch.rocket);
      return {
        ...launch,
        rocketName: rocket.name,
      };
    })
  );

  return launchesWithRocket;
}