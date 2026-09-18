import React, { useState } from 'react';





const Movies = () => {
const [search,setSearch]= useState([]);
const [movies,setMovies]= useState([]);
const [selectMovie, setSelectMovie] = useState(null)
const[loading, setLoading] = useState(false)
  const handleSearch = async ()=>{
  const query = search.trim();
  if (!query){
    setMovies([]);
    return;
  }
  setLoading(true);
  setMovies([])
try {
    const res = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`)
    const data= await res.json();
     setMovies(data);
}
 catch(error){
console.log("Error fetching movies")
 }finally{
    setLoading(false)
 }
   
  };





    return (
        <div className='min-h-screen bg-black text-white px-6 py-10'>
            <h1 className='text-4xl font-bold text-center mb-8'>Explorer Movies</h1>
            <div className='max-w-2xl mx-auto flex gap-3'>
                <input
                 type="text"
                placeholder= "search for a Movie" 
                value={search}
                onChange={(event)=>setSearch(event.target.value)}
                 className='flex-1 px-4 py-3 rounded-lg font-semibold '
                 />
                <button onClick={handleSearch} className='bg-red-600 px-6 py-3 rounded-lg font-semibold'>Search</button>
            </div>
{loading &&
(<p className='text-center mt-8 text-lg'>loading movies...</p>)}



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
                        <p className='text-gray-400 mt-2'>Ratings:{""}
                            {movie.show.rating.average?movie.show.rating.average:"N/A"}
                        </p>

                        <p className='text-gray-400 mt-1'>
                            Language:{movie.show.language|| "N/A"}
                        </p>
              <Link to ={`/movies/${movie.show.id}`}type="button"
              className='mt-4 bg-red-600 inline-block px-4 py-2 rounded-lg font-semibold'>
               View Details
              </Link>
                     </div>
                   
                </div>
            ))}
        </div>
     )}
{!loading && String(search).trim()&& movies.length===0 &&
(<p className='text-center mt-8 text-gray-400'>No movies found.</p>)}

</div>
    );
};

export default Movies;