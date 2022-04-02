
import './Home.css'
import 'animate.css';


function Home() {
    return (
        <div className=" pb-12 overflow-y-hidden" style={{ minHeight: 500 }}>
            {/* Code block starts */}
       
             
                <div className="">
                    <div className="home container mx-auto flex flex-col items-center py-12 sm:py-24">
                        <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-left flex-col mr-20  mb-5 sm:mb-10">
                            <p className="name ml-14 ">Hello, I am 
                            
                            
                            </p> b
                            <h1 className="ml-14 name1 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl items-left  text-laser-200 font-black leading-7 md:leading-10">
                                Papa Diop,
                              
                            </h1>

                           
                         
                            <div className="typewriter">
                            <h1 className=" h1 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl items-left  text-gray-800 font-black leading-7 md:leading-10 pr-9">
                            <span className=' '>&#60;</span> software Engineer <span>&#8725;</span> <span>&#62;</span>
                              
                            </h1>
                            </div>

                            <p className="ml-14 p mt-5 sm:mt-10 lg:w-10/12 text-gray-400 font-normal item-left text-sm sm:text-lg">

                            I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at Upstatement.


                            </p>
                            <br></br>
                            <button
                  type="button"
                  className=" button1 bg-transparent  text-laser  hover:text-white py-1.5 px-5  hover:border-transparent rounded"
                >
           See My Work
                </button>

                        </div>

                        
                     
                    </div>
                </div>
        
        
        </div>

    );
}

export default Home;