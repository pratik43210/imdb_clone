import NavbarItem from "./NavbarItem";

export default function Navbar() {
  return (
    <div className="flex h-[40px] items-center justify-center space-x-4 dark:bg-zinc-800 bg-amber-100">
      <NavbarItem title="Trending" param="fetchTrending"/>
      <NavbarItem title="Top Rated" param="fetchTopRated"/>
    </div>
  )
}
