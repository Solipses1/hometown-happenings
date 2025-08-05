import Link from "next/link";

// Pagination Props declaration
type PaginationProps = {
  city: string;
  page: number;
  totalCount: number;
};
export default function PaginationControls({
  city,
  page,
  totalCount,
}: PaginationProps) {
  // Use page props to define next and previous paths
  const previousPath = page > 1 ? `/events/${city}?page=${page - 1}` : "";
  const nextPath =
    totalCount > page * 6 ? `/events/${city}?page=${page + 1}` : "";
  return (
    <div className="flex w-full justify-between items-center">
      {previousPath ? (
        <Link
          className="text-white rounded-md px-5 py-3 bg-white/5 opacity-80 hover:opacity-100 transition"
          href={previousPath}
        >
          Prev
        </Link>
      ) : (
        <div />
      )}
      {nextPath ? (
        <Link
          className="text-white rounded-md px-5 py-3 bg-white/5 opacity-80 hover:opacity-100 transition"
          href={nextPath}
        >
          Next
        </Link>
      ) : (
        ""
      )}
    </div>
  );
}
