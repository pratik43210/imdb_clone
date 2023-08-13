import Image from "next/image";
import Link from "next/link";
import {BsFillStarFill} from "react-icons/bs"
import {FiThumbsUp} from "react-icons/fi"

const IMG_URL="https://image.tmdb.org/t/p/w500/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg";

export default function Card({result}) {
  return (
    <div href="" className=" flex flex-col shadow-md sm:p-3 sm:hover:shadow-slate-600 rounded-lg sm:m-2 transition-shadow duration-500 dark:bg-zinc-900 bg-amber-50">
      <Link href={`${result.id}`}>
        <Image src={`https://image.tmdb.org/t/p/original${result.poster_path||result.backdrop_path}`}  width={500} height={300} alt="poster" className=" sm:rounded-t-lg" placeholder="blur" blurDataURL="/Spinner.svg"></Image>
        <div className="font-bold flex items-start justify-between"><h1 className="truncate font-bold text-xl">{result.original_title}</h1><div className="flex justify-center items-center bg-amber-200 px-1 rounded-b-lg dark:bg-zinc-800">{result.vote_average}<BsFillStarFill className=" text-red-700 dark:text-amber-500"/></div></div>
        <div className="my-2 flex justify-between items-center">
          <p>{result.release_date}</p>
          <div className="flex items-center gap-2">
            <FiThumbsUp/>
            {result.vote_count}
          </div>
        </div>
      </Link>
      <p className="truncate mt-auto justify-self-end">{result.overview}</p>
    </div>
  )
}