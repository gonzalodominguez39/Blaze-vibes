import React from "react";
import { FaVolumeUp, FaVolumeDown, FaVolumeMute } from "react-icons/fa";
import { usePlayerStore } from "../../../../hooks/usePlayerStore";
import  AudioPlayer from "react-h5-audio-player";
type VolumeBarProps = {
    playerRef: React.RefObject<AudioPlayer | null>;
  };
export const VolumeBar = ({playerRef}:VolumeBarProps) => {
    const {volume,setVolume} = usePlayerStore()
  const getVolumeIcon = () => {
    if (volume === 0) return <FaVolumeMute className="w-4 h-4" />;
    if (volume < 0.5) return <FaVolumeDown className="w-4 h-4" />;
    return <FaVolumeUp className="w-4 h-4" />;
  };

  const handleVolumeChange = (newVolume: number) => {
    setVolume(newVolume);
    if (playerRef.current?.audio?.current) {
      playerRef.current.audio.current.volume = newVolume;
    }
  };

  const toggleMute = () => {
    const newVolume = volume === 0 ? 0.8 : 0;
    handleVolumeChange(newVolume);
  };
  return (
    <div className="flex items-center gap-2 min-w-[120px]">
      <button
        onClick={toggleMute}
        className="p-1 rounded-full text-zinc-400 hover:text-fuchsia-500 transition-all duration-200 hover:scale-110"
        title={volume === 0 ? "Unmute" : "Mute"}
      >
        {getVolumeIcon()}
      </button>

      <div className="flex-1 relative group">
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={(e) => handleVolumeChange(parseFloat(e.target.value))}
          className="w-full h-1 bg-zinc-600 rounded-lg appearance-none cursor-pointer volume-slider"
          style={{
            background: `linear-gradient(to right, #d946ef 0%, #d946ef ${
              volume * 100
            }%, #3f3f46 ${volume * 100}%, #3f3f46 100%)`,
          }}
        />
        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-zinc-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          {Math.round(volume * 100)}%
        </div>
      </div>

      <span className="text-xs text-zinc-500 min-w-[35px] text-right font-mono">
        {Math.round(volume * 100)}%
      </span>
    </div>
  );
};
