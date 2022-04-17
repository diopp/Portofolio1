import "./Project.css";
import 'animate.css'
import Coffee from "./Coffee.png";
import bughut from "./bughut.png";
import shoppa from './shoppa.png';
import { AiFillBug, AiOutlineHtml5 } from "react-icons/ai";
import { FiCoffee } from "react-icons/fi";
import { SiCanva, SiTailwindcss, SiExpress, SiPython } from "react-icons/si";
import {
  DiReact,
  DiPostgresql,
  DiDjango,
  DiCss3,
  DiJavascript1,
  DiJqueryLogo,
  DiMongodb,
  DiSass,
} from "react-icons/di";
import { GiShoppingCart } from "react-icons/gi";
import { BsBootstrap } from "react-icons/bs";
import { FaNode } from "react-icons/fa";
export default function Project() {
  return (
    <>
      <section id="three">
        <div class="mt-20 pt-20">
          <h2 class="text-center about pt-15">
            <span class="number">03. </span>
            Projects{" "}
          </h2>
        </div>
        <div class="mx-auto flex px-5 b1  md:flex-row flex-col items-center jobcard">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center">
            <figure class="visible">
              <div class="">
                <div class="  sm:px-6 ml-20">
                  <span class=" bug inline-block py-5 px-5 ml-5   text-xs font-bold tracking-widest mb-2">
                    <AiFillBug size={35} />{" "}
                  </span>
                  <h1 class=" title title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-100 ml-5">
                    Bug Tracker
                  </h1>
                  <p class=" p1 text-slate-500 text-sm  pb-6 ml-5">
                    A full stack responsive web app for teams to track bugs in
                    their code
                  </p>

                  <div class="text-left pl-4 ">
            <span class=" b inline-block rounded-full bg-gray-200 px-2 py-1 text-xs font-bold mr-3">HTML</span>
            <span class=" b inline-block rounded-full bg-gray-200 px-2 py-1 text-xs font-bold mr-3">CSS</span>
            <span class="b inline-block rounded-full bg-gray-200 px-2 py-1 text-xs font-bold mr-3">Javascript</span>
            <span class="b inline-block rounded-full bg-gray-200 px-2 py-1 text-xs font-bold mr-3">Jquery</span>
            <span class="inline-block rounded-full bg-gray-200 px-2 py-1 text-xs font-bold mr-3">Node.js</span>
            <h1></h1>
            <span class="b inline-block rounded-full bg-gray-200 px-2 py-1 text-xs font-bold mr-3">Bootstrap</span>
            <span class="b inline-block rounded-full bg-gray-200 px-2 py-1 text-xs font-bold mr-3">MongoDB</span>
            <span class="b inline-block rounded-full bg-gray-200 px-2 py-1 text-xs font-bold mr-3">Mongoose</span>
            <span class="b inline-block rounded-full bg-gray-200 px-2 py-1 text-xs font-bold mr-3">Express</span>
            
          
        </div>
       
                  <div class=" buttons ml-2 pt-5">
                    <a
                    href='https://bughut.herokuapp.com/'
                      type="button"
                      className=" demo ml-3 px-2   hover:text-white py-3 px-6   rounded"
                    >
                      View Demo
                    </a>
                    <a
                    href="https://github.com/diopp/Bughut"
                      type="button"
                      className=" demo1   py-3 px-7 rounded"
                    >
                      View Github Repo
                    </a>
                  </div>
                </div>
              </div>
            </figure>
          </div>
          <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pr-1 flex flex-col md:items-start md:text-right mb-16 md:mb-0 items-center">
            <img
              class=" project1 bughut object-cover object-center rounded scale-125 pr-10"
              alt="hero"
              src={bughut}
            />
          </div>
        </div>

        <div class="mx-auto flex px-4  md:flex-row flex-col items-center jobcard">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-15 flex flex-col md:items-start  mb-16 md:mb-0 items-center">
            <img
              class="project4 bughut object-cover object-center rounded scale-125"
              alt="hero"
              src={Coffee}
            />
          </div>

          <div class="  lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center ">
            <figure class="visible">
              <div class="">
                <div class="content  sm:px-6 ">
                  <span class=" bug inline-block py-5 px-5 ml-5   text-xs font-bold tracking-widest mb-2">
                    <FiCoffee size={30} />{" "}
                  </span>
                  <h1 class=" title title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-100 ml-5">
                    Phoenix Roasters
                  </h1>
                  <p class=" text-slate-500  text-base pb-6 ml-5">
                    This application is designed to be an interactive to-go
                    ordering website for local coffee websites. Easily
                    customizeable by the client to fit any future needs as the
                    buisness grows. A group programming project with
                    <a href="https://github.com/elvisEspinozaN"> Elvis Espinoza</a>,&nbsp;<a href="https://github.com/longplu">Long Lu</a> and
                    &nbsp;<a href="https://github.com/Trinityfore">Trinity Fore</a>.
                  </p>
                

                  <div class="text-left pl-4 ">
            <span class="inline-block rounded-full bg-gray-200 px-2 py-1 text-xs font-bold mr-3">HTML</span>
            <span class="inline-block rounded-full bg-gray-200 px-2 py-1 text-xs font-bold mr-3">CSS</span>
            <span class="inline-block rounded-full bg-gray-200 px-2 py-1 text-xs font-bold mr-3">Javascript</span>
            <span class="inline-block rounded-full bg-gray-200 px-2 py-1 text-xs font-bold mr-3">Django</span>
            <span class="inline-block rounded-full bg-gray-200 px-2 py-1 text-xs font-bold mr-3">Python</span>
            <h1></h1>
            <span class="inline-block rounded-full bg-gray-200 px-2 py-1 text-xs font-bold mr-3">PostgreSQL</span>
            <span class="inline-block rounded-full bg-gray-200 px-2 py-1 text-xs font-bold mr-3">Bootstrap</span>
            <span class="inline-block rounded-full bg-gray-200 px-2 py-1 text-xs font-bold mr-3">SASS</span>

            
          
        </div>



                  <div class="ml-2 mt-4">
                    <a
                      type="button"
                      className=" demo ml-3 px-2   hover:text-white py-3 px-6   rounded"
                      href="https://phoenix-roasters.herokuapp.com/"
                    >
                      View Demo
                    </a>
                    <a
                    href="https://github.com/longplu/phoenix_roasters"
                   
                      type="button"
                      className=" demo1   py-3 px-7 rounded"
                    >
                      View Github Repo
                    </a>
                  </div>
                </div>
              </div>
            </figure>
          </div>
        </div>

        <div class="mx-auto flex px-5  md:flex-row flex-col items-center jobcard">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center">
            <figure class="visible">
              <div class="">
                <div class="  sm:px-6 ml-20">
                  <span class="  bug inline-block py-5 px-5 ml-5   text-xs font-bold tracking-widest mb-2">
                    <GiShoppingCart size={30} />{" "}
                  </span>
                  <h1 class=" title title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-100 ml-5">
                    Fruit Shop
                  </h1>
                  <p class="text-slate-500  text-base pb-6 ml-5">
                  An eCommerce app with shopping cart built with MERN stack


                  </p>
                  <div class="text-left pl-4 ">
            <span class="inline-block rounded-full bg-gray-200 px-2 py-1 text-xs font-bold mr-3">HTML</span>
            <span class="inline-block rounded-full bg-gray-200 px-2 py-1 text-xs font-bold mr-3">CSS</span>
            <span class="inline-block rounded-full bg-gray-200 px-2 py-1 text-xs font-bold mr-3">Javascript</span>
            <span class="inline-block rounded-full bg-gray-200 px-2 py-1 text-xs font-bold mr-3">React</span>
            <span class="inline-block rounded-full bg-gray-200 px-2 py-1 text-xs font-bold mr-3">Tailwind</span>
            <h1></h1>
            <span class="inline-block rounded-full bg-gray-200 px-2 py-1 text-xs font-bold mr-3">Node.js</span>
            <span class="inline-block rounded-full bg-gray-200 px-2 py-1 text-xs font-bold mr-3">Express</span>
            <span class="inline-block rounded-full bg-gray-200 px-2 py-1 text-xs font-bold mr-3">MongoDB</span>
            <span class="inline-block rounded-full bg-gray-200 px-2 py-1 text-xs font-bold mr-3">Mongoose</span>

            
          
        </div>
                  <div class="ml-2 mt-4">
                    <a
                      type="button"
                      className=" demo ml-3 px-2   hover:text-white py-3 px-6   rounded"
                    >
                      View Demo
                    </a>
                    <a
                      href="https://github.com/diopp/fruitshop1"
                      type="button"
                      className=" demo1   py-3 px-7 rounded"
                    >
                      View Github Repo
                    </a>
                  </div>
                </div>
              </div>
            </figure>
          </div>
          <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pr-1 flex flex-col md:items-start md:text-right mb-16 md:mb-0 items-center">
            <img
              class=" project1 bughut object-cover object-center rounded scale-150"
              alt="hero"
              src={shoppa}
            />
          </div>
        </div>
      </section>
    </>
  );
}
