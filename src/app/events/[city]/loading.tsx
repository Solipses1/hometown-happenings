import SkeletonCard from "@/components/skeleton-card";

export default function Loading() {
  return (
    <div className="flex flex-wrap max-w-[1100px] mx-auto px-4 py-16 gap-16">
      {Array.from({ length: 3 }).map((item, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  );
}
