import { getLaunchById } from "@/lib/api/spacex";

interface LaunchPageProps {
  params: Promise<{ id: string }>;
}

export default async function LaunchPage({ params }: LaunchPageProps) {
  const { id } = await params;
  const launch = await getLaunchById(id);

  return (
    <div className="flex flex-col">
      <span>{launch.name}</span>
    </div>
  );
}