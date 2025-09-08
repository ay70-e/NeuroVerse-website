
import 'boxicons/css/boxicons.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Header = () => {
    const togglemobilemenu = () => {
        const mobilemenu = document.getElementById('mobilemenu')
        if(mobilemenu.classList.contains('hidden')){
            mobilemenu.classList.remove('hidden');
        } else{
            mobilemenu.classList.add('hidden');
        }
    }
     useEffect(() => {
        AOS.init({
            duration:1500,
            once: true,
        })
    })
    return(
        <header className="flex justify-between items-center py-4 px-4 lg:px-20">
            <h1 data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500" className="text-2xl font-light md:text-3xl lg:text-4xl m-0">
                NeuroVerse</h1>

            <nav data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000" className="hidden md:flex items-center gap-12">
                <a data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500" className="text-base tracking-wider
                z-50 transition-colors hover:text-[#8A2BE2]" 
                href="#">
                    Mind
                </a>
                <a data-aos="fade-down" data-aos-easing="linear" data-aos-duration="2000" className="text-base tracking-wider
                z-50 transition-colors hover:text-[#8A2BE2]" 
                href="#">
                    Consciousness
                </a>
                <a data-aos="fade-down" data-aos-easing="linear" data-aos-duration="2500" className="text-base tracking-wider
                z-50 transition-colors hover:text-[#8A2BE2]" 
                href="#">
                    Dimensions
                </a>
                <a className="text-base tracking-wider
                z-50 transition-colors hover:text-[#8A2BE2]" 
                href="#">
                    Beyond
                </a>
            </nav>
            <button className="hidden md:block bg-[#8A2BE2] text-white
            py-3 px-8 rounded-full border-none font-medium transition-all 
            duration-500 hover:bg-[#9F4BFF] hover:shadow-2xl cursor-pointer z-50">
                SignIn
            </button>
            <button onClick={togglemobilemenu} className="md:hidden text-3xl p-2 z-50">
                <i class='bx  bx-menu'  ></i> 
            </button>

            <div id="mobilemenu" className="hidden fixed top-16 bottem-0 right-0 left-0
            p-5 md:hidden z-40 bg-black bg-opacity-70 backdrop-blur-md">
                <nav className="flex flex-col gap-6">
                    <a className="text-base tracking-wider
                z-50 transition-colors hover:text-[#8A2BE2]" 
                href="#">
                   Mind
                </a>
                <a className="text-base tracking-wider
                z-50 transition-colors hover:text-[#8A2BE2]" 
                href="#">
                     Consciousness
                </a>
                <a className="text-base tracking-wider
                z-50 transition-colors hover:text-[#8A2BE2]" 
                href="#">
                    Dimensions
                </a>
                <a className="text-base tracking-wider
                z-50 transition-colors hover:text-[#8A2BE2]" 
                href="#">
                    Beyond
                </a>
                </nav>
            </div>

        </header>

    )
}

export default Header