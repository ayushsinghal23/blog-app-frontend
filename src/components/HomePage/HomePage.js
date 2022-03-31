import React from "react";
import poster from "../../img/DL-Charki-Enterprise-Social-Media-Networking-1200.jpg";
const HomePage = () => {

  return (
    <>
      <section className="pb-10 bg-gray-800" style={{padding:"20px"}}>
        <div className="relative container mx-auto">
          <div className="flex flex-wrap items-center -mx-4 mb-10 2xl:mb-14" >
            <div className="w-full lg:w-1/2 px-4 mb-16 lg:mb-0">
              <span className="text-lg font-bold text-blue-400">
                Open yourself to the new world
              </span>
              <h2 className="max-w-2xl mt-12 mb-12 text-6xl 2xl:text-8xl text-white font-bold font-heading" style={{fontSize:"70px"}}>
               A One Stop Platform for Working Professionals 
                <span className="text-yellow-500"> Start By creating a post</span>
              </h2>
              <p className="mb-12 lg:mb-10 2xl:mb-16 text-xl text-gray-100">
                Your post must be free from racism and unhealthy words
              </p>
              <a
                className="inline-block px-12 py-5 text-lg text-white font-bold bg-blue-500 hover:bg-blue-600 rounded-full transition duration-200"
                href="http://localhost:3000/create-post"
              >
                Create Post
              </a>
            </div>
            <div className="w-full lg:w-1/2 " style={{marginTop:"4px", height:"auto",width:"600px"}}>
              <img className="w-full" src={poster} alt={poster} />
            </div>               
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
