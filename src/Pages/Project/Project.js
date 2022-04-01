import Project2 from './Project2.PNG'
import './Project.css'
export default function Project() {
    return (

      <>









      
      <div className="md:mx-auto md:container px-4">
          <div className="pt-10 md:pt-40">
              <div className="container mx-auto">
                  <div className="flex flex-wrap items-center pb-12">
                      <div className="md:w-1/2 lg:w-1/2 w-full xl:pr-20kom l;l md:pr-6">
                          <div className="py-2 ml-2 text-color">
                          <h1 className="text-2xl lg:text-6xl text-white tracking-tighter md:leading-snug f-f-l font-black">Bug Tracker</h1>
                              <h2 className="text-lg lg:text-3xl lg:leading-7 md:leading-10 f-f-r py-4 md:py-8">Here at Globex we take special care of what your organization needs instead of selling you a mass market tool that takes a one size fits all approach. I personally review each and every client business and oversee the team that tailores a solution</h2>
                              <div className="flex items-center cursor-pointer pb-4 md:pb-0">
                              <button
                  type="button"
                  className=" bg-transparent hover:bg-teal-300 text-teal-300 font-semibold hover:text-white py-1.5 px-7 border border-teal-300 hover:border-transparent rounded"
                >
                 View It Here
                </button>


                <button
                  type="button"
                  className=" bg-transparent hover:bg-teal-300 text-teal-300 font-semibold hover:text-white py-1.5 px-4 border border-teal-300 hover:border-transparent rounded"
                >
                 View Github Repo
                </button>
                       
                              </div>
                          </div>
                      </div>
                      <div className="lg:w-1/2 md:w-1/2 w-full relative h-96 flex items-end justify-center ">
                          <img className="absolute w-full h-full inset-0 object-cover object-center " src={Project2} alt />
                        
                      </div>
                  </div>
              </div>
          </div>
          <div className="pb-32 pt-16">
              <div className="mx-auto">
              <div className="flex flex-wrap items-center pb-12">
                  <div className="flex flex-wrap flex-row-reverse items-center">
                      <div className="md:w-1/2 lg:w-1/2 w-full xl:pr-20kom l;l md:pr-6">
                          <div className="py-2 text-color">
                              <h1 className="text-2xl lg:text-6xl text-white tracking-tighter md:leading-snug f-f-l font-black ml-7">Phoenix Roasters</h1>
                              <h2 className="text-lg lg:text-3xl lg:leading-7 md:leading-10 f-f-r py-4 md:py-8 ml-7">Here at Globex we take special care of what your organization needs instead of selling you a mass market tool that takes a one size fits all approach. I personally review each and every client business and oversee the team that tailores a solution</h2>
                              <div className="flex items-center cursor-pointer pb-4 md:pb-0 ml-7">
                              <button
                  type="button"
                  className=" bg-transparent hover:bg-teal-300 text-teal-300 font-semibold hover:text-white py-1.5 px-7 border border-teal-300 hover:border-transparent rounded"
                >
                 View It Here
                </button>


                <button
                  type="button"
                  className=" bg-transparent hover:bg-teal-300 text-teal-300 font-semibold hover:text-white py-1.5 px-4 border border-teal-300 hover:border-transparent rounded"
                >
                 View Github Repo
                </button>

                              </div>
                          </div>
                      </div>
                      <div className="lg:w-1/2 md:w-1/2 w-full relative h-96 flex items-end justify-center">
                          <img className="absolute w-full h-full inset-0 object-cover object-center rounded-md" src="https://cdn.tuk.dev/assets/templates/prodify/invoicing-system.png" alt />
                      
                        
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          </div>

          

     
  </>
      
  
    );
}
