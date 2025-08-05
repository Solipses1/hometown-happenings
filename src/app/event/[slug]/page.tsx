import H1 from "@/components/h1";
import Image from "next/image";
import { capitalize, getEvent } from "@/lib/utils";
import { Metadata } from "next";

// Event Page Props declaration
type EventPageProps = {
  params: {
    slug: string;
  };
};

export default async function EventPage({ params }: EventPageProps): Promise<unknown> {
  const slug = params.slug;
  const event = await getEvent(slug);
  return (
    <main>
      <section className="relative overflow-hidden py-14 md:py-20">
        <Image
          className="object-cover blur-2xl z-0"
          src={event.imageUrl}
          quality={50}
          alt="background image"
          fill
          sizes="(max-width:1280px) 100vw, 1280px"
        />
        <div className="z-1 relative gap-6 lg:gap-16 flex flex-col lg:flex-row justify-center">
          <Image
            className="rounded-xl border-2 border-white/20 object-cover"
            src={event.imageUrl}
            alt={event.name}
            width={300}
            height={200}
          ></Image>
          <div className="flex flex-col">
            <p className="text-white/75">
              {new Date(event.date).toLocaleDateString("en-US", {
                weekday: "long",
                month: "long",
                day: "numeric",
              })}
            </p>
            <H1>{event.name}</H1>
            <p className="text-white/75 whitespace-nowrap mt-2 text-xl">
              Organized by <span className="italic">{event.organizerName}</span>
            </p>
            <button className="bg-slate-800/20 text-lg capitalize mt-5 lg:mt-auto w-[80vw] sm:w-full py-2 rounded-md border-2 border-white/10 hover:scale-95 active:scale-[1.02] transition">
              RSVP
            </button>
          </div>
        </div>
      </section>
      <div className="text-center p-4">
        <section>
          <h2 className="text-2xl mb-2">About this event</h2>
          <p className="text-lg leading-6 max-w-4xl mx-auto text-white/85">
            {event.description}
          </p>
        </section>
        <section>
          <h2 className="text-2xl mb-2 mt-2">Location</h2>
          <p className="text-lg leading-6 max-w-4xl mx-auto text-white/85">
            {event.location}
          </p>
        </section>
      </div>
    </main>
  );
}

// Generate Metadata based on slug
export async function generateMetadata({
  params,
}: EventPageProps): Promise<Metadata> {
  const slug = params.slug;
  const event = await getEvent(slug);
  return {
    title: capitalize(event.name),
    description: event.description,
  };
}

// Statically enerate popular page routes
export async function generateStaticParams() {
  return [
    {
      slug: "tractor-pull",
    },
    {
      slug: "book-sale",
    },
  ];
}
