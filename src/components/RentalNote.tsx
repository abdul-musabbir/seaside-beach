import TickIcon from "../icons/TickIcon.tsx";
import { useEffect, useRef } from "react";
import {House, MapPin} from "lucide-react";

export default function RentalNote() {
    return (
        <div className={'h-full'}>
            <div className="h-full">
                <div className={'flex flex-col gap-6 justify-between h-full'}>
                    <h2 className="text-3xl font-semibold">
                        Rental Note And Booking Guideline
                    </h2>
                    <div className="space-y-4 lg:space-y-5">
                        <div>
                            <ul className="space-y-2">
                                <li className="flex gap-2 text-[18px] font-medium lg:text-[16px]"><TickIcon
                                    className="size-5 select-none"/> Key code entry.
                                </li>
                                <li className="flex gap-2 text-[18px] font-medium lg:text-[16px]"><TickIcon
                                    className="size-5 select-none"/> All rentals are pet-friendly
                                </li>
                                <li className="flex gap-2 text-[18px] font-medium lg:text-[16px]"><TickIcon
                                    className="size-5 select-none"/> Beach badges not included with rentals.
                                </li>
                                <li className="flex gap-2 text-[18px] font-medium lg:text-[16px]"><TickIcon
                                    className="size-5 select-none"/> $500 property damage security deposit for every
                                    rental.
                                </li>
                                <li className="flex gap-2 text-[18px] font-medium lg:text-[16px]"><TickIcon
                                    className="size-5 select-none"/> All rentals have a cleaning fee and a utility fee
                                </li>
                            </ul>
                        </div>

                        <div>
                            <p className="text-[16px]">
                                Payment can be made by Venmo, Zelle, or by check. Deposit is due at the time of booking
                                to secure your rental date. The rest of the rental payment will be put into a pay plan
                                for your convenience. The entire rental must be paid off a month prior to the date of
                                rental.
                            </p>
                        </div>


                    </div>
                    <div className="space-x-3">
                        <button className="px-5 py-3 bg-blue-500 hover:bg-opacity-65 transition-all duration-300 text-white rounded-xl">Payment plan sample</button>
                        <button className="px-5 py-3 bg-black hover:bg-opacity-65  transition-all duration-300 text-white rounded-xl">Lease sample</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
