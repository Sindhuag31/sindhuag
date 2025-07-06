import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './page/Navbar'
import Home from './component/Home'
import About from './component/about'
import Contact from './component/Contact'
import { Routes,Route } from 'react-router-dom'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import '@fortawesome/fontawesome-free/css/all.min.css'
import Footer from './component/Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div> 
      
        {/* <Home/>
        <About/>
        <Contact/> */}
     
      <Navbar/>
      <Carousel/>
        <Routes>
          <Route path='Home' element={<Home/>}/>
          <Route path='About' element={<About/>}/>
          <Route path='Contact' element={<Contact/>}/>
        </Routes>
        <Footer/>
        
    </div>


  )
}

export default App
