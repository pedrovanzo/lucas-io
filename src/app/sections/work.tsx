"use client";
import { useEffect, useState } from "react";
import WorkData from "./../../data/work.json";
import ContentCard from "../components/card/ImageCard";

export default function Work() {
    const [data, setData]: any = useState();
    useEffect(() => {
        setData(WorkData);
        console.log(WorkData);
    }, []);
    return (
        <article className="max-w-section-max mx-auto">
            <h2 className="my-4 w-fit font-serif text-2xl text-white italic">
                Professional Work:
            </h2>
            <ul className="grid grid-cols-3 gap-8 justify-between leading-none w-full font-sans">
                {data?.map((item: any, index: any) => {
                    return (
                        <li
                            key={index}
                            className="mx-auto md:mx-0 w-full max-w-[500px]"
                        >
                            <ContentCard
                                previewUrl={item.heroPreviewUrl}
                                title={item.title}
                                started={item.started}
                                ended={item.ended}
                            />
                        </li>
                    );
                })}
            </ul>
        </article>
    );
}
