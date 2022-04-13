import "./About.css";
import Papa from "./Papa1.JPG";

function About() {
  return (

    
    <div id="about">
      <section id="one" class="">
        <div class=" About  ">
          <h2 class=" text-center about pt-15">
            <span class="number">01. </span>
            About Me{" "}
          </h2>
          <div class="items-center flex flex-wrap">
            <div class="w-full md:w-5/12 ml-auto mr-auto   pl-20">
              <div class="mb-16 ml-9"></div>
              <p class="text-slate-500 bio mt-5 ml-9  text-lg leading-relaxed">
              Hello World! I'm Papa Diop, a Software Engineer based out of New York.
              I enjoy solving technical problems and creating a smart user interface.
            
              I have a BA in Computer Science from Manhattanville College and
a Certificate of Computer Software Engineering Immersive from General Assembly.
     


In my free time you will find me going for a run or playing monoploy. </p>
              <button
                type="button"
                className="contact mt-5 ml-9 bg-transparent    hover:text-white py-1.5 px-5  rounded"
              >
                Get in Touch
              </button>
            </div>
            <div class="w-full md:w-5/12 mr-20 mr-auto px-1">
              <div class="md:pr-12 ">
                <img
                  alt="..."
                  class=" drop-shadow-2xl   rounded-bl-lg image shadow-2xl   bg-gradient-to-r from-indigo-500   max-w-full rounded-br-lg    shadow-lg shadow-laser-600"
                  src={Papa}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default About;