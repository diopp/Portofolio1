import "./About.css";
import Papa from "./Papa1.JPG";
import 'animate.css';
import { AnimationOnScroll } from 'react-animation-on-scroll';

function About() {
  return (
    

    <section id="one" >


        <div class="mt-20 pt-20">
          <h2 id='About' class=" text-center sm:pt-3 about pt-1 mb-15">

            <span class="number1">01. </span>
            About Me{" "}
          </h2>
          <div class="items-center flex flex-wrap pt-16">
            <div class="w-full md:w-5/12 ml-auto mr-auto   pl-20">
              
              <AnimationOnScroll animateIn="animate__slideInLeft">
              <p class="text-slate-500 bio mt-5 ml-9  text-lg leading-relaxed">
              Hello World! I'm Papa Diop, <span class='text-lg'>Software Engineer </span>  based out of New York.
              I enjoy <span class='text-lg'>solving technical problems</span> and creating a smart <span class='text-lg'> user interface.</span></p>
 <p class="text-slate-500 bio mt-5 ml-9  text-lg leading-relaxed">           
 I have a Bachelor's degree in <span class='text-lg'>Computer Science</span> from Manhattanville College and
a Certificate of <span class='text-lg'>Computer Software Engineering </span> Immersive from General Assembly.
</p>     
<p  class="text-slate-500 bio mt-5 ml-9  text-lg leading-relaxed">

I am open to <span class='text-lg'> job opportunities</span> where I can <span class='text-lg'>contribute </span> , <span class='text-lg'>learn</span> and <span class='text-lg'>grow</span>. If you have a good opportunity that matches my skills and experience then don't hesitate to<span class='text-lg'> contact me.</span> </p>
</AnimationOnScroll>
              <a
              id="get"
              href="#four"
                type="button"
                className=" duration-400 hover:-translate-y-1 hover:scale-110 transition ease-in-out delay-150 contact mt-4 ml-9  py-1.5 px-5  rounded"
              >
                Get in Touch
              </a>
            </div>
            <div class="w-full md:w-5/12 mr-20 mr-auto px-1">
            <AnimationOnScroll animateIn="animate__slideInRight">
              <div class="md:pr-12 ">
                <img
                id="image_About"
                  alt="..."
                  class="scale-100 drop-shadow-2xl  sm:pr-20  rounded-bl-lg  shadow-2xl image   bg-gradient-to-r from-indigo-500   max-w-full rounded-br-lg    shadow-lg shadow-laser-600"
                  src={Papa}
                />
              </div>
              </AnimationOnScroll>
            </div>
          </div>
        </div>
     
 
    </section>
  );
}
export default About;