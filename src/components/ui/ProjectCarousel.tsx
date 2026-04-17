import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFade } from "swiper/modules";
import { IconArrowRight } from "@tabler/icons-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

interface ProjectCarouselProps {
    images: { src: string }[];
    title: string;
}

export default function ProjectCarousel({
    images,
    title,
}: ProjectCarouselProps) {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="relative group/carousel w-full h-full">
            <Swiper
                modules={[Navigation, Pagination, EffectFade]}
                effect="fade"
                fadeEffect={{ crossFade: true }}
                loop={images.length > 1}
                navigation={{
                    nextEl: ".swiper-button-next-custom",
                    prevEl: ".swiper-button-prev-custom",
                }}
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                className="w-full h-full rounded-4xl overflow-hidden project-swiper"
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative w-full h-full aspect-video md:aspect-auto">
                            <img
                                src={image.src}
                                alt={`${title} preview ${index + 1}`}
                                loading="lazy"
                                decoding="async"
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover/carousel:scale-105 grayscale-[0.3] group-hover/carousel:grayscale-0"
                            />
                        </div>
                    </SwiperSlide>
                ))}

                {/* Custom Numeric Pagination */}
                {images.length > 1 && (
                    <div className="absolute bottom-8 right-8 z-20 bg-brand-bg/80 backdrop-blur-md px-6 py-2 rounded-full border border-brand-text/10 text-[11px] font-bold tracking-[0.3em] text-brand-text/60">
                        <span className="text-brand-text">
                            {(activeIndex + 1).toString().padStart(2, "0")}
                        </span>
                        <span className="mx-2 opacity-30">/</span>
                        <span>{images.length.toString().padStart(2, "0")}</span>
                    </div>
                )}
            </Swiper>

            {/* Custom Navigation Arrows */}
            {images.length > 1 && (
                <>
                    <button className="swiper-button-prev-custom absolute left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-brand-bg/40 backdrop-blur-sm border border-brand-text/10 flex items-center justify-center text-brand-text opacity-0 group-hover/carousel:opacity-100 transition-all hover:bg-brand-bg hover:scale-110 cursor-pointer">
                        <span className="rotate-180"><IconArrowRight size={20} stroke={1.5} /></span>
                    </button>
                    <button className="swiper-button-next-custom absolute right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-brand-bg/40 backdrop-blur-sm border border-brand-text/10 flex items-center justify-center text-brand-text opacity-0 group-hover/carousel:opacity-100 transition-all hover:bg-brand-bg hover:scale-110 cursor-pointer">
                        <span><IconArrowRight size={20} stroke={1.5} /></span>
                    </button>
                </>
            )}

            <style aria-hidden="true">{`
                .project-swiper {
                    --swiper-navigation-color: #34342C;
                    --swiper-pagination-color: #34342C;
                }
                .swiper-button-prev-custom, .swiper-button-next-custom {
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                }
            `}</style>
        </div>
    );
}
