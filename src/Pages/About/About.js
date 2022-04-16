import "./About.css";
import Papa from "./Papa1.JPG";
import 'animate.css';

function About() {
  return (
    

    <section id="one" class="">


        <div class="mt-20 pt-20">
          <h2 class=" text-center about pt-15">
            <span class="number">01. </span>
            About Me{" "}
          </h2>
          <div class="items-center flex flex-wrap">
            <div class="w-full md:w-5/12 ml-auto mr-auto   pl-20">
              <div class="mb-16 ml-9"></div>
              <p class="text-slate-500 bio mt-5 ml-9  text-lg leading-relaxed">
              Hello World! I'm Papa Diop, <span class='text-lg'>Software Engineer </span>  based out of New York.
              I enjoy <span class='text-lg'>solving technical problems</span> and creating a smart <span class='text-lg'> user interface.</span></p>
 <p class="text-slate-500 bio mt-5 ml-9  text-lg leading-relaxed">           
 I have a Bachelor's degree in <span class='text-lg'>Computer Science</span> from Manhattanville College and
a Certificate of <span class='text-lg'>Computer Software Engineering </span> Immersive from General Assembly.
</p>     
<p  class="text-slate-500 bio mt-5 ml-9  text-lg leading-relaxed">

I am open to <span class='text-lg'> job opportunities</span> where I can <span class='text-lg'>contribute </span> , <span class='text-lg'>learn</span> and <span class='text-lg'>grow</span>. If you have a good opportunity that matches my skills and experience then don't hesitate to<span class='text-lg'> contact me.</span> </p>
              <a
              href="#four"
                type="button"
                className="contact mt-4 ml-9 bg-transparent    hover:text-white py-1.5 px-5  rounded"
              >
                Get in Touch
              </a>
            </div>
            <div class="w-full md:w-5/12 mr-20 mr-auto px-1">
              <div class="md:pr-12 ">
                <img
                  alt="..."
                  class="image3 drop-shadow-2xl  sm:pr-20  rounded-bl-lg image shadow-2xl   bg-gradient-to-r from-indigo-500   max-w-full rounded-br-lg    shadow-lg shadow-laser-600"
                  src={Papa}
                />
              </div>
            </div>
          </div>
        </div>
     
 
    </section>
  );
}
export default About;