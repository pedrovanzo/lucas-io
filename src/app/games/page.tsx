"use client"
import { useState, useEffect } from "react"
import Data from "./../../data/projects.json"
export default function Games () {
  const [gameList, setGameList]: any = useState([])
  useEffect(() => {
    setGameList(Data)
  }, [])
  return (
    <div>
      {gameList.map((item: any, index: any) => {
        return (
          <div id={item.title} className="min-h-screen odd:bg-amber-500/50" key={index}>{item.title}</div>
        )
      })}
    </div>
  )
}