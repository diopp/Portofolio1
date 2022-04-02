import './About.css';
import Papa from './Papa1.JPG'

function About() {
    return (
<div class=" About relative pt-1 ">
  
<div class="items-center flex flex-wrap">


  
  <div class="w-full md:w-5/12 ml-auto mr-auto px-8  pl-20">
  <div class='mb-16 ml-9'>

<h2 class='about'><span>02. </span>

About Me  </h2>

</div>
<p class="mt-5 ml-9 text-white text-lg leading-relaxed text-blueGray-500">
  
      </p>

      <button
                  type="button"
                  className="  button mt-5 ml-9 button1 bg-transparent  text-laser  hover:text-white py-1.5 px-5  hover:border-transparent rounded"
                >
           Get in Touch
                </button>
  </div>
  <div class="w-full md:w-5/12 mr-20 mr-auto px-1">

    <div class="md:pr-12 ">

 
    <img alt="..." class="shadow-2xl border-b-4 border-indigo-500  bg-gradient-to-r from-indigo-500   max-w-full rounded-br-lg    bg-laser-600 shadow-lg shadow-laser-600" src={Papa} />

      
    
    </div>

 
  </div>
</div>

</div>
     
    )
}
export default About;