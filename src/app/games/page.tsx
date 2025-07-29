"use client"
import { useState, useEffect } from "react"
import Data from "./../../data/projects.json"
import { useSearchParams } from 'next/navigation';
import { useMemo } from 'react';
export default function Games () {
  const [gameList, setGameList]: any = useState([])

  const searchParams = useSearchParams();
  const focusId = searchParams.get('focus');

  console.log('focusId:', focusId);

  useEffect(() => {
    setGameList(Data)
  }, []);
  // Reorder items so the focused item comes first
const reorderedItems = useMemo(() => {
  if (!focusId || !Array.isArray(gameList)) return gameList;

  const index = gameList.findIndex(item => String(item.gameUrl) === String(focusId));
  if (index === -1) return gameList;

  const focusedItem = gameList[index];
  const rest = [...gameList.slice(0, index), ...gameList.slice(index + 1)];

  return [focusedItem, ...rest];
}, [focusId, gameList]);

console.log("Reordering list — focusId:", focusId);
console.log("Matching index:", gameList.findIndex((item: any) => String(item.id) === String(focusId)));




  return (
    <div>
      {reorderedItems ? <div>YES</div> : <div>NO</div>}
      {console.log("reorderedItems", reorderedItems)}
      {reorderedItems.map((item: any, index: any) => {
        return (
          <div id={item.id} className="min-h-screen odd:bg-amber-500/50" key={index}>{item.title}</div>
        )
      })}
    </div>
  )
}