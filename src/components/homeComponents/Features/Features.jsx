import { FaHtml5,FaCss3Alt,FaJs,FaReact } from "react-icons/fa";
const Features = () => {
    return (
        <div className="my-12">
            <div className="text-center pb-5">
                <h2 className="text-5xl font-bold">Our Features</h2>
                <p className="font-semibold text-center py-5">Our Career Puzzle website is designed to help you excel in HTML, CSS, JavaScript, and React interviews. With our comprehensive quiz modules, extensive question bank, and realistic interview simulations, you can gain valuable experience and sharpen your skills. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pb-5">
                <div className="text-center border-2 p-4 shadow-xl space-y-2">
                    <FaHtml5 className="text-5xl mx-auto"></FaHtml5>
                    <h3 className="text-3xl font-bold">HTML</h3>
                    <p className="text-xl font-semibold"><span className="text-teal-700 text-xl">Total Question: </span>130</p>
                    <div>
                        <a href="#_" class="relative inline-block text-lg group">
                            <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                                <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                                <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                                <span class="relative">Quiz</span>
                            </span>
                            <span class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
                        </a>
                    </div>
                </div>
                <div className="text-center border-2 p-4 shadow-xl space-y-2">
                    <FaCss3Alt className="text-5xl mx-auto"></FaCss3Alt>
                    <h3 className="text-3xl font-bold">CSS</h3>
                    <p className="text-xl font-semibold"><span className="text-teal-700 text-xl">Total Question: </span>150</p>
                    <div>
                        <a href="#_" class="relative inline-block text-lg group">
                            <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                                <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                                <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                                <span class="relative">Quiz</span>
                            </span>
                            <span class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
                        </a>
                    </div>
                </div>
                <div className="text-center border-2 p-4 shadow-xl space-y-2">
                    <FaJs className="text-5xl mx-auto"></FaJs>
                    <h3 className="text-3xl font-bold">Java Script</h3>
                    <p className="text-xl font-semibold"><span className="text-teal-700 text-xl">Total Question: </span>110</p>
                    <div>
                        <a href="#_" class="relative inline-block text-lg group">
                            <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                                <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                                <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                                <span class="relative">Quiz</span>
                            </span>
                            <span class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
                        </a>
                    </div>
                </div>
                <div className="text-center border-2 p-4 shadow-xl space-y-2">
                    <FaReact className="text-5xl mx-auto"></FaReact>
                    <h3 className="text-3xl font-bold">React</h3>
                    <p className="text-xl font-semibold"><span className="text-teal-700 text-xl">Total Question: </span>90</p>
                    <div>
                        <a href="#_" class="relative inline-block text-lg group">
                            <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                                <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                                <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                                <span class="relative">Quiz</span>
                            </span>
                            <span class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;