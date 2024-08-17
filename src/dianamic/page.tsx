import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { MapPin, Video } from "lucide-react";
import SignleData from "../utils/sing-data";
import DynamicImageSlider from "./dynamic-page-slider";
import ShowVideoPopUp from "./ShowVideoPopUp.tsx";
import Features from "../components/Features.tsx";
import IFrame from "./IFrame.tsx";
import ImageGellary from "./ImageGellary.tsx";
import Form from "../components/Form.tsx";
import Footer from "../components/Footer.tsx";
import Header from "../components/header.tsx";

interface Feature {
    icon: string;
    text: string;
}

interface Data {
    beachName: string;
    location: string;
    des: string;
    price: string;
    cleaningFee: string;
    utilityFee: string;
    beforeJune: string;
    beforeJuneDes: string;
    afterJune: string;
    afterJuneDes: string;
    photoUrl: string[];
    feature: { features: Feature[] };
}

export default function SinglePage() {
    const { id } = useParams<{ id: string }>();
    const [post, setPost] = useState<Data | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [showPopUp, setShowPopUp] = useState<boolean>(false);

    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            try {
                const data:any = await SignleData(id);
                setPost(data);
            } catch (error) {
                console.error("Error fetching data:", error);
                setError("Error fetching data");
            }
            setLoading(false);
        }

        fetchData();
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>There Was An Error: {error}</div>;
    }

    if (!post) {
        return <div>No data found</div>;
    }

    return (
        <div>
            <Header />
        <div className="flex mx-auto w-11/12 sm:w-[620px] md:w-[750px] lg:w-[1000px] xl:w-[1100px] 2xl:w-[1200px] flex-col mt-20">
            <div>
                <div className="grid grid-cols-1 md:grid-cols-2 p-5 mt-5 rounded-xl md:gap-8">
                    <div className="h-full w-full flex relative">
                        <div className={'w-full h-full'}>
                            <DynamicImageSlider images={post?.photoUrl} />
                        </div>

                        <div title={'click to show video'} onClick={()=> setShowPopUp((prevState) => !prevState)} className={'absolute z-50 top-2 right-2 size-10 bg-blue-500 text-white flex items-center justify-center rounded-full cursor-pointer hover:bg-blue-400 transition-all duration-200'}>
                            <Video />
                        </div>
                    </div>
                    <div className="shadow-xl p-8 rounded-xl space-y-4">
                        <div className="space-y-3">
                            <h2 className="text-3xl font-bold text-gray-700">{post?.beachName}</h2>
                            <p className="flex items-center text-slate-700">
                                <MapPin className="mr-2" />
                                <span>{post?.location}</span>
                            </p>
                            <p className="text-4xl text-green-600 font-bold">${post?.price} /Week</p>
                        </div>
                        <div className="flex gap-8">
                            {post?.cleaningFee && (
                                <p className="md:text-xl md:font-semibold text-gray-700">${post?.cleaningFee} cleaning fee</p>
                            )}
                            {post?.utilityFee && (
                                <p className="md:text-xl md:font-semibold text-gray-700">${post?.utilityFee} utility fee</p>
                            )}
                        </div>
                        <div>
                            <button className="px-6 py-2 text-white bg-blue-500 hover:bg-blue-400 rounded">Book Now</button>
                        </div>
                        <div className="bg-blue-100 w-full text-white space-y-3 p-6 rounded-xl">
                            <div className="space-y-1 text-blue-500">
                                <p className="font-semibold text-xl">{post?.afterJune}</p>
                                <p>{post?.afterJuneDes}</p>
                            </div>
                            <div className="space-y-1 text-blue-500">
                                <p className="font-semibold text-xl">{post?.beforeJune}</p>
                                <p>{post?.beforeJuneDes}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-10">
                    <div className="flex flex-wrap gap-10 items-center justify-center gap-y-4">
                        {post?.feature.features?.map((item, index) => (
                            <div key={index} className="flex gap-2 items-center rounded text-slate-700">
                                <i className={item?.icon}></i>
                                <p className="text-lg">{item?.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Features className={'mt-32'}/>
            <IFrame src={'https://www.tourbuzz.net/public/vtour/neighborhood/1927472'} title={'location iframe'} className={'w-full h-[600px]'}/>
            <div className={'mt-10'}>
                <div>
                    <h2></h2>
                    <div>
                        <ImageGellary images={post?.photoUrl} />
                    </div>
                </div>
            </div>



            <Form />


            {showPopUp && <ShowVideoPopUp onClose={()=> setShowPopUp(false)}/>}
        </div>
            <Footer />
        </div>
    );
}
