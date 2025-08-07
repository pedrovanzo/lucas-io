"use client";
import { useState, useEffect } from "react";
import Data from "./../../data/technical.json";
import { useSearchParams } from "next/navigation";
import { useMemo } from "react";
import React from "react";
import "./styles.css"
import Social from "../sections/social";
export default function Technical () {
    const [gameList, setGameList]: any = useState([]);

    const searchParams = useSearchParams();
    const focusId = searchParams.get("focus");

    useEffect(() => {
        setGameList(Data);
    }, []);
    // Reorder items so the focused item comes first
    const reorderedItems = useMemo(() => {
        if (!focusId || !Array.isArray(gameList)) return gameList;

        const index = gameList.findIndex(
            (item) => String(item.gameUrl) === String(focusId)
        );
        if (index === -1) return gameList;

        const focusedItem = gameList[index];
        const rest = [
            ...gameList.slice(0, index),
            ...gameList.slice(index + 1),
        ];

        return [focusedItem, ...rest];
    }, [focusId, gameList]);

    return (
        <>
            <Social />
            <main className="flex flex-col items-center px-4">
                {reorderedItems.filter((item: any) => item.type?.includes("technical")).map((item: any, index: any) => {
                    const maxLength = Math.max(
                        item.gamePreviews?.length || 0,
                        item.previewImages?.length || 0,
                        item.detailsDescriptions?.length || 0,
                        item.externalVideoUrls?.length || 0
                    );
                    return (
                        <article id={item.id} className="w-full max-w-[900px] flex flex-col gap-6 p-4 border-b-2 border-neutral-600 last:border-0" key={index}>
                            <h2 className="text-4xl">{item.title}</h2>
                            <div className="bg-black">
                                <video
                                    // ref={videoRef}
                                    autoPlay
                                    loop
                                    playsInline
                                    muted
                                    src={item.heroPreviewUrl}
                                    className="w-hero-preview-max-lg mx-auto"
                                ></video>
                            </div>

                            {[...Array(maxLength)].map((_, index) => (
                                <React.Fragment key={index}>
                                    {item.detailsDescriptions?.[index] && (
                                        <p dangerouslySetInnerHTML={{ __html: item.detailsDescriptions[index].description }}>
                                        </p>
                                    )}
                                    {item.externalVideoUrls?.[index] && (
                                        <>
                                            <iframe
                                                width="auto"
                                                height="auto"
                                                src={
                                                    item.externalVideoUrls[index]
                                                        .url
                                                }
                                                title={item.title}
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                referrerPolicy="strict-origin-when-cross-origin"
                                                allowFullScreen
                                                key={index}
                                                className="h-[350px] w-full mx-auto"
                                            ></iframe>
                                        </>
                                    )}
                                    {item.gamePreviews?.[index] && (
                                        <div>
                                            <div className="w-full bg-black">
                                                <video
                                                    // ref={videoRef}
                                                    autoPlay
                                                    loop
                                                    playsInline
                                                    muted
                                                    src={
                                                        item.gamePreviews[index]
                                                            .previewUrl
                                                    }
                                                    className="w-hero-preview-max-lg mx-auto"
                                                ></video>
                                            </div>
                                            <p>
                                                {
                                                    item.gamePreviews[index]
                                                        .previewDescription
                                                }
                                            </p>
                                        </div>
                                    )}
                                </React.Fragment>
                            ))}
                            {item.previewImages
                                ? item.previewImages.map(
                                    (item: any, index: any) => {
                                        return (
                                            <figure key={index} className="aspect-video w-[400px]">
                                                <img
                                                    src={item.image}
                                                    alt={item.title}
                                                    width="100%"
                                                    height="100%"
                                                />
                                                <figcaption>
                                                    {item.title}
                                                </figcaption>
                                            </figure>
                                        );
                                    }
                                )
                                : null}
                            <a href={item.gameUrl} className="flex flex-row items-center gap-3">
                                <span>
                                    <svg className="size-5" width="64px" height="64px" viewBox="-3 0 28 28" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#1e1e1e" stroke="#1e1e1e"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>play</title> <desc>Created with Sketch Beta.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Icon-Set-Filled" transform="translate(-419.000000, -571.000000)" fill="#aaa"> <path d="M440.415,583.554 L421.418,571.311 C420.291,570.704 419,570.767 419,572.946 L419,597.054 C419,599.046 420.385,599.36 421.418,598.689 L440.415,586.446 C441.197,585.647 441.197,584.353 440.415,583.554" id="play"> </path> </g> </g> </g></svg>
                                </span>
                                <span>
                                    Play the game
                                </span>
                            </a>
                        </article>
                    );
                })}
            </main>
        </>
    );
}
