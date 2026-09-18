import  { useState } from 'react';
import{Star, Calendar} from "lucide-react"

const Movies = () => {
const [search,setSearch]= useState([]);
const [movies,setMovies]= useState([]);
const [selectedMovie, setSelectedMovie] = useState(null)
const[loading, setLoading] = useState(false)
const[error ,setError]= useState("")
  const handleSearch = async ()=>{
  const query = search.trim();
  if (!query){
    setMovies([]);
    return;
  }
  setError("")
  setLoading(true);
  setMovies([])
try {
    const res = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`)
    const data= await res.json();
     setMovies(data);
}
 catch(error){
console.log("Error fetching movies")
setError("Something went wrong.please try again.")
 }finally{
    setLoading(false)
 }
   
  };
  return (
        <div className='min-h-[80vh] bg-gradient-to-br from-black via-red-900
         to-black text-white px-6 py-10'>
            <h1 className='text-4xl md:text-5xl font-bold text-center mb-3'>Explorer Movies</h1>
            <p className='text-center text-gray-400 mb-8'>search and Discover your favourite movies</p>
            
            
            <div className='max-w-2xl mx-auto flex gap-3'>
                <input
                 type="text"
                placeholder= "search for a Movie.." 
                value={search}
                onChange={(event)=>setSearch(event.target.value)}
                 className='flex-1 px-4 py-3 rounded-lg text-black bg-white outline-none border-2 border-gray-700 focus:border-red-500 '
                 />
                <button onClick={handleSearch} className='bg-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-red-900 transition '>Search</button>
            </div>
{loading &&
(<p className='text-center mt-8 text-lg'>loading movies...</p>)}
{error &&
(<p className='text-center mt-8 text-red-400'>{error}</p>)}



     {movies.length >0 &&(
        <div className='max-w-6xl mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
            {movies.map((movie)=>(
                <div key={movie.show.id}
                className='bg-gray-900 rounded-xl overflow-hidden'>
                    <img src={movie.show.image ? movie.show.image.medium :"https://via.placeholder.com/210x295?text=No+image"}
                     alt={movie.show.name}
                     className='w-full h-72 object-cover'/>
                     <div className='p-4'>
                        <h2 className='text-xl font-bold'>{movie.show.name}</h2>
                        <div className='flex items-center gap-2 text-gray-400 mt-2'>
                            <Star size={15}/>
                            <span>Ratings:{""}
                            {movie.show.rating.average?movie.show.rating.average:"N/A"}
                        </span></div>
                        <div className='flex items-center gap-2 text-gray-400 mt-2'>
                            <Calendar size={15}/>
                            <span>   Release date:{movie.show.premiered|| "N/A"}
                        </span></div>

                        
              <button onClick={()=>setSelectedMovie(movie.show)}
              className='mt-4 bg-red-600  px-6 py-2 rounded-lg font-semibold hover:bg-red-700 transition'>
               View Details
              </button>
                     </div>
                   
                </div>
            ))}
        </div>
     )}
{!loading && String(search).trim()&& movies.length===0 &&
(<p className='text-center mt-8 text-gray-400'>No movies found.</p>)}

{selectedMovie && (
<div className="fixed inset-0 bg-black/70 flex items-center justify-center p-6 z-50">
<div className="bg-gray-900 border border-gray-700 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 relative">

<button
onClick={() => setSelectedMovie(null)}
className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl"
>
✕
</button>


{selectedMovie.image && (
<img
src={selectedMovie.image.original}
alt={selectedMovie.name}
className="w-64 mx-auto rounded-xl mb-6"
/>
)}

<h2 className="text-3xl font-bold mb-6 pr-10">
{selectedMovie.name}
</h2>

<div className="flex flex-wrap gap-6 text-gray-300 mb-6">
<p>⭐ Rating: {selectedMovie.rating.average || "N/A"}</p>
<p>📅 Release Date: {selectedMovie.premiered || "N/A"}</p>
</div>

<h3 className="text-2xl font-bold mb-3">Summary</h3>

<div
className="text-gray-300 leading-7"
dangerouslySetInnerHTML={{
__html: selectedMovie.summary || "No summary available."
}}
/>
</div>
</div>
)}

</div>
    );
};

export default Movies;