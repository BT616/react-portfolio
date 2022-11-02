import React from 'react';
import { FaGithub } from 'react-icons/fa'
import { FaReact } from 'react-icons/fa'
import { useState } from 'react'
import project from './components/project.png'
import first from './components/first.png'
import face from './components/face.jpeg'
import passwordgen from './components/passwordgen.png'
export default function App() {
  //const [darkMode,setDarkMode] =useState(false)
  //<button onClick={()=> setDarkMode(!darkMode)}>Dark</button>
  //className={darkMode ? "dark": ""}
  return (

    <div className='bg-gray-200'>
      <nav className="py-5 mb-12 flex justify-between bg-gradient-to-r from-blue-100 to-orange-100">
        <h1 className="p-2 text-xl font-bold">DEVELOPEDBYBT616</h1>
        <ul className=" flex items-center">
          <li className="px-2 hover:text-sky-400">Home</li>

          <li className="text-l px-2  hover:text-sky-400"><a href="#about-me">About Me</a></li>
          <li className="px-2  hover:text-sky-400"><a href='https://www.linkedin.com/in/brandon-turner-046a7a254/'>Resume</a></li>
        </ul>
      </nav>
      <div className="text-center p-10">
        <h2 id="about-me" className="about-me text-6xl py-2 font-medium text-teal-600">Hi,im Brandon Turner</h2>
        <div className ="flex flex-wrap justify-center "> 
        <div className="w-6/12 sm:w-4/12 px-4 ">
        <img alt="portrait" className=" shadow rounded-full max-w-full h-auto align-middle border-none" src={face}/>
        </div>
        </div>
       

        <h3 className="text-xl py-2">Developer & Designer</h3>
        <p className="text-center">Web Developer from San Diego,CA with a passion in Front End Development</p>
        <div className="py-3 text-4xl flex justify-center gap-10 text-gray-500"><a href="https://github.com/BT616"><FaGithub /></a><FaReact /></div>
        <div className="container mx-auto max-w-lg shadow-lg rounded-xl  overflow-hidden bg-gray-100 ">
          <img src={project} />
          <h1 className="text-xl font-medium hover:underline  hover:text-sky-400"><a href="https://rubendc91.github.io/NutriTeam/">NutriTeam</a></h1>
          <p className=" text-gray-600 px-10 py-2">A simple nutrition app to search for meals and get nutrition info about them
            Uses the spoonacular api and quickcharts.io to query foods and generate a chart containing nutrition info</p>
        </div>
        <div className="container mx-auto max-w-lg shadow-lg rounded-xl  overflow-hidden bg-gray-100 mt-10 ">
          <img src={first} />
          <h1 className="text-xl font-medium hover:underline  hover:text-sky-400 pd-10"><a href="https://bt616.github.io/Web-Portfolio/">Web-Portfolio</a></h1>
          <p className=" text-gray-600 px-10 py-2">This was the first web page i built to showcase my work with standard html and css. The portfolio Has its own url that is deployed from github.</p>
        </div>
        <div className="container mx-auto max-w-lg shadow-lg rounded-xl  overflow-hidden bg-gray-100 mt-10 ">
          <img src={passwordgen} />
          <h1 className="text-xl font-medium hover:underline  hover:text-sky-400 pd-10"><a href="https://bt616.github.io/password-generator/">Web-Portfolio</a></h1>
          <p className=" text-gray-600 px-10 py-2">Random Password generator with prompts to select the criteria. After selecting criteria, you select the red generate button and a randomly selected password is presented in the box.</p>
        </div>
      </div>
    </div>

  )
}



