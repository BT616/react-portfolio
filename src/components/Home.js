import React from 'react'
import face from './images/face.jpeg'

import { FaGithub } from 'react-icons/fa'
import { FaReact } from 'react-icons/fa'

function Home(){
    return (
        
        <div className="text-center p-10">
        
        <h2 id="about-me" className=" text-6xl py-2 font-medium text-teal-600">Hi,im Brandon Turner</h2>
        <div className ="flex flex-wrap justify-center "> 
        <div className="w-6/12 sm:w-4/12 px-4 ">
        <img alt="portrait" className=" shadow rounded-full max-w-full h-auto align-middle border-none" src={face}/>
        </div>
        </div>
       
        <div className='container mx-auto max-w-sm'>
        <h3 className="text-xl py-2">Developer & Designer</h3>
        <p className="text-center">A detail oriented Full Stack Developer from San Diego,CA with a passion in Front End Development. Consistantly learning and improving design and coding skills, while looking for innovative ways to enchance production. </p>
        <div className="py-3 text-4xl flex justify-center gap-10  text-gray-500"><a href="https://github.com/BT616"><FaGithub /></a><FaReact />
        </div>
        </div>
        </div>
        
       
    )


    }

export default Home;