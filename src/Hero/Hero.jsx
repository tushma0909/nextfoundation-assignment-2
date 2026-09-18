import React from 'react';
import{Link} from "react-router-dom"

const Hero = () => {
    return (
        <div className="min-h-[80vh] bg-gradient-to-br from-red via-red-400 to-black flex items-center justify-center">
            <div className='w-full min-h-[80vh] bg-black/80 flex items-center justify-center'>
            <div  className='max-w-3xl px-8 md:px-16 text-white text-center'>

                <p className="text-red-500 font-semibold text-lg mb-3">Welcome to MovieExplorer</p>
                <h1 className="text-5xl md:text-7xl font-bold mb-6">Discover Movies</h1> 
                <p className='text-lg md:text-xl mb-8 text gray-300'>Explorer and discover your favourite movies from around the world</p>
                <Link to="/movies" style={{
                    backgroundColor:"#dc2626",
                    color:   "white",
                    padding: "12px 24px",
                    borderRadius:"8px",
                    fontWeight:"600",
                    cursor:'pointer',
                }}>Explore now</Link>
            </div>
        
     
        </div>
    
       </div>
    );
};

export default Hero;


