import { ForwardRefExoticComponent, RefAttributes } from 'react';
import { Car, Flame, Gamepad2, ShowerHead, SunSnow, TvIcon, Utensils, WashingMachine, Wifi, LucideProps } from "lucide-react";
import cn from "../lib/utils.ts";

export default function Features({className}:{className:string}) {
    return (
        <div className={cn('pb-[100px]', className)}>
            <div className={'flex mx-auto w-11/12 sm:w-[620px] md:w-[750px] lg:w-[1000px] xl:w-[1100px] 2xl:w-[1200px] flex-col gap-5'}>
                <h2 className={'text-center font-bold text-2xl md:text-[38px] md:leading-10 mb-10 sm:mb-20 mx-auto md:w-[600px]'}>Features and Amenities</h2>
                <div className={'flex flex-wrap justify-center items-start gap-5 w-full gap-y-8'}>
                    {
                        data.map((item, index) => (
                            <div key={index} className={'flex flex-col gap-2 text-center items-center'}>
                                <div className={'rounded-full w-20 h-20 flex items-center justify-center bg-blue-500 text-white md:size-24'}>
                                    {/* Render the icon component */}
                                    <item.icon className={'size-10'}/>
                                </div>
                                <p className={'w-[200px]'}>{item.title}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

// Define the data array with correct icon types and titles
const data: { icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>, title: string }[] = [
    {
        icon: ShowerHead,
        title: 'Outdoor shower for when you come off beach'
    },
    {
        icon: Car,
        title: 'Off street parking'
    },
    {
        icon: TvIcon,
        title: 'Smart TV'
    },
    {
        icon: Utensils,
        title: 'Full size kitchen fully equipped'
    },
    {
        icon: Gamepad2,
        title: 'Large backyard for playtime'
    },
    {
        icon: Flame,
        title: 'Fire pit for nighttime enjoyment'
    },
    {
        icon: Wifi,
        title: 'High-speed internet connection'
    },
    {
        icon: SunSnow,
        title: 'Brand new central air conditioning'
    },
    {
        icon: WashingMachine,
        title: 'Washer and dryer available'
    },
];
