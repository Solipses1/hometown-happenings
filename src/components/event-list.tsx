import EventCard from "@/components/event-card";
import PaginationControls from "./pagination-controls";
import { Event } from "@/generated/prisma";
import { getEvents } from "@/lib/utils";

// Event List Props declaration
type EventListProps = {
  city: string;
  page?: number;
};

export default async function EventList({ city, page = 1 }: EventListProps) {
  const { events, totalCount } = await getEvents(city, page);
  // Check for no events
  if (totalCount === 0) {
    return (
      <div className="text-xl mt-24">
        There are no events! Please try a different city.
      </div>
    );
  } else {
    return (
      <div className="flex flex-wrap justify-center gap-6 px-[20px] m-4">
        {events.map((event: Event) => (
          <EventCard key={event.id} event={event} />
        ))}
        <PaginationControls city={city} page={page} totalCount={totalCount} />
      </div>
    );
  }
}
