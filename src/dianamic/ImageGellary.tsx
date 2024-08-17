export default function ImageGellary({images}:{images: string[]}) {
    return(
        <div className={'grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'}>
            {
                images.map((image:string, index:number) => (
                    <div key={index}>
                        <img src={image} alt="images" />
                    </div>
                ))
            }
        </div>
    )
}