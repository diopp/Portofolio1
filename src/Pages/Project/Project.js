import "./Project.css";
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
        <div class="mx-auto flex px-5  md:flex-row flex-col items-center jobcard">
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
                  <p class="text-slate-500  pb-6 ml-5">
                    A CRUD Node.js responsive web app for teams to track bugs in
                    their code
                  </p>

                  <div class="grid grid-cols-6 sm:grid-cols-6 gap-20 m-auto pr-auto">
                  <span class="inline-flex items-center justify-center px-8 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">HTML</span>
                  <span class="inline-flex items-center justify-center px-8 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">CSS</span>
                  <span class="inline-flex items-center justify-center px-8 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">Javascript</span>
                  <span class="inline-flex items-center justify-center px-8 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">Jquery</span>
                  <span class="inline-flex items-center justify-center px-8 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">MongoDB</span>
                  <span class="inline-flex items-center justify-center px-8 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">Bootstrap</span>
                  <span class="inline-flex items-center justify-center px-8 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">99+</span>
</div>
                  <div class="ml-2">
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
              class=" project1 bughut object-cover object-center rounded scale-125"
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
                  <p class="text-indigo-200 text-base pb-6 ml-4">
                    <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                      <li>
                        <a
                          href="#"
                          class="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                          aria-current="page"
                        >
                          <AiOutlineHtml5 size={30} />
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          class="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                          aria-current="page"
                        >
                          <DiCss3 size={30} />
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="#"
                          class="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                          aria-current="page"
                        >
                          <DiJavascript1 size={30} />
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="#"
                          class="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                          aria-current="page"
                        >
                          <DiDjango size={30} />
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="#"
                          class="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                          aria-current="page"
                        >
                          <BsBootstrap size={30} />
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="#"
                          class="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                          aria-current="page"
                        >
                          <DiPostgresql size={30} />
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="#"
                          class="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                          aria-current="page"
                        >
                          <DiSass size={30} />
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="#"
                          class="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                          aria-current="page"
                        >
                          <SiPython SiCanva size={30} />
                        </a>{" "}
                      </li>

                      <li>
                        <a
                          href="#"
                          class="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                          aria-current="page"
                        >
                          <SiCanva size={30} />
                        </a>{" "}
                      </li>
                    </ul>
                  </p>
                  <div class="ml-2">
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
                  <p class="text-indigo-200 text-base pb-6 ml-4">
                    <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                      <li>
                        <a
                          href="#"
                          class="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                          aria-current="page"
                        >
                          <AiOutlineHtml5 size={30} />
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          class="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                          aria-current="page"
                        >
                          <DiCss3 size={30} />
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="#"
                          class="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                          aria-current="page"
                        >
                          <DiJavascript1 size={30} />
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="#"
                          class="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                          aria-current="page"
                        >
                          <DiReact size={30} />
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="#"
                          class="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                          aria-current="page"
                        >
                          <SiTailwindcss size={30} />
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="#"
                          class="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                          aria-current="page"
                        >
                          <DiMongodb size={30} />
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="#"
                          class="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                          aria-current="page"
                        >
                          <SiExpress size={30} />
                        </a>{" "}
                      </li>
                    </ul>
                  </p>
                  <div class="ml-2">
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
