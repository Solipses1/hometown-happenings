"use client";
import { Event } from "@/generated/prisma";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

// Event Card Props declaration
type EventCardProps = {
  event: Event;
};
// Create new Motion component from next Link component
const MotionLink = motion(Link);

export default function EventCard({ event }: EventCardProps) {
  // Use hook to check scroll progress
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.5 1"],
  });
  // Set scale for change to be used in motion component
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <MotionLink
      href={`/event/${event.slug}`}
      ref={ref}
      className=" flex-1 basis-60 h-[380px] max-w-[500px]"
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      initial={{
        opacity: 0,
        scale: 0.9,
      }}
    >
      <section className="w-full h-full flex flex-col bg-white/[5%] rounded-xl overflow-hidden transition relative hover:scale-105 active:scale-[1.02]">
        <Image
          src={event.imageUrl}
          alt={event.name}
          width={500}
          height={280}
          className="h-[60%] object-cover"
        ></Image>
        <div className="flex flex-col flex-1 justify-center items-center">
          <h2 className="text-2xl font-semibold">{event.name}</h2>
          <p className="italic text-white/75">By {event.organizerName}</p>
          <p className="text-sm text-white/50 m-2">{event.location}</p>
        </div>
        <section className="absolute flex flex-col justify-center items-center left-[10px] top-[10px] h-[55px] w-[45px] bg-black/65 rounded-md">
          <div className="text-xl font-bold">
            {new Date(event.date).toLocaleDateString("en-US", {
              day: "2-digit",
            })}
          </div>
          <div className="text-sm uppercase text-amber-300">
            {new Date(event.date).toLocaleDateString("en-US", {
              month: "short",
            })}
          </div>
        </section>
      </section>
    </MotionLink>
  );
}
