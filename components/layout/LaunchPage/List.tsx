"use client";

import { useState } from "react";
import React from "react";
import { ChevronRight, Loader2 } from "lucide-react";
import { fetchLaunches } from "@/app/Launches/actions";

import Card from "@/components/ui/Card";
import RowCard from "@/components/ui/RowCard";
import PrimaryButton from "@/components/ui/PrimaryButton";

interface LaunchData {
  id: string;
  name: string;
  rocket: string;
  rocketName: string;
  success: boolean;
  details: string | null;
  date_utc: string;
  flight_number: string;
  links: {
    patch: {
      small: string;
    };
  };
}

interface ListProps {
  initialLaunches: LaunchData[];
}

export default function List({ initialLaunches }: ListProps) {
  const [launches, setLaunches] = useState<LaunchData[]>(initialLaunches);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const loadMore = async () => {
    setIsLoading(true);
    const nextPage = page + 1;
    
    try {
      const newLaunches = await fetchLaunches(nextPage);

      // set if there is more launches in the list
      if (newLaunches.length === 0) {
        setHasMore(false);
      } else {
        // add new launches to existing
        setLaunches((prev) => [...prev, ...newLaunches]);
        setPage(nextPage);
      }
    } catch (error) {
      console.error("Error loading more launches:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <main className="flex flex-wrap justify-center gap-1 md:gap-2 w-full">
        {launches.map((launch) => (
          <React.Fragment key={launch.id}>
            {/* Mobile */}
            <div className="w-full md:hidden">
              <RowCard
                launchName={launch.name}
                id={launch.id}
                patch={launch.links.patch.small}
                launchDate={launch.date_utc}
                successStatus={launch.success}
                rocket={launch.rocketName}
                flightNum={launch.flight_number}
                hrefString={launch.id}
              />
            </div>

            {/* Desktop */}
            <div className="hidden md:flex flex-1 w-72">
              <Card
                launchName={launch.name}
                id={launch.id}
                patch={launch.links.patch.small}
                launchDate={launch.date_utc}
                rocket={launch.rocketName}
                successStatus={launch.success}
                details={launch.details || ""}
                hrefString={`/Launch/${launch.id}`}
              />
            </div>
          </React.Fragment>
        ))}
      </main>

      {hasMore && (
        <PrimaryButton
          text={isLoading ? "Loading..." : "Load more"}
          icon={
            isLoading ? (
              <Loader2 className="size-5 animate-spin" />
            ) : (
              <ChevronRight className="size-5 stroke-3 -ml-1 -mr-1" />
            )
          }
          textClass="text-lg"
          extraClass={`self-end ${isLoading ? "opacity-80 pointer-events-none" : ""}`}
          onClick={loadMore}
        />
      )}
    </div>
  );
}