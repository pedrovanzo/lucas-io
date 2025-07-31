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
                    item.detailsDescriptions?.length || 0
                );
                return (
                    <article id={item.id} className="" key={index}>
                        <h2 className="text-4xl">{item.title}</h2>
                        <video
                            // ref={videoRef}
                            autoPlay
                            loop
                            playsInline
                            muted
                            src={item.heroPreviewUrl}
                            className="border-2 w-hero-preview-max-lg"
                        ></video>

                        {[...Array(maxLength)].map((_, index) => (
                            <React.Fragment key={index}>
                                {item.gamePreviews?.[index] && (
                                    <div>
                                        {item.gamePreviews[index].previewUrl}
                                    </div>
                                )}
                                {item.detailsDescriptions?.[index] && (
                                    <p>
                                        {
                                            item.detailsDescriptions[index]
                                                .description
                                        }
                                    </p>
                                )}
                            </React.Fragment>
                        ))}
                    </article>
                );
            })}
        </div>
    );
}
