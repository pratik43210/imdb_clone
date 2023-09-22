import Image from "next/image";
import {FiThumbsUp} from "react-icons/fi"

async function getMovie(movieId){
    const res=await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`);

    return await res.json();
}


export default async function MoviePage({params:{id}}) {
    const movieId=id;
    const movie=await getMovie(movieId);
    // console.log(movie);
  if(movie.length)return (
    <div className=" w-full lg:w-[80%] mx-auto">
      <div className="p-4 md:pt-8 flex flex-col md:flex-row items-center max-w-6xl mx-auto md:space-x-6">
        <div className="flex flex-wrap md:flex-nowrap justify-center m-4">
          <Image src={`https://image.tmdb.org/t/p/original${movie.poster_path||movie.backdrop_path}`}  width={500} height={300} alt="movie poster" className=" sm:rounded-lg w-[30%] sm:w-[200px]" placeholder="blur" blurDataURL="/Spinner.svg"></Image>
          <div className=" mx-6">
            <h2 className="font-bold text-2xl">
              {movie.original_title}
              <span className="text-sm mx-2 font-light italic">- {movie.original_language}</span>
              <span className="text-sm mx-2 dark:bg-zinc-800 font-normal bg-amber-50 p-1">{movie.runtime} mins</span>
            </h2>
            <div className="m-1">
              Date released: {movie.release_date}
            </div>
            <div className="flex flex-wrap">
              {movie.genres.map(genre=><div key={genre.id} className="m-1 p-1 dark:bg-zinc-700 bg-amber-100">{genre.name}</div>)}
            </div>
            <div className="flex items-center gap-2">
              Votes: <FiThumbsUp/>{movie.vote_count}
              <span>Rating: {movie.vote_average.toFixed(2)}</span>
            </div>
            <p className="mt-4">
              {movie.overview}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
