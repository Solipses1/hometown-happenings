"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
export default function SearchForm() {
  const [searchText, setSearchText] = useState("");
  const router = useRouter();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!searchText) {
      return;
    }
    router.push(`/events/${searchText}`);
  }

  return (
    <form onSubmit={handleSubmit} className="w-8/12 sm:w-[600]">
      <input
        className="w-full h-14 rounded-lg bg-white/10 ring-amber-300 px-8 outline-none focus:ring-1 focus:bg-white/15"
        placeholder="Search for events in any city..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        spellCheck={false}
      ></input>
    </form>
  );
}
