import { usePlayerStore } from "../../../../hooks/usePlayerStore";
import { FaPlay, FaClock } from "react-icons/fa";
import type { Track } from "../../../../types/Track";
import { formatDuration,formatPlayCount } from "../../../../utils/format";

interface PlayBackViewProps {
  track: Track;
}

export const PlayBackView = ({ track }: PlayBackViewProps) => {
  const { isPlaying, url } = usePlayerStore();


  return (
    <div className="flex items-center gap-3 min-w-[200px] lg:min-w-[280px]">
      <div className="relative group">
        <img
          src={
            track.artwork?.["150x150"] ||
            track.artwork?.["480x480"] ||
            "/placeholder-track.jpg"
          }
          alt={track.title}
          className="w-14 h-14 object-cover rounded-lg shadow-lg transition-transform duration-200 group-hover:scale-105"
        />
        {isPlaying && url && (
          <div className="absolute inset-0 bg-black/40 rounded-lg flex items-center justify-center">
            <div className="w-3 h-3 bg-fuchsia-500 rounded-full animate-pulse"></div>
          </div>
        )}
      </div>

      <div className="min-w-0 flex-1">
        <h3 className="text-white font-semibold text-sm truncate hover:text-fuchsia-400 transition-colors cursor-pointer">
          {track.title}
        </h3>
        <p className="text-zinc-400 text-xs truncate hover:text-zinc-300 transition-colors cursor-pointer">
          {track.user?.name || "Unknown Artist"}
        </p>

        {/* Track stats - hidden on mobile */}
        <div className="hidden sm:flex items-center gap-3 mt-1 text-xs text-zinc-500">
          <span className="flex items-center gap-1">
            <FaPlay className="w-2 h-2" />
            {formatPlayCount(track.play_count || 0)}
          </span>
          <span className="flex items-center gap-1">
            <FaClock className="w-2 h-2" />
            {formatDuration(track.duration || 0)}
          </span>
        </div>
      </div>
    </div>
  );
};
