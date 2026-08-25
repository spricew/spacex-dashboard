import { getRecentLaunches, getRocketById } from "@/lib/api/spacex";

export function fetchRecentLaunches() {
  return getRecentLaunches().map((launch) => ({
    ...launch,
    rocketName: getRocketById(launch.rocket).name,
  }));
}
