"use client";
import { useState, useEffect } from "react";
import Data from "./../../data/projects.json";
import { useSearchParams } from "next/navigation";
import { useMemo } from "react";
import React from "react";
export default function Games() {
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
        <div>
            {reorderedItems.map((item: any, index: any) => {
                const maxLength = Math.max(
                    item.gamePreviews?.length || 0,
                    item.previewImages?.length || 0,
                    item.detailsDescriptions?.length || 0,
                    item.externalVideoUrls?.length || 0
                );
                return (
                    <article id={item.id} className="max-w-[900px]" key={index}>
                        <h2 className="text-4xl">{item.title}</h2>
                        <video
                            // ref={videoRef}
                            autoPlay
                            loop
                            playsInline
                            muted
                            src={item.heroPreviewUrl}
                            className="w-hero-preview-max-lg"
                        ></video>

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
                                            title="The History of Mordoaaar"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            referrerPolicy="strict-origin-when-cross-origin"
                                            allowFullScreen
                                            key={index}
                                            className="aspect-video w-[400px]"
                                        ></iframe>
                                    </>
                                )}
                                {item.gamePreviews?.[index] && (
                                    <div>
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
                                            className="w-hero-preview-max-lg"
                                        ></video>
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
                        <p>Play the game <a href={item.gameUrl}>HERE</a></p>
                    </article>
                );
            })}
        </div>
    );
}
