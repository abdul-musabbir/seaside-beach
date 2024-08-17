import HotelImage from '../../public/hotel-1.jpg';

export default function SignleData(slug: string | undefined): Promise<unknown> {
    return new Promise((resolve, reject) => {
        switch (slug) {
            case 'beach-escape':
                resolve({
                    beachName: 'Beach Escape',
                    location: '29 Farragut Ave, Seaside Park NJ 08752',
                    des: '6 bedroom home | sleeps 16 | three bathrooms | two fully stocked kitchens | two living rooms | two fridges | two stoves | two dish washers | smart flat screen TVs | air conditioning | two washers and two dryers | outdoor shower | beach chairs available | driveway parking for 8 cars | four houses from beach | pet friendly | completely fenced in yard | propane fire pit | BBQ grill | outdoor patio furniture | can be rented as 6 bedrooms sleeping 16, 4 bedrooms sleeping 12 or 2 bedrooms sleeping 6 | beach badges not included | linens included',
                    price: '6000',
                    cleaningFee: '250',
                    utilityFee: '200',
                    beforeJune: 'Before June 27:',
                    beforeJuneDes: '3 days rentals are available',
                    afterJune: 'After June 27 to the end of summer:',
                    afterJuneDes: 'Only weekly rentals are available (from Saturday to Saturday)',
                    photoUrl: [HotelImage, HotelImage, HotelImage, HotelImage, HotelImage,HotelImage,HotelImage,HotelImage,HotelImage,HotelImage,HotelImage,HotelImage,HotelImage,HotelImage,HotelImage,HotelImage,HotelImage,HotelImage,HotelImage,HotelImage,HotelImage,HotelImage,HotelImage,HotelImage],
                    feature: {
                        "features": [
                            { "icon": "fas fa-bed", "text": "6 bedroom home" },
                            { "icon": "fas fa-users", "text": "Sleeps 16" },
                            { "icon": "fas fa-bath", "text": "Three bathrooms" },
                            { "icon": "fas fa-utensils", "text": "Two fully stocked kitchens" },
                            { "icon": "fas fa-couch", "text": "Two living rooms" },
                            { "icon": "fas fa-box", "text": "Two fridges" },
                            { "icon": "fas fa-burn", "text": "Two stoves" },
                            { "icon": "fas fa-water", "text": "Two dishwashers" },
                            { "icon": "fas fa-tv", "text": "Smart flat screen TVs" },
                            { "icon": "fas fa-wind", "text": "Air conditioning" },
                            { "icon": "fas fa-tshirt", "text": "Two washers and two dryers" },
                            { "icon": "fas fa-shower", "text": "Outdoor shower" },
                            { "icon": "fas fa-chair", "text": "Beach chairs available" },
                            { "icon": "fas fa-car", "text": "Driveway parking for 8 cars" },
                            { "icon": "fas fa-home", "text": "Four houses from beach" },
                            { "icon": "fas fa-paw", "text": "Pet friendly" },
                            { "icon": "fas fa-border-all", "text": "Completely fenced in yard" },
                            { "icon": "fas fa-fire-alt", "text": "Propane fire pit" },
                            { "icon": "fas fa-drumstick-bite", "text": "BBQ grill" },
                            { "icon": "fas fa-chair", "text": "Outdoor patio furniture" },
                            { "icon": "fas fa-times-circle", "text": "Beach badges not included" },
                            { "icon": "fas fa-bed", "text": "Linens included" },
                            { "icon": "fas fa-exchange-alt", "text": "Can be rented as 6 bedrooms sleeping 16, 4 bedrooms sleeping 12, or 2 bedrooms sleeping 6" },
                        ]
                    }
                });
                break;
            case 'ocean-oasis':
                resolve({
                    beachName: 'Ocean Oasis',
                    location: '23 Farragut Ave, Seaside Park NJ 08752',
                    des: 'Four-bedroom | Sleeps 10 | Three houses from beach | 8-person Jacuzzi | Large fully fenced backyard | Flat screen TVs in every room | High-speed Wi-Fi | Propane BBQ and fire pit | Outdoor shower | Washer and dryer | Off-street parking for 3-4 small to medium cars | Free 24-hour street parking for larger vehicles | beach badges not included | linens not included',
                    price: '3000',
                    cleaningFee: '125',
                    utilityFee: '100',
                    beforeJune: 'Before June 27:',
                    beforeJuneDes: '3 days rentals are available',
                    afterJune: 'After June 27 to the end of summer:',
                    afterJuneDes: 'Only weekly rentals are available (from Saturday to Saturday)',
                    photoUrl: [HotelImage, HotelImage, HotelImage, HotelImage, HotelImage],
                    feature: {
                        "features": [
                            { "icon": "fas fa-bed", "text": "6 bedroom home" },
                            { "icon": "fas fa-users", "text": "Sleeps 16" },
                            { "icon": "fas fa-bath", "text": "Three bathrooms" },
                            { "icon": "fas fa-utensils", "text": "Two fully stocked kitchens" },
                            { "icon": "fas fa-couch", "text": "Two living rooms" },
                            { "icon": "fas fa-box", "text": "Two fridges" },
                            { "icon": "fas fa-burn", "text": "Two stoves" },
                            { "icon": "fas fa-water", "text": "Two dishwashers" },
                            { "icon": "fas fa-tv", "text": "Smart flat screen TVs" },
                            { "icon": "fas fa-wind", "text": "Air conditioning" },
                            { "icon": "fas fa-tshirt", "text": "Two washers and two dryers" },
                            { "icon": "fas fa-shower", "text": "Outdoor shower" },
                            { "icon": "fas fa-chair", "text": "Beach chairs available" },
                            { "icon": "fas fa-car", "text": "Driveway parking for 8 cars" },
                            { "icon": "fas fa-home", "text": "Four houses from beach" },
                            { "icon": "fas fa-paw", "text": "Pet friendly" },
                            { "icon": "fas fa-border-all", "text": "Completely fenced in yard" },
                            { "icon": "fas fa-fire-alt", "text": "Propane fire pit" },
                            { "icon": "fas fa-drumstick-bite", "text": "BBQ grill" },
                            { "icon": "fas fa-chair", "text": "Outdoor patio furniture" },
                            { "icon": "fas fa-times-circle", "text": "Beach badges not included" },
                            { "icon": "fas fa-bed", "text": "Linens included" },
                            { "icon": "fas fa-exchange-alt", "text": "Can be rented as 6 bedrooms sleeping 16, 4 bedrooms sleeping 12, or 2 bedrooms sleeping 6" },
                        ]
                    }
                });
                break;
            case 'unit-1-first-floor':
                resolve({
                    beachName: 'Unit 1 -First Floor',
                    location: '30 Farragut Ave, Seaside Park NJ 08752',
                    des: '3 bedroom unit | Sleeps 8 | One bathroom with shower tub | Front porch | Front patio with propane fire pit | Backyard picnic table with propane BBQ grill | Fully stocked kitchen | Smart flat screen TV | Central air/heating | Washer and dryer | Outdoor rinse/showers | Beach chairs available | Off street parking for one car | FREE 24/7 street parking | beach badges not included | linens not included',
                    price: '3000',
                    cleaningFee: '',
                    utilityFee: '',
                    beforeJune: 'Before June 27:',
                    beforeJuneDes: '3 days rentals are available',
                    afterJune: 'After June 27 to the end of summer:',
                    afterJuneDes: 'Only weekly rentals are available (from Saturday to Saturday)',
                    photoUrl: [HotelImage, HotelImage, HotelImage, HotelImage, HotelImage],
                    feature: {
                        "features": [
                            { "icon": "fas fa-bed", "text": "6 bedroom home" },
                            { "icon": "fas fa-users", "text": "Sleeps 16" },
                            { "icon": "fas fa-bath", "text": "Three bathrooms" },
                            { "icon": "fas fa-utensils", "text": "Two fully stocked kitchens" },
                            { "icon": "fas fa-couch", "text": "Two living rooms" },
                            { "icon": "fas fa-box", "text": "Two fridges" },
                            { "icon": "fas fa-burn", "text": "Two stoves" },
                            { "icon": "fas fa-water", "text": "Two dishwashers" },
                            { "icon": "fas fa-tv", "text": "Smart flat screen TVs" },
                            { "icon": "fas fa-wind", "text": "Air conditioning" },
                            { "icon": "fas fa-tshirt", "text": "Two washers and two dryers" },
                            { "icon": "fas fa-shower", "text": "Outdoor shower" },
                            { "icon": "fas fa-chair", "text": "Beach chairs available" },
                            { "icon": "fas fa-car", "text": "Driveway parking for 8 cars" },
                            { "icon": "fas fa-home", "text": "Four houses from beach" },
                            { "icon": "fas fa-paw", "text": "Pet friendly" },
                            { "icon": "fas fa-border-all", "text": "Completely fenced in yard" },
                            { "icon": "fas fa-fire-alt", "text": "Propane fire pit" },
                            { "icon": "fas fa-drumstick-bite", "text": "BBQ grill" },
                            { "icon": "fas fa-chair", "text": "Outdoor patio furniture" },
                            { "icon": "fas fa-times-circle", "text": "Beach badges not included" },
                            { "icon": "fas fa-bed", "text": "Linens included" },
                            { "icon": "fas fa-exchange-alt", "text": "Can be rented as 6 bedrooms sleeping 16, 4 bedrooms sleeping 12, or 2 bedrooms sleeping 6" },
                        ]
                    }
                });
                break;
            case 'unit-2-second-floor':
                resolve({
                    beachName: 'Unit 2 -Second Floor',
                    location: '30 Farragut Ave, Seaside Park NJ 08752',
                    des: '3 bedroom unit | Sleeps 8 | One bathroom with shower tub | Front deck overlooking street and boardwalk | Back deck with outdoor dining set | Fully stocked kitchen | Smart flat screen TV | Central air/heating | Washer and dryer | Outdoor rinse/showers | Beach chairs available | Off street parking for one car | FREE 24/7 street parking | beach badges not included | linens not included',
                    price: '3000',
                    cleaningFee: '',
                    utilityFee: '',
                    beforeJune: 'Before June 27:',
                    beforeJuneDes: '3 days rentals are available',
                    afterJune: 'After June 27 to the end of summer:',
                    afterJuneDes: 'Only weekly rentals are available (from Saturday to Saturday)',
                    photoUrl: [HotelImage, HotelImage, HotelImage, HotelImage, HotelImage],
                    feature: {
                        "features": [
                            { "icon": "fas fa-bed", "text": "6 bedroom home" },
                            { "icon": "fas fa-users", "text": "Sleeps 16" },
                            { "icon": "fas fa-bath", "text": "Three bathrooms" },
                            { "icon": "fas fa-utensils", "text": "Two fully stocked kitchens" },
                            { "icon": "fas fa-couch", "text": "Two living rooms" },
                            { "icon": "fas fa-box", "text": "Two fridges" },
                            { "icon": "fas fa-burn", "text": "Two stoves" },
                            { "icon": "fas fa-water", "text": "Two dishwashers" },
                            { "icon": "fas fa-tv", "text": "Smart flat screen TVs" },
                            { "icon": "fas fa-wind", "text": "Air conditioning" },
                            { "icon": "fas fa-tshirt", "text": "Two washers and two dryers" },
                            { "icon": "fas fa-shower", "text": "Outdoor shower" },
                            { "icon": "fas fa-chair", "text": "Beach chairs available" },
                            { "icon": "fas fa-car", "text": "Driveway parking for 8 cars" },
                            { "icon": "fas fa-home", "text": "Four houses from beach" },
                            { "icon": "fas fa-paw", "text": "Pet friendly" },
                            { "icon": "fas fa-border-all", "text": "Completely fenced in yard" },
                            { "icon": "fas fa-fire-alt", "text": "Propane fire pit" },
                            { "icon": "fas fa-drumstick-bite", "text": "BBQ grill" },
                            { "icon": "fas fa-chair", "text": "Outdoor patio furniture" },
                            { "icon": "fas fa-times-circle", "text": "Beach badges not included" },
                            { "icon": "fas fa-bed", "text": "Linens included" },
                            { "icon": "fas fa-exchange-alt", "text": "Can be rented as 6 bedrooms sleeping 16, 4 bedrooms sleeping 12, or 2 bedrooms sleeping 6" },
                        ]
                    }
                });
                break;
            case 'unit-3-cottage':
                resolve({
                    beachName: 'Unit 3 - Cottage',
                    location: '30 Farragut Ave, Seaside Park NJ 08752',
                    des: 'Two bedroom cottage | Sleeps 4 | One bathroom | Fully stocked kitchen | Smart flat screen TV | Air conditioning | Outdoor rinse/showers | Beach chairs available | Off street parking NOT available | FREE 24/7 street parking in front of the house and the entire block | beach badges not included | linens not included',
                    price: '2000',
                    cleaningFee: '125',
                    utilityFee: '100',
                    beforeJune: 'Before June 27:',
                    beforeJuneDes: '3 days rentals are available',
                    afterJune: 'After June 27 to the end of summer:',
                    afterJuneDes: 'Only weekly rentals are available (from Saturday to Saturday)',
                    photoUrl: [HotelImage, HotelImage, HotelImage, HotelImage, HotelImage],
                    feature: {
                        "features": [
                            { "icon": "fas fa-bed", "text": "6 bedroom home" },
                            { "icon": "fas fa-users", "text": "Sleeps 16" },
                            { "icon": "fas fa-bath", "text": "Three bathrooms" },
                            { "icon": "fas fa-utensils", "text": "Two fully stocked kitchens" },
                            { "icon": "fas fa-couch", "text": "Two living rooms" },
                            { "icon": "fas fa-box", "text": "Two fridges" },
                            { "icon": "fas fa-burn", "text": "Two stoves" },
                            { "icon": "fas fa-water", "text": "Two dishwashers" },
                            { "icon": "fas fa-tv", "text": "Smart flat screen TVs" },
                            { "icon": "fas fa-wind", "text": "Air conditioning" },
                            { "icon": "fas fa-tshirt", "text": "Two washers and two dryers" },
                            { "icon": "fas fa-shower", "text": "Outdoor shower" },
                            { "icon": "fas fa-chair", "text": "Beach chairs available" },
                            { "icon": "fas fa-car", "text": "Driveway parking for 8 cars" },
                            { "icon": "fas fa-home", "text": "Four houses from beach" },
                            { "icon": "fas fa-paw", "text": "Pet friendly" },
                            { "icon": "fas fa-border-all", "text": "Completely fenced in yard" },
                            { "icon": "fas fa-fire-alt", "text": "Propane fire pit" },
                            { "icon": "fas fa-drumstick-bite", "text": "BBQ grill" },
                            { "icon": "fas fa-chair", "text": "Outdoor patio furniture" },
                            { "icon": "fas fa-times-circle", "text": "Beach badges not included" },
                            { "icon": "fas fa-bed", "text": "Linens included" },
                            { "icon": "fas fa-exchange-alt", "text": "Can be rented as 6 bedrooms sleeping 16, 4 bedrooms sleeping 12, or 2 bedrooms sleeping 6" },
                        ]
                    }
                });
                break;
            default:
                reject('No Data Found!');
        }
    });
}
