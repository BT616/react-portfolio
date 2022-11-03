import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home'
import Project from './components/Project'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  //const [darkMode,setDarkMode] =useState(false)
  //<button onClick={()=> setDarkMode(!darkMode)}>Dark</button>
  //className={darkMode ? "dark": ""}

  return (
    <div>
    <Router>
      <div className="App">
        <div className='bg-gray-200'>
          <nav className="py-5 mb-12 flex justify-between bg-gradient-to-r from-blue-100 to-orange-100">
            <h1 className="p-2 text-xl font-bold">DEVELOPEDBYBT616</h1>
            <ul className=" flex items-center">
              <li className="px-2 hover:text-sky-400">
                <Link to="/">Home</Link>
                </li>
              <li className="text-l px-2  hover:text-sky-400">
                <Link to="/Project">Project</Link>
                </li>
              <li className="px-2  hover:text-sky-400"><a href='https://www.linkedin.com/in/brandon-turner-046a7a254/'>Resume</a></li>
              <li className="px-2  hover:text-sky-400">
                <Link  to="/Contact">Contact</Link>
                </li>
            </ul>
          </nav></div>


        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route exact path='/Project' element={<Project />}></Route>
          <Route exact path='/Contact' element={<Contact />}></Route>
        </Routes>
      </div> 
    </Router>
    <Footer/>
    </div>
    
   
   
  )
}





