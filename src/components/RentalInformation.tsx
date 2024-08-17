export default function RentalInformation() {
    return(
        <div className={'mb-[100px] md:relative'}>
            <div className={'flex mx-auto w-11/12 sm:w-[620px] md:w-[750px] lg:w-[1000px] xl:w-[1100px] 2xl:w-[1200px] flex-col gap-5'}>
                <div className={'flex flex-col gap-2'}>
                    <h2 className={'font-bold text-2xl md:text-[38px] md:leading-10'}>Rental Information</h2>
                    <p className={'md:w-[500px] md:font-semibold md:text-[15px] md:text-gray-400'}>Two to three day rentals available before june 29th. June 29th to Labor Day weekend are weekly rentals that run Saturday. Prom groups welcomed. Contact us for prom pricing and availability</p>
                </div>
                <div className={''}>
                    <div className={''}>
                        <div className={'flex flex-col gap-5 md:grid md:grid-cols-2 md:z-30 md:mt-20'}>
                            {
                                data.map((item, index) => (
                                    <div key={index}
                                         className={'bg-white shadow-xl rounded-xl p-5 flex flex-col gap-5 border'+`${index === 0&& 'col-span-full py-10 px-8'}`}>
                                        <h3 className={'text-xl font-bold md:text-2xl'}>{item?.title}</h3>
                                        <p className={'text-gray-500 md:text-[15px]'}>{item?.des}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className={'mt-20 md:absolute md:right-0 md:-top-20 md:-z-20 bg-red-400 flex'}>
                        <img src={'/feature-1.jpg'} alt={'image'}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

const data: { title: string, des: string }[] = [
    {
        title: 'Beach Escape',
        des: '6 bedroom home | sleeps 16 | three bathrooms | two fully stocked kitchens | two living rooms | two fridges | two stoves | two dish washers | smart flat screen TVs | air conditioning | two washers and two dryers | outdoor shower | beach chairs available | driveway parking for 8 cars | four houses from beach | pet friendly | completely fenced in yard | propane fire pit | BBQ grill | outdoor patio furniture | can be rented as 6 bedrooms sleeping 16, 4 bedrooms sleeping 12 or 2 bedrooms sleeping 6 | beach badges not included | linens included'
    },
    {
        title: 'Ocean Oasis',
        des: 'Four-bedroom | Sleeps 10 | Three houses from beach | 8-person Jacuzzi | Large fully fenced backyard | Flat screen TVs in every room | High-speed Wi-Fi | Propane BBQ and fire pit | Outdoor shower | Washer and dryer | Off-street parking for 3-4 small to medium cars | Free 24-hour street parking for larger vehicles | beach badges not included | linens not included'
    },
    {
        title: 'Unit 1 -First Floor',
        des: '3 bedroom unit | Sleeps 8 | One bathroom with shower tub | Front porch | Front patio with propane fire pit | Backyard picnic table with propane BBQ grill | Fully stocked kitchen | Smart flat screen TV | Central air/heating | Washer and dryer | Outdoor rinse/showers | Beach chairs available | Off street parking for one car | FREE 24/7 street parking | beach badges not included | linens not included'
    },
    {
        title: 'Unit 2 -Second Floor',
        des: '3 bedroom unit | Sleeps 8 | One bathroom with shower tub | Front deck overlooking street and boardwalk | Back deck with outdoor dining set | Fully stocked kitchen | Smart flat screen TV | Central air/heating | Washer and dryer | Outdoor rinse/showers | Beach chairs available | Off street parking for one car | FREE 24/7 street parking | beach badges not included | linens not included'
    },
    {
        title: 'Unit 3 - Cottage',
        des: 'Two bedroom cottage | Sleeps 4 | One bathroom | Fully stocked kitchen | Smart flat screen TV | Air conditioning | Outdoor rinse/showers | Beach chairs available | Off street parking NOT available | FREE 24/7 street parking in front of the house and the entire block | beach badges not included | linens not included'
    },
];
