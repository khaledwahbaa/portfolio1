import React from 'react'
import aboutImage from '../assets/Images/About.png'
const About = ({darkMode}) => {
  return (
    <section id="about" className={
    `min-h-screen overflow-hidden flex
    items-center justify-center
     px-4 sm:px-6 ${darkMode? 
    'bg-gray-900':'bg-gray-50'}`}>
        <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2
        gap-8 sm:gap-12 items-center">
       <figure 
       data-aos="fade-up"
       data-aos-delay='300'
       className='flex flex-wrap justify-center 
       gap-4 relative order-2 lg:order-1'>
        <div className='relative w-75 h-75 lg:w-96 lg:h-96'>
            
            <div className="absolute -inset-6 lg:-inset-20
            bg-linear-to-l from-orange-700 via-amber-800 to-amber-600 
            rotate-12 star-shape z-0"
            data-aos='zoom-in'
            data-aos-delay='600'
            >
            </div>
            <img
             src={aboutImage}  alt='About Image'
             className='absolute inset-0 w-full h-full
              object-cover z-10 transition-all duration-300'  
              data-aos='zoom-in'  
              data-aos-delay='400'
               loading='lazy'
                 width="400"
                height="300"     
            />
        </div>
         </figure>
<article
data-aos='fade-left'
data-aos-delay='300'
className='text-center lg:text-left relative order-1
lg:order-2'>
    <header>
        <h1
        className='text-3xl sm:text-4xl lg:text-5xl
xl:text-6xl font-bold mb-4 sm:mb-6 text-transparent
bg-linear-to-r from-orange-400 to-orange-600 bg-clip-text'
data-aos='fade-up'
data-aos-delay='400'>
About Me
         </h1>
    </header>
    <p
    className={`text-sm sm:text-base lg:text-lg
        xl:text-xl mb-6 sm:mb-8 leading-relaxed
        bg-linear-to-r from-orange-900/10 to-orange-900/5
        p-4 sm:p-6 rounded-xl sm:rounded-2xl backdrop-blur-sm
    ${darkMode ?'text-gray-300': 'text-gray-700' } `}
    data-aos='fade-up'
    data-aos-delay='500'
    >
        I’m Khaled, a passionate Front-End Developer with a keen eye for clean design and modern web experiences. 
        I love turning ideas into interactive, responsive, and visually appealing websites using technologies like React,
         Tailwind CSS, and JavaScript.
         Beyond coding, I focus on building user-friendly
 interfaces that blend creativity with performance — always striving to make every project not just functional, 
 but enjoyable to use.
    </p>
   <div
  className="flex flex-wrap justify-center
  lg:justify-start gap-4 sm:gap-6 lg:gap-8
  mb-6 sm:mb-8"
>
  
  <div
    className="text-center"
    data-aos="zoom-in"
    data-aos-delay="600"
  >
    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-500">
      3+
    </div>
    <div
      className={`text-xs sm:text-sm lg:text-base
      ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}
    >
      Education
    </div>
  </div>

  
  <div
    className="text-center"
    data-aos="zoom-in"
    data-aos-delay="800"
  >
    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-400">
      2+
    </div>
    <div
      className={`text-xs sm:text-sm lg:text-base
      ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}
    >
      Years Experience
    </div>
  </div>
  
  <div
    className="text-center"
    data-aos="zoom-in"
    data-aos-delay="800"
  >
    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-400">
      7+
    </div>
    <div
      className={`text-xs sm:text-sm lg:text-base
      ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}
    >
      Project Completed
    </div>
  </div>
</div>
<button
      className={`w-full sm:w-auto border-2
        border-orange-500
     inline-flex items-center justify-center
      py-2 px-4 sm:px-6 hover:shadow-[0_0_40px_rgb(255,165,0,0.7)]
      rounded-full text-base sm:text-lg
      font-semibold transition-all duration-300 transform
      ${darkMode ? 'text-white bg-orange-500/10':'text-gray-800 bg-white/90'} `}
      data-aos='fade-up'
      data-aos-delay='800' >
      Learn More 
     </button>
           

</article>
    </div>

</section>
  )
}

export default About
