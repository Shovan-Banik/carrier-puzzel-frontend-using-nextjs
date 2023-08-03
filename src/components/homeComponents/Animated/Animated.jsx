'use client'
import Lottie from "lottie-react";
import animation from '../../../../public/animation/91964-question.json';
const Animated = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 justify-around items-center mt-12">
            <div className="space-y-2 text-center">
                <h2 className="text-5xl font-bold">Why This Website?</h2>
                <p className="font-semibold text-justify py-5">Our Career Puzzle website is designed to assist individuals in enhancing their readiness for various job opportunities. We understand the importance of being well-prepared and confident when it comes to securing your dream job. Our platform offers a comprehensive collection of quiz modules covering a wide range of topics such as aptitude, technical skills, general knowledge, and interview preparation.</p>
                <div className="text-center">
                    <a href="#_" className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-black transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
                        <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-black group-hover:h-full"></span>
                        <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                            <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        </span>
                        <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                            <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        </span>
                        <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">More..</span>
                    </a>
                </div>
            </div>
            <div >
                <Lottie animationData={animation} loop={true} />
            </div>
        </div>
    );
};

export default Animated;