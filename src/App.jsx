import { BrowserRouter, Route, Routes } from "react-router-dom"

import Navbar from "./Navbar/Navbar.jsx"
import Hero from "./Hero/Hero.jsx"
import Footer from "./Footer/Footer.jsx"
import Movies from "./Movies/Movies.jsx"

function App() {


  return (
    <>
   <BrowserRouter>
    <Navbar></Navbar>
    <Routes>
<Route path="/" element={<Hero/>}/>
 <Route path="/movies" element ={<Movies/>}/>
    
    </Routes>
     <Footer></Footer>
    </BrowserRouter>
    </>
  )
}

export default App
