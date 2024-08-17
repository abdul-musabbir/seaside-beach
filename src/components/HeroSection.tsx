export default function HeroSection() {
    return (
        <div className="h-screen">
            <div className="bg-[url('/hotel-image.jpg')] bg-no-repeat bg-center bg-cover bg-black flex mx-auto bg-opacity-40 h-full items-center justify-center z-10">
                <div className={'text-center px-5 relative inset-0 bg-black bg-opacity-40 w-full h-full flex items-center justify-center'}>
                    <div className={'flex flex-col gap-5  mx-auto sm:w-[635px] md:w-[750px] lg:[w-1010px] xl:w-[1200px]'}>
                        <h2 className="text-5xl text-white font-bold lg:text-6xl xl:text-7xl">WEEKLY BEACH RENTALS AT THE JERSEY SHORE</h2>
                        <div className={'flex flex-col gap-1'}>
                            <p className="text-white text-[20px] font-semibold sm:text-lg sm:font-semibold xl:text-xl">Located three houses from the beach. 2, 3, 4, and 6
                                bedroom houses
                                available</p>
                            <p className="text-white text-[20px] font-semibold sm:text-lg sm:font-semibold xl:text-xl">Please call or text 201-206-4436</p>
                            <p className="text-white text-[20px] font-semibold sm:text-lg sm:font-semibold xl:text-xl">Or email at seasidebeachvacations@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
