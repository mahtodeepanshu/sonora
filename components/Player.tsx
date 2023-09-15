"use client"

import useGetSongById from "@/hooks/useGetSongById"
import useLoadSong from "@/hooks/useLoadSong"
import usePlayer from "@/hooks/usePlayer"
import PlayerContent from "./PlayerContent"

const Player = () => {
  const player = usePlayer() 
  const { song } = useGetSongById(player.activeId)

  const songURL = useLoadSong(song!)

  if (!song || !songURL || !player.activeId) {
    return null
  }

  return (
    <div
        className="
            fixed
            bottom-0
            bg-black
            w-full
            py-2
            h-[80px]
            px-4
        "
    >
        <PlayerContent 
            key={songURL}
            song={song}
            songURL={songURL}
        />
    </div>
  )
}

export default Player