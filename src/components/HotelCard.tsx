import SwiperSliders from "../Swiper/swiper.tsx";

export default function HotelCard() {
    return (
        <div className="my-[100px]" id={'hotel-card'}>
            <div className="flex mx-auto w-11/12 sm:w-[620px] lg:w-[1000px] xl:w-[1100px] 2xl:w-[1200px]">
                <div className="w-full">
                    <h2 className="text-center font-bold text-2xl md:text-[38px] md:leading-10 mb-10 sm:mb-20 mx-auto flex md:w-[600px]">
                        See Units You’ll Love to Book for Vacations
                    </h2>
                    <div className="mt-5">
                        <SwiperSliders />
                    </div>
                </div>
            </div>
        </div>
    );
}
