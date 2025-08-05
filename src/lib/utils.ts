import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Event } from "../generated/prisma";
import { PrismaClient } from "../generated/prisma";
import { notFound } from "next/navigation";

const prisma = new PrismaClient()
// Function for concatonating passed props into tailwind classnames
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Function for capitalizing
export function capitalize(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// Query database for events using city
export async function getEvents(city: string, page = 1) {
  const events: Event[] = await prisma.event.findMany({
    where: {
      city: city === "all" ? undefined : capitalize(city),
    },
    orderBy: {
      date: "asc",
    },
    take: 6,
    skip: (page - 1) * 6,
  });
  let totalCount
  if (city === "all") {
    totalCount = await prisma.event.count({
      where: {
        city: undefined
      }
    });
  } else {
    totalCount = await prisma.event.count({
      where: {
        city: capitalize(city),
      },
    });
  }
  return { events, totalCount };
}


// Query database for event using slug
export async function getEvent(slug: string) {
  const event = await prisma.event.findUnique({
    where: {
      slug: slug,
    },
  });
  if (!event) {
    return notFound();
  }
  return event;
}
