import Image from "next/image";
import Link from "next/link";

const IMG_URL="https://image.tmdb.org/t/p/w500/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg";

export default function Card({result}) {
  return (
    <div href="" className=" shadow-md sm:p-3 sm:hover:shadow-slate-600 rounded-lg sm:m-2 transition-shadow duration-500 dark:bg-zinc-900 bg-amber-50">
        <Link href={`${result.id}`}>
            <Image src={`https://image.tmdb.org/t/p/original${result.poster_path||result.backdrop_path}`}  width={500} height={300} alt="poster" className=" sm:rounded-t-lg" placeholder="blur" blurDataURL="/Spinner.svg"></Image>
        </Link>
    </div>
  )
}