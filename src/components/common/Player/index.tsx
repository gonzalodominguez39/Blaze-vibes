import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import "./Player.css";
import { usePlayerStore } from "../../../hooks/usePlayerStore";
import type React from "react";
import { useRef, useEffect } from "react";

export const Player = () => {
  const { url, pause, play, setVolume, setPlayed, played } = usePlayerStore();
  const playerRef = useRef<AudioPlayer>(null);

  // Reset state when URL changes
  useEffect(() => {
    if (url) {
      setPlayed(0);
      if (playerRef.current?.audio?.current) {
        playerRef.current.audio.current.currentTime = 0;
      }
    }
  }, [url, setPlayed]);

  // Handle play request
  const handlePlay = () => {
    if (played && playerRef.current?.audio?.current) {
      playerRef.current.audio.current.currentTime = played;
    }
    play();
  };
  return url ? (
    <div className="m-10 player-container bg-gradient-to-r from-zinc-900 to-zinc-800 rounded-2xl p-4 border border-zinc-700/50 shadow-xl">
      <AudioPlayer
        ref={playerRef}
        autoPlay
        src={url}
        onPlay={handlePlay}
        onPause={pause}
        onEnded={() => {
          setPlayed(0);
          pause();
        }}
        onVolumeChange={(e: Event) => {
          setVolume((e.target as HTMLAudioElement).volume);
        }}
        onListen={(e: Event) => {
          const currentTime = (e.target as HTMLAudioElement).currentTime;
          setPlayed(currentTime);
        }}
        className="custom-audio-player"
        showJumpControls={false}
        showSkipControls={false}
        showFilledProgress={true}
        hasDefaultKeyBindings={true}
      />
    </div>
  ) : (
    <div className="m-10 flex items-center justify-center bg-gradient-to-r from-zinc-900 to-zinc-800 rounded-2xl p-6 border border-zinc-700/50">
      <div className="text-center">
        <svg
          className="w-12 h-12 text-zinc-500 mx-auto mb-3"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
          />
        </svg>
        <p className="text-zinc-400 font-medium">
          Track is not available for streaming
        </p>
      </div>
    </div>
  );
};
