"use client";
import { useEffect, useState } from "react";
import WorkData from "./../../data/projects.json";
import PreviewCard from "../components/card/previewCard";

export default function OtherProjects() {
    const [data, setData]: any = useState();
    useEffect(() => {
        setData(WorkData);
    }, []);
    return (
        <article className="max-w-section-max mx-auto">
            <h2 className="my-4 w-fit font-serif text-2xl text-white italic">
                Other Engines Projects (by most recent):
            </h2>
            <ul className="grid grid-cols-4 gap-8 justify-between leading-none w-full font-sans">
                {data
                    ?.filter((item: any) => item.type?.includes("other"))
                    .map((item: any, index: any) => {
                        return (
                            <li key={index} className="mx-auto md:mx-0">
                                <PreviewCard
                                    previewUrl={item.heroPreviewUrl}
                                    title={item.title}
                                    engine={item.engine}
                                    timestamp={item.timestamp}
                                    gameUrl={item.gameUrl}
                                />
                            </li>
                        );
                    })}
            </ul>
        </article>
    );
}
