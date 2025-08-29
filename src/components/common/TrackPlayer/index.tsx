import React from 'react'
import { Player } from '../Player'
import type { Track } from '../../../types/Track';

export const TrackPlayer = () => {
  const json = localStorage.getItem("Track");
  const track: Track = JSON.parse(json as string);

  if (!track) return null;

  return (
    <div className="bg-zinc-900/95 rounded-xl border border-zinc-800 p-4">
      <div className="flex flex-col gap-4">
        <div className="aspect-square w-full max-w-[300px] mx-auto">
          <img 
            src={track.artwork["480x480"]} 
            alt={track.title}
            className="w-full h-full object-cover rounded-xl shadow-lg" 
          />
        </div>
        <div className="space-y-2">
          <h3 className="text-white font-medium text-xl text-center">{track.title}</h3>
          <p className="text-zinc-400 text-sm text-center">{track.user.name}</p>
        </div>
        <div className="w-full">
          <Player />
        </div>
      </div>
    </div>
  )
}
