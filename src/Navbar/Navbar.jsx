import React from 'react';
import{ Link} from "react-router-dom"

const Navbar = () => {
    return (
       <div className="flex justify-between items-center bg-red-500 text-white p-4">

   <div className='navbar-start'>
     <Link to="/" className="font-bold text-2xl">MovieExplorer</Link>

   </div>
<div className=" navbar-end gap-3 ">
   
      <Link to="/">
        Home
        </Link>
      
        
        <Link to="/movies">
     Movies
        </Link>  

    
  </div>
</div>
    );
};

export default Navbar;