import {NavLink} from "react-router-dom";
import {Mail, MapPin} from "lucide-react";

export default function Footer(){
    return(
        <footer className={'bg-blue-500 py-10'}>
            <div
                className={'flex flex-col sm:grid sm:grid-cols-2 lg:grid lg:grid-cols-3 gap-10 mx-auto w-11/12 sm:w-[620px] lg:w-[1000px] xl:w-[1000px] 2xl:w-[1000px]'}>
                <div>
                    <h2 className={'text-[35px] font-bold mb-2 text-white'}>Travellow</h2>
                    <p className={'text-white'}>Payment can be made by Venmo, Zelle, or by check. Deposit is due at the
                        time of booking to secure your rental date. The rest of the rental payment will be put into a
                        pay plan for your convenience. The entire rental must be paid off a month prior to the date of
                        rental.
                    </p>
                </div>

                <div className={'flex flex-col gap-2 font-semibold text-white items-start'}>
                    <h2 className={'text-[25px] font-bold text-white mt-4 mb-2'}>Home</h2>
                    <NavLink to={'/'}>Beach Escape</NavLink>
                    <NavLink to={'/'}>Ocean Oasis</NavLink>
                    <NavLink to={'/'}>Unit 1</NavLink>
                    <NavLink to={'/'}>Unit 2</NavLink>
                    <NavLink to={'/'}>Unit 3</NavLink>
                </div>


                <div className={'space-y-3 mt-4'}>
                    <h3 className={'text-[25px] font-bold text-white'}>Contact Us</h3>
                    <p className={'flex gap-2 text-white'}><Mail/> <NavLink
                        to={'mailto:seasidebeachvacations@gmail.com'}>seasidebeachvacations@gmail.com</NavLink></p>
                    <div className={'text-white space-y-3'}>
                        <p className={'flex gap-2'}><MapPin/> 29 Farragut Ave, Seaside Park NJ 08752</p>
                        <p className={'flex gap-2'}><MapPin/> 23 Farragut Ave, Seaside Park NJ 08752</p>
                        <p className={'flex gap-2'}><MapPin/> 30 Farragut Ave, Seaside Park NJ 08752</p>
                    </div>
                </div>


            </div>
            <div className={'mt-10'}>
                <p className={'text-white text-center'}>&copy; 2024 Beach House Rentals. Proudly
                    Developedby <NavLink
                        to={'https://www.graphicsurface.com'} target={'_blank'} className={'underline'}>Graphic
                        Surface</NavLink></p>

            </div>
        </footer>
    )
}