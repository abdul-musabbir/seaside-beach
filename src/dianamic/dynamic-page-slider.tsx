import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

interface DynamicImageSliderProps {
    images: string[] | undefined;
}

export default function DynamicImageSlider({ images }: DynamicImageSliderProps) {
    return (
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper w-full h-full"
        >
            {images?.map((image, index) => (
                <SwiperSlide key={index} className="w-full h-full">
                    <img src={image} alt={`Slide ${index}`} className="rounded-xl object-cover object-center" />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
