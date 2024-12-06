import React from 'react';

const About = () => {
  return (
    <section id="services" className="mt-[4rem] md:mt-[4rem] flex flex-col md:items-center w-full p-6">
      <div className="relative w-full md:w-[36rem] h-[36rem] "> {/* Adjust the h-[300px] to the desired size */}
        <video 
          autoPlay 
          muted 
          loop 
          className="w-full h-full object-cover rounded-xl" // Cover the area and hide overflow
        >
          <source src="/assets/ai-sonnet.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-16 mt-10 md:mt-16">
        <div className="md:text-center">
          <h2>💡Innovate</h2>
          <p className="text-gray-400 text-sm font-normal">Creating faster digital solutions</p>
        </div>
        <div className="border-gray-200 md:border-l-2 border-t-2 md:border-t-0 h-0 md:h-12 w-full md:w-0"></div>
        <div className="md:text-center">
          <h2>20 hrs</h2>
          <p className="text-gray-400 text-sm font-normal">Weekly Saved through AI</p>
        </div>
        <div className="border-gray-200 md:border-l-2 border-t-2 md:border-t-0 h-0 md:h-12 w-full md:w-0"></div>
        <div className="md:text-center">
          <h2>40%</h2>
          <p className="text-gray-400 text-sm font-normal">Reduced Cost by Automating</p>
        </div>
      </div>

      <div 
  className="flex flex-col md:flex-row items-start md:items-center w-full rounded-lg md:w-[40rem] gap-4 md:gap-16 mt-[4rem] md:mt-16 bg-gray-100 p-2 relative overflow-hidden"
  style={{
    backgroundImage: "url('/assets/aisonnet-graphics.avif')",
    backgroundPosition: "right",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    filter: "grayscale(100%)",
    opacity: 100,
 // Optional: makes the image grayscale
  }}
>
  <div className="bg-white bg-opacity-80 p-6 md:p-8 rounded-lg z-10 opacity-40">
    <h1 className="text-2xl font-bold ">What is our mission?</h1>
    <p className="text-gray-700 mt-4">
    At AI Sonnet, our mission is to empower businesses with cutting-edge AI solutions that simplify operations, enhance customer experiences, and drive growth. We aim to make AI accessible and impactful by creating personalized, efficient, and innovative automation tools. <br/><br/>By combining technology with creativity, we strive to transform the way businesses interact, communicate, and succeed in an ever-evolving digital world. Together, we shape the future of intelligent automation.
    </p>
  </div>
</div>



    </section>
  );
}

export default About;
