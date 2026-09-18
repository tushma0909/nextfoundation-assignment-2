import React from 'react';
import{ Link} from "react-router-dom"
import { Clapperboard } from 'lucide-react';

const Navbar = () => {
    return (
       <div className="flex justify-between items-center bg-red-900 text-white p-4">

   <div className='navbar-start'>
     <Link to="/" className="font-bold text-2xl">
      <div className='items-center flex gap-2'><Clapperboard size={28}/>MovieExplorer</div>
      </Link>

   </div>
<div className=" navbar-end gap-3 ">
   
      <Link to="/">
        Home
        </Link>
      
       <Link to="/movies" className='border border-white font-semibold px-5 py-2 rounded-lg hover:bg-white hover:text-black transition'>
    
     Movies
        </Link>  

   </div>
</div>
    );
};

export default Navbar;