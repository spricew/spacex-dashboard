'use client';

import { useState } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

interface CarouselProps {
    images: string[];
}

export default function Carousel({ images }: CarouselProps) {
    const btnStyles = `p-2 rounded-full opacity-50
    transition-all duration-300 hover:bg-white hover:scale-110 group-hover:opacity-100
    backdrop-blur-xl shadow-lg bg-white/50 text-primary-800 z-10`;

    const [current, setCurrent] = useState(0);

    const nextImage = () => {
        setCurrent((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setCurrent((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <div className="relative w-1/2 aspect-video rounded-2xl overflow-hidden group">

            {/* Slider wrapper */}
            <div
                className="h-full w-full flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${current * 100}%)` }}
            >
                {images.map((img, index) => (
                    <div key={index} className="min-w-full h-full relative">
                        <img
                            src={img}
                            alt={`Imagen ${index + 1}`}
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}
            </div>

            {/* buttons */}
            {images.length > 1 && (
                <div className="absolute inset-0 flex justify-between items-center w-full h-full p-4">
                    <button
                        onClick={prevImage}
                        className={`${btnStyles}`}
                        aria-label="Imagen anterior"
                    >
                        <ChevronLeft size={24} strokeWidth={2.5} />
                    </button>

                    <button
                        onClick={nextImage}
                        className={`${btnStyles}`}
                        aria-label="Siguiente imagen"
                    >
                        <ChevronRight size={24} strokeWidth={2.5} />
                    </button>
                </div>
            )}

            {/* Index Dots */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                {images.map((_, index) => (
                    <div
                        key={index}
                        className={`
                            transition size-2 rounded-full
                            ${current === index ? "bg-white scale-120" : "bg-white/50"}
                        `}
                    />
                ))}
            </div>
        </div>
    );
}