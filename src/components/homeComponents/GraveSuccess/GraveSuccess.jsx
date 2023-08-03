import Image from 'next/image';
import grave from '../../../../public/grave/grave1.jpg';

const GraveSuccess = () => {
    return (
        <div className='flex items-center gap-5 my-12'>
            <div>
                <Image src={grave} alt='grave'></Image>
            </div>
            <div>
                <h2 className='text-4xl font-bold pb-4'>Achieve your success</h2>
                <p className='text-justify font-semibold mb-5'>We understand the challenges individuals face when navigating the competitive job market, and we are committed to equipping you with the tools and resources you need to stand out from the crowd. Our job preparation website is your gateway to unlocking boundless opportunities and achieving your true potential. Invest in your future with us and embark on a transformative journey towards success today.</p>
                <a href="#_" class="relative inline-block text-lg group">
                    <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                        <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                        <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                        <span class="relative">Get Started</span>
                    </span>
                    <span class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
                </a>
            </div>
        </div>
    );
};

export default GraveSuccess;