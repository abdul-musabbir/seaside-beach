import Slider from "../Swiper/Slider";
import {MoveUpRight} from "lucide-react";
import { useRef, useState} from "react";
import {Link} from "react-router-dom";

export default function Rental() {
    const [activeSlideIndex, setActiveSlideIndex] = useState<number>(0);
    const swiperRef:any = useRef(null);

    const handleDivClick = (index:number) => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideTo(index);
            setActiveSlideIndex(index);
        }
    };

    return (
        <div className="my-24 md:h-[700px]">
            <div
                className="flex mx-auto w-11/12 sm:w-[620px] md:w-[750px] lg:w-[1000px] xl:w-[1100px] 2xl:w-[1400px] flex-col gap-5">

                <div className="w-full mt-10 md:mt-0 md:h-full grid grid-cols-1 md:grid-cols-2 gap-5 relative md:border md:gap-10 md:p-4 md:rounded-3xl">
                    <div className="flex p-5 rounded-tl-3xl rounded-bl-3xl flex-col pr-16 order-2 md:order-1">
                        <div className={'md:mt-16'}>
                            <div className={'flex flex-col gap-4'}>
                                <div className={'flex gap-4'}>
                                        <div className={'space-y-2.5'}>
                                            <h2 className={`text-xl font-bold md:text-2xl transition-all duration-300 ease-in`}>
                                                {datas[activeSlideIndex]?.title}
                                            </h2>
                                            <p className={'md:text-xl transition-all duration-300 ease-in'}>{datas[activeSlideIndex]?.location}</p>
                                            <p className={'flex transition-all duration-300 ease-in'}><span
                                                className={'text-green-500 md:text-xl font-bold mr-2'}>${datas[activeSlideIndex]?.price}</span><span><sub
                                                className={'text-gray-500'}>per week</sub></span>
                                            </p>
                                            <p className={'line-clamp-5 md:text-[17px] md:text-gray-500 transition-all duration-300 ease-in'}>
                                                {datas[activeSlideIndex]?.des}
                                            </p>
                                        </div>
                                </div>
                                <div className={'flex md:mb-10 lg:mb-0'}>
                                    <Link to={datas[activeSlideIndex]?.to.toLowerCase().trim().replace('-', ' ').replace(/\s+/g, '-')} className={'flex gap-2 items-center bg-blue-500 text-white px-10 py-2 rounded-full'}>See Availability <MoveUpRight className={'size-4'} strokeWidth={4}/></Link>
                                </div>
                            </div>
                            <div className={'flex gap-5 md:absolute bottom-5 mt-8 md:mt-0'}>
                                {[1, 2, 3, 4, 5].map((item, index) => (
                                    <div key={index} onClick={() => handleDivClick(index)}
                                         className={`size-10 text-white bg-blue-300 flex items-center justify-center rounded-full cursor-pointer transition-all duration-300 ease-in hover:bg-blue-500 select-none` + `${index === activeSlideIndex && 'bg-blue-500'}`}>
                                        <span>0{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="flex w-full bg-blue-400 h-[300px] md:h-[700px] order-1 md:order-2">
                        <Slider onSlideChange={setActiveSlideIndex} swiperRef={swiperRef}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

const datas: {title: string,to: string,price: string,location: string,des: string }[] = [
    {
        title: 'Beach Escape',
        to: 'Beach Escape',
        price: '3,000.00',
        location: '29 Farragut Ave, Seaside Park NJ 08752',
        des: '6 bedroom home | sleeps 16 | three bathrooms | two fully stocked kitchens | two living rooms | two fridges | two stoves | two dish washers | smart flat screen TVs | air conditioning | two washers and two dryers | outdoor shower | beach chairs available | driveway parking for 8 cars | four houses from beach | pet friendly | completely fenced in yard | propane fire pit | BBQ grill | outdoor patio furniture | can be rented as 6 bedrooms sleeping 16, 4 bedrooms sleeping 12 or 2 bedrooms sleeping 6 | beach badges not included | linens included'
    },
    {
        title: 'Ocean Oasis',
        to: 'Ocean Oasis',
        price: '3,000.00',
        location: '23 Farragut Ave, Seaside Park NJ 08752',
        des: 'Four-bedroom | Sleeps 10 | Three houses from beach | 8-person Jacuzzi | Large fully fenced backyard | Flat screen TVs in every room | High-speed Wi-Fi | Propane BBQ and fire pit | Outdoor shower | Washer and dryer | Off-street parking for 3-4 small to medium cars | Free 24-hour street parking for larger vehicles | beach badges not included | linens not included'
    },
    {
        title: 'Unit 1 -First Floor',
        to: 'Unit 1 -First Floor',
        price: '2,000.00',
        location: '30 Farragut Ave, Seaside Park NJ 08752',
        des: '3 bedroom unit | Sleeps 8 | One bathroom with shower tub | Front porch | Front patio with propane fire pit | Backyard picnic table with propane BBQ grill | Fully stocked kitchen | Smart flat screen TV | Central air/heating | Washer and dryer | Outdoor rinse/showers | Beach chairs available | Off street parking for one car | FREE 24/7 street parking | beach badges not included | linens not included',
    },
    {
        title: 'Unit 2 -Second Floor',
        to: 'Unit 2 -Second Floor',
        price: '6,000.00',
        location: '30 Farragut Ave, Seaside Park NJ 08752',
        des: '3 bedroom unit | Sleeps 8 | One bathroom with shower tub | Front deck overlooking street and boardwalk | Back deck with outdoor dining set | Fully stocked kitchen | Smart flat screen TV | Central air/heating | Washer and dryer | Outdoor rinse/showers | Beach chairs available | Off street parking for one car | FREE 24/7 street parking | beach badges not included | linens not included',
    },
    {
        title: 'Unit 3 - Cottage',
        to: 'Unit 3 - Cottage',
        price: '3,000.00',
        location: '30 Farragut Ave, Seaside Park NJ 08752',
        des: 'Two bedroom cottage | Sleeps 4 | One bathroom | Fully stocked kitchen | Smart flat screen TV | Air conditioning | Outdoor rinse/showers | Beach chairs available | Off street parking NOT available | FREE 24/7 street parking in front of the house and the entire block | beach badges not included | linens not included',
    },
];
