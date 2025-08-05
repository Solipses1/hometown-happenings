import Skeleton from "./skeleton";

export default function SkeletonCard() {
  return (
    <div className="flex flex-col gap-y-4 items-center">
      <Skeleton className="h-12 w-12 rounded-full" />
      <Skeleton className="h-4 w-[200px]" />
      <Skeleton className="h-4 w-[200px]" />
    </div>
  );
}
