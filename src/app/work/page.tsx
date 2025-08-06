"use client";
import { useState, useEffect } from "react";
import Data from "./../../data/work.json";
import { useSearchParams } from "next/navigation";
import { useMemo } from "react";
import React from "react";
import Link from "next/link";
import Social from "../sections/social";
export default function Work () {
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
      (item) => String(item.title) === String(focusId)
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
      <div className="flex flex-col items-center px-4">
        {reorderedItems.map((item: any, index: any) => {
          const maxLength = Math.max(
            item.gamePreviews?.length || 0,
            item.previewImages?.length || 0,
            item.detailsDescriptions?.length || 0,
            item.externalVideoUrls?.length || 0
          );
          return (
            <article id={item.id} className="w-full max-w-[900px] p-4 border-b-2 border-neutral-600 last:border-0" key={index}>
              <h2 className="text-3xl font-bold">{item.title}</h2>
              {/* Hero video/images */}
              {item.heroDetails?.type === "video"
                ?
                <iframe
                  width="auto"
                  height="auto"
                  src={item.heroDetails.url
                  }
                  title={item.heroDetails.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  key={index}
                  className="aspect-video w-[400px]"
                ></iframe>

                : item.heroDetails?.type === "images"
                  ? item.heroDetails?.images.map((heroImages: any, index: any) => {
                    return (
                      <Link href={heroImages.externalLink} key={index}>
                        <figure key={index} className="w-[200px] text-center">
                          <img width="100%" height="100%" src={heroImages.url} alt={heroImages.title} />
                          <figcaption>{heroImages.title}</figcaption>
                        </figure>
                      </Link>
                    )
                  })
                  : "no data"}
              {item.description?.map((text: any, index: any) => {
                return (
                  <p dangerouslySetInnerHTML={{ __html: text.value }} key={index}></p>
                )
              })}
            </article>
          );
        })}
      </div>
    </>
  );
}
