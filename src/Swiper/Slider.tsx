import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import {Autoplay, Mousewheel, Pagination} from 'swiper/modules';

export default function Slider({onSlideChange,swiperRef}: {onSlideChange:any,swiperRef:any}) {
    return (
        <Swiper
            direction={'vertical'}
            pagination={{
                clickable: true,
            }}
            mousewheel={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            modules={[Pagination, Autoplay, Mousewheel]}
            onSlideChange={(swiper) => onSlideChange(swiper.activeIndex)}
            className="h-full" ref={swiperRef}
        >
            {['/hotel-1.jpg', '/hotel-1.jpg', '/hotel-1.jpg', '/hotel-1.jpg', '/hotel-1.jpg'].map((src, index) => (
                <SwiperSlide key={index} className={''}>
                    <img src={src} alt={`image-${index + 1}`} className={'md:rounded-tr-3xl rounded-xl  md:rounded-br-3xl'} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
