import { BrowserRouter, Route, Routes } from "react-router-dom"
import './App.css'
import Navbar from './Navbar/Navbar'
import Hero from './Hero/Hero' 
import Footer from './Footer/Footer'
import Movies from "./Movies/Movies"


function App() {

  return (
      <>
   <BrowserRouter>
    <Navbar></Navbar>
    <Routes>
<Route path="/" element={<>

    <Hero></Hero>
    <Footer></Footer></>}/>
    <Route path="/movies" element ={<Movies/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
