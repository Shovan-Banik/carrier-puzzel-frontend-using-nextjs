"use client"
import slide1 from '../../../../public/slide1.jpg';
import slide2 from '../../../../public/slide2.jpg';
import slide3 from '../../../../public/slide3.jpg';

import Image from 'next/image';

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
const Slider = () => {
    return (
        <>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide className='relative'>
                    <Image src={slide2} className='w-full h-[600px]' alt="slide2"></Image>
                    <div className='absolute top-0 left-0 w-full h-full flex justify-center items-center'>
                        <div className='bg-black opacity-40'></div>
                        <h2 className='md:text-6xl text-3xl font-bold text-yellow-500 relative z-10'>
                            <span className='bg-black text-white px-2 py-1'>Worried About Your Carrier?</span>
                        </h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='relative'>
                    <Image src={slide1} className='w-full h-[600px]' alt="slide1"></Image>
                    <div className='absolute top-0 left-0 w-full h-full flex justify-start ps-12 items-center'>
                        <div className='bg-black opacity-40'></div>
                        <h2 className='md:text-6xl text-3xl font-bold relative z-10'>
                            <span className=' px-2 space-y-2'>Did Not Get Your</span><br />
                            <span className='px-2 mt-5'> Desired Job?</span>
                        </h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='relative'>
                    <Image src={slide3} className='w-full h-[600px]' alt="slide1"></Image>
                    <div className='absolute top-0 left-0 w-full h-full flex justify-center ps-12 items-center'>
                        <div className='bg-black opacity-40'></div>
                        <h2 className='md:text-6xl text-3xl font-bold relative z-10 bg-black'>
                            <span className=' px-2 space-y-2 text-white'>Get Ready For Jobs With</span><br />
                            <span className='px-2 mt-5 text-white'> Proper Preparation!</span>
                        </h2>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default Slider;