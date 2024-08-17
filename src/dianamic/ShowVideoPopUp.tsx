import { X } from "lucide-react";
import { useRef } from "react";
import IFrame from "./IFrame.tsx";

interface ShowVideoPopUpProps {
    onClose: () => void;
}

export default function ShowVideoPopUp({ onClose }: ShowVideoPopUpProps) {
    const popUpRef = useRef<HTMLDivElement>(null);

    const hidePopUp = (e: React.MouseEvent<HTMLDivElement>) => {
        if (popUpRef.current === e.target) {
            onClose();
        }
    };

    return (
        <div
            ref={popUpRef}
            onClick={hidePopUp}
            className="fixed inset-0 bg-black z-50 bg-opacity-40 backdrop-blur flex items-center justify-center"
        >
            <div className="relative">
                <IFrame
                    src="https://www.youtube.com/embed/H1CIBqDeWQ0?si=nvfU_LYQ9PCV74-_"
                    title="YouTube video player"
                />
                <button
                    className="absolute right-0 -top-12 text-white"
                    onClick={onClose}
                >
                    <X className="size-8" />
                </button>
            </div>
        </div>
    );
}
