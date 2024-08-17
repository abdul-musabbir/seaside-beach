import React from 'react';
interface IFrameProps {
    src: string;
    title: string;
    width?: number;
    height?: number;
    frameBorder?: number;
    allow?: string;
    referrerPolicy?: string;
    allowFullScreen?: boolean;
    className?: string;
}

const IFrame: React.FC<IFrameProps> = ({
                                           src,
                                           className,
                                           title,
                                           width = 750,
                                           height = 422,
                                           frameBorder = 0,
                                           allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share',
                                           allowFullScreen = true
                                       }) => {
    return (
        <iframe
            width={width}
            height={height}
            src={src}
            title={title}
            frameBorder={frameBorder.toString()} // `frameBorder` should be a string
            allow={allow}
            className={className}
            allowFullScreen={allowFullScreen}
        ></iframe>
    );
};

export default IFrame;
