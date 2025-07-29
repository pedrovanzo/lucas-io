import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function PreviewCard(props: any) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
                if(entry.isIntersecting) {
                    console.log("Video entered view", props.previewUrl)
                }
            },
            {
                threshold: 0.25,
            }
        );
        if (videoRef.current) {
            observer.observe(videoRef.current);
        }
        return () => {
            if (videoRef.current) {
                observer.unobserve(videoRef.current);
            }
        };
    }, []);
    return (
        <div className={`flex flex-col gap-4 basis-full`}>
            <video
                ref={videoRef}
                autoPlay
                loop
                playsInline
                muted
                src={props.previewUrl}
            ></video>
            <div className="px-2 md:px-0">
                <p className="text-2xl text-white">{props.title}</p>
                <p>
                    {props.engine} {props.timestamp}
                </p>
                <div className="flex flex-row gap-2">
                    <Link
                        href={`/games?focus=${props.gameUrl}`}
                        className="text-sm px-3 py-2 mt-4 border-2 rounded block w-fit"
                    >
                        Details
                    </Link>
                    <Link
                        href={props.gameUrl}
                        target="_blank"
                        className="text-sm px-3 py-2 mt-4 border-2 rounded block w-fit"
                    >
                        Play
                    </Link>
                </div>
            </div>
        </div>
    );
}
