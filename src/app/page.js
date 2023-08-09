import Results from "@/components/Results";

const API_KEY=process.env.API_KEY;
const BASE_URL="https://api.themoviedb.org/3/movie/";

export default async function Home({searchParams}) {
  const genre=searchParams.genre||"fetchTrending";
  const res=await fetch(`${BASE_URL+(genre==="fetchTopRated"?"top_rated":"popular")}?api_key=${API_KEY}&page=1`,{next:{revalidate:10000}});

  if(!res.ok){
    throw new Error("Failed to fetch data");
  }

  const data=await res.json();
  const results=data.results;
  console.log(results);
  
  return (
    <div><Results results={results}/></div>
  );
};