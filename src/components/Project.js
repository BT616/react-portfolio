import React from "react";
import project from './images/project.png'
import first from './images/first.png'
import ecommerce from './images/ecommerce.png'
import passwordgen from './images/passwordgen.png'


function Project() {
    return <div>
        <h1 className="text-5xl text-center text-teal-600 pb-10">Welcome to the Projects Page</h1>
        <div className="container mx-auto max-w-lg shadow-lg rounded-xl overflow-hidden bg-gray-100 ">

            <img alt='ecommerce project' src={ecommerce} />
            <h1 className="text-xl font-medium hover:underline text-center py-2 hover:text-sky-400"><a href="https://github.com/hale-bopp97/fantastic_ecomerce">Fantastic-eCommerce</a></h1>
            <p className=" text-gray-600 px-10 py-2">An ecommerce site where you can purchase stickers, monitors, keyboards and other desktop items. Created using the Next.js
                framework, Mongoose, Apollo-Server, Tailwind for style, Magic-Link for passwordless login and Stripe for easy checkout </p>
        </div>

        <div className="container mx-auto max-w-lg shadow-lg rounded-xl  overflow-hidden bg-gray-100 mt-10">

            <img alt='Project' src={project} />
            <h1 className="text-xl font-medium hover:underline text-center py-2 hover:text-sky-400"><a href="https://rubendc91.github.io/NutriTeam/">NutriTeam</a></h1>
            <p className=" text-gray-600 px-10 py-2">A simple nutrition app to search for meals and get nutrition info about them
                Uses the spoonacular api and quickcharts.io to query foods and generate a chart containing nutrition info</p>
        </div>
        <div className="container mx-auto max-w-lg shadow-lg rounded-xl  overflow-hidden bg-gray-100 mt-10 ">
            <img alt='first-project' src={first} />
            <h1 className="text-xl font-medium hover:underline text-center py-2 hover:text-sky-400 pd-10"><a href="https://bt616.github.io/Web-Portfolio/">Web-Portfolio</a></h1>
            <p className=" text-gray-600 px-10 py-2">This was the first web page i built to showcase my work with standard html and css. The portfolio Has its own url that is deployed from github.</p>
        </div>
        <div className="container mx-auto max-w-lg shadow-lg rounded-xl  overflow-hidden bg-gray-100 mt-10 mb-10 ">
            <img alt='password generator' src={passwordgen} />
            <h1 className="text-xl font-medium hover:underline text-center py-2 hover:text-sky-400 pd-10 "><a href="https://bt616.github.io/password-generator/">Random Password Generator</a></h1>
            <p className=" text-gray-600 px-10 py-2">Random Password generator with prompts to select the criteria. After selecting criteria, you select the red generate button and a randomly selected password is presented in the box.</p>
        </div>

    </div>

}
export default Project;