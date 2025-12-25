"use client";

import { useState } from "react";
import React from "react";
import { ArrowUpDown, ChevronRight, Loader2 } from "lucide-react";
import { fetchLaunches } from "@/app/Launches/actions";

import Card from "@/components/ui/Card";
import RowCard from "@/components/ui/RowCard";
import PrimaryButton from "@/components/ui/PrimaryButton";
import PrimarySelect from "@/components/ui/PrimarySelect";

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

export default function List({ initialLaunches }: { initialLaunches: LaunchData[]; }) {
  // paginacion
  const [launches, setLaunches] = useState<LaunchData[]>(initialLaunches);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  // launches order display
  const [order, setOrder] = useState<'asc' | 'desc'>('desc');

  const handleSortChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newOrder = e.target.value as 'asc' | 'desc';
    setOrder(newOrder);
    setPage(1);
    setHasMore(true);
    setIsLoading(true);

    try {
      const sortedLaunches = await fetchLaunches(1, newOrder);
      setLaunches(sortedLaunches); // replace the list
    } catch (error) {
      console.error("Error sorting:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const loadMore = async () => {
    setIsLoading(true);
    const nextPage = page + 1;

    try {
      const newLaunches = await fetchLaunches(nextPage, order);

      if (newLaunches.length === 0) {
        setHasMore(false);
      } else {
        setLaunches((prev) => [...prev, ...newLaunches]);
        setPage(nextPage);
      }
    } catch (error) {
      console.error("Error loading more:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const sortOptions = [
    { value: 'desc', label: 'Newest First' },
    { value: 'asc', label: 'Oldest First' }
  ];

  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between">
        <h1 className="text-2xl text-center md:text-start md:text-3xl tracking-tight font-medium">
          Recent Launches
        </h1>

        <PrimarySelect
          value={order}
          icon={<ArrowUpDown className="size-4 text-white/50 group-hover:text-white transition-colors" />}
          options={sortOptions}
          disabled={isLoading}
          onChange={handleSortChange}
        />

      </div>

      {/* launches */}
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
          extraClass={`self-end transition ease-out duration-300 hover:bg-primary-tint-100
            ${isLoading ? "opacity-80 pointer-events-none" : ""}`}
          onClick={loadMore}
        />
      )}
    </div>
  );
}