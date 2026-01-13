import 'boxicons/css/boxicons.min.css';
import Spline from '@splinetool/react-spline';

const Brain = () => {
   
  return (
    <main className="flex lg:mt-20 flex-col lg:flex-row items-center 
    justify-between min-h-[calc(90vh-6rem)]">
        <div data-aos="fade-right" data-aos-easing="ease-in-sine" data-aos-offset="300" className="max-w-xl ml-[5%] z-10 ,t-[90%] md:mt-[60%] lg:mt-0">
            <div className='relative w-[95%] sm-w-48 h-10 bg-gradient-to-r from-[#00F0FF] to-[#8A2BE2]
            shadow-[0_0_15px_rgba(255,255,255,0.4)] rounded-full'> 
                <div className='absolute inset-[3px] bg-black rounded-full flex items-center justify-center gap-1'>
                    <i class='bx bx-brain'></i>
                    THE UNIVERSE WITHIN

                </div>
            </div>
            <h1  className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wider my-8'>
                The brain is not just an organ… it is where reality unfolds.
            </h1>
            <p className='text-base sm:text-lg tracking-wider text-gray-400 max-w[25rem] lg:max-w-[30rem]'>
                Each thought sparks creation, each memory echoes eternity.The mind doesn’t just hold knowledge,it shapes worlds and dreams.
            </p>
            <div className='flex gap-4 mt-12'>
                <a className='border broder-[#8A2BE2] py-2 sm:py-3 px-4 sm:px-5 rounded-full sm:text-lg
                text-sm font-semibold tracking-wider transition-all duration-300 hover:bg-[#8A2BE2]' href='#'> 
                    About the Mind <i class='bx bx-link-external'></i>
                </a>
                <a className='border broder-[#2a2a2a] py-2 sm:py-3 px-4 sm:px-5 rounded-full sm:text-lg
                text-sm font-semibold tracking-wider transition-all duration-300 hover:bg-[#8A2BE2]
                bg-gray-300 text-black hover:text-white' href='#'> 
                    Creativity <i class='bx bx-link-external'></i>
                </a>
            </div>

        </div>
        
          <Spline  data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-dalay="30" data-aos-offset="0" data-aos-duration="300"
        className='absolute lg:top-0 top-[-20%] bottom-0 lg:left-[25% sm:left-[20%] h-full' 
        scene="https://prod.spline.design/R4HgYjZsrdgEL9mm/scene.splinecode" />
    </main>
  )
}

export default Brain
