import { usePlayerStore } from "../../../../hooks/usePlayerStore";
import { FaPlay, FaClock } from "react-icons/fa";
import type { Track } from "../../../../types/Track";
import { formatDuration,formatPlayCount } from "../../../../utils/format";
import { useState } from "react";

interface PlayBackViewProps {
  track: Track;
}

export const PlayBackView = ({ track }: PlayBackViewProps) => {
  const { isPlaying, url } = usePlayerStore();
  const [imageError, setImageError] = useState(false);

  return (
    <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto">
      <div className="relative group flex-shrink-0">
        {!imageError ? (
          <img
            src={
              track.artwork?.["150x150"] ||
              track.artwork?.["480x480"]
            }
            alt={track.title}
            onError={() => setImageError(true)}
            className="w-12 h-12 sm:w-14 sm:h-14 object-cover rounded-lg shadow-lg transition-transform duration-200 group-hover:scale-105"
          />
        ) : (
          <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-fuchsia-600 to-pink-600 rounded-lg shadow-lg flex items-center justify-center flex-shrink-0">
            <span className="text-lg sm:text-xl text-white">♫</span>
          </div>
        )}
        {isPlaying && url && (
          <div className="absolute inset-0 bg-black/40 rounded-lg flex items-center justify-center">
            <div className="flex gap-0.5">
              <div className="w-1 bg-fuchsia-500 rounded-full animate-pulse" style={{height: '8px', animationDelay: '0s'}}></div>
              <div className="w-1 bg-fuchsia-500 rounded-full animate-pulse" style={{height: '10px', animationDelay: '0.1s'}}></div>
              <div className="w-1 bg-fuchsia-500 rounded-full animate-pulse" style={{height: '8px', animationDelay: '0.2s'}}></div>
            </div>
          </div>
        )}
      </div>

      <div className="min-w-0 flex-1 sm:flex-none">
        <h3 className="text-white font-bold text-xs sm:text-sm truncate hover:text-fuchsia-400 transition-colors cursor-pointer line-clamp-1">
          {track.title}
        </h3>
        <p className="text-zinc-400 text-xs truncate hover:text-zinc-300 transition-colors cursor-pointer line-clamp-1">
          {track.user?.name || "Unknown Artist"}
        </p>

        {/* Track stats - hidden on mobile */}
        <div className="hidden md:flex items-center gap-2 mt-1 text-xs text-zinc-500">
          <span className="flex items-center gap-1 truncate">
            <FaPlay className="w-2.5 h-2.5 flex-shrink-0" />
            <span className="truncate">{formatPlayCount(track.play_count || 0)}</span>
          </span>
          <span className="hidden lg:flex items-center gap-1">
            <FaClock className="w-2.5 h-2.5" />
            {formatDuration(track.duration || 0)}
          </span>
        </div>
      </div>
    </div>
  );
};
