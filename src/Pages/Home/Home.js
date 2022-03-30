
import './Home.css'


import React, { useState } from "react";
function Home() {
    return (
        <div className=" pb-12 overflow-y-hidden" style={{ minHeight: 700 }}>
            {/* Code block starts */}
       
             
                <div className="">
                    <div className="container mx-auto flex flex-col items-center py-12 sm:py-24">
                        <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-left flex-col mr-20  mb-5 sm:mb-10">
                            <p className="name text-white">Hi, my name is</p>
                            <h1 className=" h1 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl items-left  text-gray-800 font-black leading-7 md:leading-10">
                                Papa Diop.
                              
                            </h1>

                            <h1 className=" h1 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl items-left  text-gray-800 font-black leading-7 md:leading-10">
                            I build things for the web.
                              
                            </h1>

                            <p className="mt-5 sm:mt-10 lg:w-10/12 text-gray-400 font-normal item-left text-sm sm:text-lg">

                            I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at Upstatement.


                            </p>
                        </div>
                     
                    </div>
                </div>
        
            {/* Code block ends */}
        </div>

    );
}

export default Home;