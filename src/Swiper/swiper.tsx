import {Bath, Bed, LucidePersonStanding} from "lucide-react";
import {NavLink} from "react-router-dom";
import SelectAllArrayData from "../data/selectAllArrayData.ts";

// Swiper Slider Component
export default function SwiperSliders() {
    // Example data
    const data = SelectAllArrayData();

    return (
        <div className={'sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 lg:gap-y-8 lg:gap-x-6 gap-10 flex flex-col'}>
                {data.map((item, index) => (
                        <NavLink to={'/'+item?.land.toString()
                            .trim()
                            .replace(/-/g, ' ')
                            .replace(/ {2,}/g, ' ')
                            .replace(/\s+/g, '-')
                            .toLowerCase()} key={index} className="bg-white rounded-xl shadow-md w-full">
                            <div>
                                <img
                                    src={item.url ?? "/hotel-image.jpg"}
                                    alt="hotel"
                                    className="rounded-t-xl h-60 object-center object-cover w-full"
                                />
                            </div>
                            <div className="p-6 border-b border-l border-r rounded-b-xl flex flex-col gap-4">
                                <div>
                                    <h3 className={'flex gap-1 items-end'}>
                                        <span className="text-green-600 font-bold text-2xl xl:text-[25px]">
                                            ${item?.price}
                                        </span>{" "}
                                        <span className="text-[1rem] text-gray-600">
                                            <sub>Per Week</sub>
                                        </span>
                                    </h3>
                                </div>
                                <div className={'space-y-1'}>
                                    <p className={'xl:text-[20px] text-[18px]'}>{item?.land}</p>
                                    <p className="text-gray-600 sm:text-sm xl:text-[16px]">
                                        {item?.location}
                                    </p>
                                </div>
                                <div className="flex items-center space-x-6 sm:space-x-2">
                                    <div className="flex items-center gap-2">
                                        <Bed className="text-blue-400"/>
                                        <p className="text-sm xl:text-[16px]">{item?.bed} bd.</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Bath className="text-blue-400"/>
                                        <p className="text-sm xl:text-[16px]">{item?.bath} ba.</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <LucidePersonStanding className="text-blue-400"/>
                                        <p className="text-sm xl:text-[16px]">{item?.person} Sleeps.</p>
                                    </div>
                                </div>
                                <div className={'w-full'}>
                                    <button className={'w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-400 transition-all duration-300'}>See Availability</button>
                                </div>
                            </div>
                        </NavLink>
                ))}
        </div>
    );
}
