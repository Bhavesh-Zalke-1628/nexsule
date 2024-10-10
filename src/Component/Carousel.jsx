import { useState } from 'react';
import img1 from '../assets/bgimg1.webp';
import img2 from '../assets/bgimg2.webp';
import img3 from '../assets/bgimg3.webp';

const Carousel = () => {
    const images = [img1, img2, img3];
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <div className="relative w-full max-w-[100vw] mx-auto overflow-hidden">
            {/* Image Slider Container */}
            <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {images.map((image, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                        <img src={image} alt={`Slide ${index}`} className="w-full h-[70vh] object-cover" />
                    </div>
                ))}
            </div>

            {/* Overlay Div with Background and Opacity */}
            <div className="absolute top-0 left-0 right-0 bottom-20 bg-[#16a34a] w-[50vw] h-full opacity-80 rounded-r-xl"></div>

            {/* Dots - Positioned Absolutely */}
            <div className="absolute bottom-4 left-20 right-0 flex space-x-2 z-10">
                {images.map((_, index) => (
                    <div
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`cursor-pointer w-3 h-3 rounded-full transition-all duration-300 ${currentIndex === index ? 'bg-gray-800 scale-110' : 'bg-gray-300'
                            }`}
                    />
                ))}
            </div>


        </div>
    );
};

export default Carousel;

