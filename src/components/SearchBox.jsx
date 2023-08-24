"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchBox() {
  const [search,setSearch]=useState("");
  const router=useRouter();
  function handleSubmit(e){
    e.preventDefault();
    if(!search) return;
    router.push(`/search/${search}`);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex max-w-6xl my-1 mx-auto justify-between items-center px-5"
    >
      <input type="text"
      value={search}
      onChange={(e)=>setSearch(e.target.value)}
      placeholder="Search keywords..."
      className="w-full h-14 rounded-sm px-2 placeholder-zinc-700 bg-transparent border dark:border-zinc-700 border-amber-100 outline-none"
      />
      <button
      disabled={!search} 
      type="submit"
      className={`${search && "hover:bg-amber-500 hover:text-white dark:hover:bg-amber-500 dark:hover:text-white"} dark:text-amber-600 px-2 h-14 dark:bg-zinc-900 bg-amber-100 disabled:text-gray-400`}>
        Search
      </button>
    </form>
  )
}
