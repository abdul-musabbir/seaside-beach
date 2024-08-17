export default function SelectAllArrayData(){
    const data:{
        price: number;
        land: string;
        location: string;
        bed: number;
        bath: number;
        person: number;
        url: string;
    }[] = [
        {
            price: 6000,
            land: 'Beach Escape',
            location: '29 Farragut Ave Seaside Park, NJ',
            bed: 6,
            bath: 3,
            person: 16,
            url: '/hotel-1.jpg'
        },
        {
            price: 3000,
            land: 'Ocean Oasis',
            location: '23 Farragut Ave Seaside Park, NJ',
            bed: 4,
            bath: 1,
            person: 10,
            url: '/hotel-1.jpg'
        },
        {
            price: 3000,
            land: 'Unit 1 -First Floor',
            location: '30 Farragut Ave Seaside Park, NJ',
            bed: 3,
            bath: 1,
            person: 8,
            url: '/hotel-1.jpg'
        },
        {
            price: 3000,
            land: 'Unit 2 -Second Floor',
            location: '30 Farragut Ave Seaside Park, NJ',
            bed: 3,
            bath: 1,
            person: 8,
            url: '/hotel-1.jpg'
        },
        {
            price: 2000,
            land: 'Unit 3 - Cottage',
            location: '30 Farragut Ave Seaside Park, NJ',
            bed: 2,
            bath: 1,
            person: 4,
            url: '/hotel-1.jpg'
        }
    ];

    return data;
}