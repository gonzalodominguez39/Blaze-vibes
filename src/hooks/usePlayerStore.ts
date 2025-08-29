import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Track } from "../types/Track";

interface PlayerState {
  url: string | null;
  track:Track | null      
  isPlaying: boolean;          
  played: number;              
  volume: number;
              

  setUrl: (url: string) => void;
  play: () => void;
  pause: () => void;
  setTrack: (track: Track) => void;
  setPlayed: (played: number) => void;
  setVolume: (volume: number) => void;
}

export const usePlayerStore = create<PlayerState>()(
  persist(
    (set) => ({
      url: null,
      isPlaying: false,
      played: 0,
      track:null,
      volume: 0.8,

      setUrl: (url) => set({ url, isPlaying: true, played: 0 }),
      play: () => set({ isPlaying: true }),
      pause: () => set({ isPlaying: false }),
      setTrack: (track) => set({ track }),
      setPlayed: (played) => set({ played }),
      setVolume: (volume) => set({ volume }),
    }),
    {
      name: "player-storage", // clave usada en localStorage
    }
  )
);
