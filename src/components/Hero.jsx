import instagram from '../assets/Icons/instagram.png'
import facebook from '../assets/Icons/facebook.png'
import github from '../assets/Icons/github.png'
import youtube from '../assets/Icons/youtube.png'
import hero from '../assets/Images/Hero.png'
import htmlIcon from '../assets/Icons/html-5.png'
import cssIcon from '../assets/Icons/css-3.png'  
import cppIcon from '../assets/Icons/c-sharp.png'
import jsIcon from '../assets/Icons/programing.png'
import CV from '../assets/CVModi.pdf'
import { DownloadIcon } from 'lucide-react'
import { Mail } from 'lucide-react'
const Hero = ({darkMode}) => {
   const socicalIcons=[
    {icon: instagram, alt: 'Instagram' },
    {icon: facebook, alt: 'Facebook'},
    {icon: github, alt:'GitHub'},
    {icon: youtube, alt:'Youtube'}, 
   ];
   
    const darkTheme={
        textPriamary: 'text-white',
        textSecondary: 'text-gray-300',
        buttonSecondary: 'text-white border-2 border-orange-500 hover:bg-orange-600',
        decorativeCircle: 'bg-orange-500 opacity-10'
    };
    const lightTheme={
        textPriamary:'text-gray-900',
        textSecondary: 'text-gray-700',
        buttonSecondary: 'text-gray-800 border-2 border-orange-500 hover:bg-orange-500 hover:text-whit',
        decorativeCircle: 'bg-orange-400 opacity-20',
      };
    const theme = darkMode ? darkTheme : lightTheme;

  return (
    <div className='relative overflow-hidden min-h-screen flex flex-col'>
      <section 
      id='home'
      data-aos='fade-up'
      data-aos-delay='250'
    className='body-font z-10' >
       <div
        className='container mx-auto flex px-4 sm:px lg:px-14 py-12 lg:py-32 flex-col lg:flex-row items-center justify-between lg:mt-0 mt-14'>

         <div className='lg:w-1/2 w-full flex flex-col items-center lg:items-start text-center lg:text-left m-12 lg:mb-0 '>
<div className='flex justify-center lg:justify-center lg;justify-start gap-4 sm:gap-6 mb-6 sm:mb-7 w-full'>
  {socicalIcons.map((icon, index) => (
    <a 
   key={index}
    href='#'
    target='_blank'
    data-aos-delay={`${400+index*100}`}
    className= 'transform hover:scale-110 transition-transform duration-300'
     >
    <img src={icon.icon}
     alt={icon.alt} 
     className= {`w-8 h-8 sm:w-10 sm:h-10 object-contain ${darkMode?'': 'filter brightness-75'}`} />
     </a>
                  ))};
 
             </div>
             <h1 className={`title-font text-3xl 
             sm:text-4xl lg:text-5xl mb-4
              font-bold ${theme.textPriamary}`}
             data-aos='fade-up'
             data-aos-delay='500'
             >
              HI I`m Khaled Wahba
             </h1>
             <p
              className={`mb-8 leading-relaxed max-w-xl ${theme.textSecondary}`}
              data-aos="fade-up"
              data-aos-delay="700"
            >
              Frontend Developer & Computer Science Student passionate about
              building modern, responsive web experiences.
            </p>
            
<div
  className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4"
  data-aos="fade-up"
  data-aos-delay="700"
>
  <a href={CV} download className="w-full sm:w-auto">
    <button
      className="w-full sm:w-auto inline-flex items-center justify-center
      text-white bg-linear-to-r from-gray-900 to-gray-700 border-0 py-3 px-6 sm:px-8
      hover:shadow-[0_0_40px_rgb(255,165,0,0.7)]
      rounded-full text-base sm:text-lg font-semibold
      transition-all duration-300 transform"
    >
      <DownloadIcon className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
      Download CV
    </button>
  </a>

  <a href="#contact" className="w-full sm:w-auto">
    <button
      className={`w-full sm:w-auto inline-flex items-center justify-center
      ${theme.buttonSecondary}
      py-3 px-6 sm:px-8
      hover:shadow-[0_0_40px_rgb(255,165,0,0.7)]
      rounded-full text-base sm:text-lg
      font-semibold transition-all duration-300 transform`}
    >
      <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
      Contact Me
                 </button>
                 </a>
               </div>
             </div>
             
         <div className=' lg:w-1/2 w-full max-w-md lg:max-w-lg mt-8
         lg:mt-0 flex justify-center'
         data-aos='fade-left'
         data-aos-delay='400'>
            <div className='relative w-4/5 sm:w-3/4 lg:w-full'>
          <div className='relative overflow-hidden'>
            <img 
            src={hero} alt='Hero Image'
            className='w-full h-auto object-cover transform hover:scale-105 
            transition-transform duration-500 '
                 width="1200"
                height="600"
                fetchPriority="high"/>
          </div>
          
 <div className="flex items-center justify-center gap-4">
  <img
    src={htmlIcon} alt="HTML Icon"
    className="w-14 sm:w-20 h-14 sm:h-20 
    object-contain animate-bounce opacity-90"
    width="200"
    height="50"
    loading="lazy"/>
  <img
    src={cssIcon} alt="CSS Icon"
    className="w-14 sm:w-20 h-14 sm:h-20
     object-contain animate-bounce opacity-90"
     width="200"
    height="50"
    loading="lazy"/>
  <img
    src={cppIcon} alt="C++ Icon"
    className="w-14 sm:w-20 h-14 sm:h-20 
    object-contain animate-bounce opacity-90"
    width="200"
    height="50"
    loading="lazy"/>
  <img
  src={jsIcon}  alt="JS Icon"
    className="w-14 sm:w-20 h-14 sm:h-20 
    object-contain animate-bounce opacity-90"
    width="200"
    height="50"
    loading="lazy"
  />
</div>

            </div>
              </div>  
    </div>
    <div className={`absolute- top-20 -left-20 2-40 h-40 sm:w-64
       ${theme.decorativeCircle} rounded-full 
       mix-blend-multiply filter blur-3xl opacity-10 animate-pulse 
       delay-1000 hidden sm:block`}>
      </div>   
  </section>
      
      
    </div>
  )
}

export default Hero
