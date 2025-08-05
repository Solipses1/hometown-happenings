import Link from "next/link";
import SearchForm from "../components/search-form";
import H1 from "../components/h1";
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[80vh] px-4">
      <H1>Find what&apos;s happening near you!</H1>
      <p className="mb-12 mt-6 text-2xl lg:text-3xl opacity-80">
        Browse more than{" "}
        <span className="bold underline italic text-amber-300">10,000</span>{" "}
        small-town MN events
      </p>
      <SearchForm />
      <div className="flex mt-5 gap-4 opacity-60">
        <p>Popular:</p>
        <div className="flex space-x-1.5 font-semibold gap-x-2">
          <Link className="hover:opacity-85" href="/events/Hutchinson">
            Hutchinson, MN
          </Link>
          <Link className="hover:opacity-85" href="/events/Litchfield">
            Litchfield, MN
          </Link>
        </div>
      </div>
    </main>
  );
}
