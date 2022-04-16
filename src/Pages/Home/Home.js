import React, { useState } from "react";
import { BsLinkedin } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import Papa from "./Papa.JPG";
import "./Home.css";
import "animate.css";

function Home() {

  return (

 <section class='home'>
    <div
      className="home pb-12 overflow-y-hidden"
      id="home"
      style={{ minHeight: 600 }}
    >

      <div className="bg-gray-100">
        <div className="container mx-auto flex flex-col items-center py-12 sm:py-24">
          <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col  mb-5 sm:mb-10">
            <h1 className=" papa text-4xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center leading-7 md:leading-10">
              👋🏿 Hi, I'm Papa
            </h1>
            <h5
              id="software"
              className="sm:pl-10 sm:mr-10  text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center  font-black leading-7 md:leading-10"
            >
              Software Engineer
            </h5>
            <p className="mt-5 sm:mt-10 lg:w-10/12 text-slate-500 font-normal text-center text-sm sm:text-lg">
              I build things on the Internet. This is my site, where I share
              whatever side projects I've been working on.{" "}
            </p>
          </div>
          <div className="flex justify-center items-center">
            <div class="flex justify-center mb-9">
              <a target="_blank" href="https://www.linkedin.com/in/papa-diop1/" class="mr-9 linkedin">
                <BsLinkedin size={35} />
              </a>

              <a target="_blank" href="https://github.com/diopp" class="mr-9  github ">
                <AiFillGithub size={45}  />
              </a>

              
            </div>



            
          </div>
          
         
                <img
                  alt="..."
                  class="scale-75 image1 drop-shadow-2xl  sm:pr-20  rounded-bl-lg image shadow-2xl   bg-gradient-to-r from-indigo-500   max-w-full rounded-br-lg    shadow-lg shadow-laser-600"
                  src={Papa}
                />
          
        
        </div>
      </div>


    </div>

    <div orientation="right" class='side '>
      <div class='email'>
        <a href="mailto:pd@papadiop.com">pd@papadiop.com</a>
      
      </div>
    </div>
    </section>
  );
}

export default Home;
