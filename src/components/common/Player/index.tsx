import AudioPlayer, { RHAP_UI } from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import "./Player.css";
import { usePlayerStore } from "../../../hooks/usePlayerStore";
import { useRef, useEffect, useState } from "react";
import {formatTime} from "../../../utils/format";
import {
  FaMusic,
} from "react-icons/fa";
import { VolumeBar } from "./components/VolumeBar";

interface PlayerProps {
  compact?: boolean;
}

export const Player = ({ compact = false }: PlayerProps) => {
  const { url, pause, play,setVolume, setPlayed, played,volume, track} =
    usePlayerStore();
  const playerRef = useRef<AudioPlayer>(null);
  const [duration, setDuration] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState<number>(0);

  useEffect(() => {
    if (url) {
      setPlayed(0);
      setCurrentTime(0);
      if (playerRef.current?.audio?.current) {
        playerRef.current.audio.current.currentTime = 0;
      }
    }
  }, [url, setPlayed]);

  useEffect(() => {
    if (playerRef.current?.audio?.current) {
      playerRef.current.audio.current.volume = volume;
    }
  }, [volume]);

  const handlePlay = () => {
    if (played && playerRef.current?.audio?.current) {
      playerRef.current.audio.current.currentTime = played;
    }
    play();
  };

  const handleLoadedMetadata = (e: Event) => {
    const audio = e.target as HTMLAudioElement;
    setDuration(audio.duration);
  };

  const handleTimeUpdate = (e: Event) => {
    const audio = e.target as HTMLAudioElement;
    setCurrentTime(audio.currentTime);
    setPlayed(audio.currentTime);
  };



  if (!url) {
    return compact ? (
      <div className="flex items-center justify-center py-2">
        <div className="text-center">
          <FaMusic className="w-8 h-8 text-zinc-500 mx-auto mb-2" />
          <p className="text-zinc-400 text-xs">No track selected</p>
        </div>
      </div>
    ) : (
      <div className="m-10 flex items-center justify-center bg-gradient-to-r from-zinc-900 to-zinc-800 rounded-2xl p-6 border border-zinc-700/50">
        <div className="text-center">
          <FaMusic className="w-12 h-12 text-zinc-500 mx-auto mb-3" />
          <p className="text-zinc-400 font-medium">
            Track is not available for streaming
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={
        compact
          ? "player-container-compact"
          : "m-10 player-container bg-gradient-to-r from-zinc-900 to-zinc-800 rounded-2xl p-4 border border-zinc-700/50 shadow-xl"
      }
    >
      {compact && (
        <div className="flex items-center justify-between mb-1.5 sm:mb-2 px-1 sm:px-2 gap-1">
          <span className="text-xs text-zinc-400 flex-shrink-0">
            {formatTime(currentTime)}
          </span>
          <span className="hidden sm:inline text-xs text-zinc-300 font-medium flex-shrink-0">
            {track?.title.substring(0, 30)}...
          </span>
          <span className="text-xs text-zinc-400 flex-shrink-0">
            {formatTime(duration)}
          </span>
        </div>
      )}

      <div className="flex items-center gap-2 sm:gap-3">
        <AudioPlayer
          ref={playerRef}
          src={url}
          onPlay={handlePlay}
          onPause={pause}
          onEnded={() => {
            setPlayed(0);
            setCurrentTime(0);
            pause();
          }}
          onVolumeChange={(e: Event) => {
            setVolume((e.target as HTMLAudioElement).volume);
          }}
          onListen={handleTimeUpdate}
          onLoadedMetaData={(e: Event) => handleLoadedMetadata(e)}
          className={
            compact ? "custom-audio-player compact" : "custom-audio-player"
          }
          showJumpControls={!compact}
          showSkipControls={false}
          showFilledProgress={true}
          hasDefaultKeyBindings={true}
          customProgressBarSection={[
            RHAP_UI.CURRENT_TIME,
            RHAP_UI.PROGRESS_BAR,
            RHAP_UI.DURATION,
          ]}
          customControlsSection={[RHAP_UI.MAIN_CONTROLS]}
          customVolumeControls={compact ? [] : [RHAP_UI.VOLUME]}
        />
        {!compact && <VolumeBar playerRef={playerRef}/>}

      </div>
    </div>
  );
};
