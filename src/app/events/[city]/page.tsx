import H1 from "@/components/h1";
import EventList from "@/components/event-list";
import { Suspense } from "react";
import Loading from "./loading";
import { capitalize } from "@/lib/utils";
import { Metadata } from "next";
import z from "zod";

// Events Page Props declaration
type EventsPageProps = {
  params: Promise<{ city: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

// Generate Metadata based on city
export async function generateMetadata({ params }: EventsPageProps): Promise<Metadata> {
  const { city } = await params;
  return {
    title: city === "all" ? "All Events" : `Events in ${capitalize(city)}`,
  };
}

export default async function Events({
  params,
  searchParams,
}: EventsPageProps) {
  const { city } = await params;
  const { page } = await searchParams
  // Use zod to check for valid page number
  const pageNumberSchema = z.coerce.number().int().positive().optional();
  const parsedPage = pageNumberSchema.safeParse(page);
  if (!parsedPage.success) {
    throw new Error("Invalid page number");
  }
  return (
    <main className="flex flex-col items-center py-5 px-[20px] min-h-full">
      <H1 className="mb-3">
        {city === "all" && "All Events"}
        {city !== "all" && `Events in ${capitalize(city)}`}
      </H1>
      <Suspense key={city + parsedPage.data} fallback={<Loading />}>
        <EventList city={city} page={parsedPage.data} />
      </Suspense>
    </main>
  );
}
