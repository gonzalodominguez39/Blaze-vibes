import { usePlayerStore } from "../../../../hooks/usePlayerStore";
import type  { Track } from "../../../../types/Track";
import { API_BASE_URL } from "../../../../constant/API";
import { formatDuration,formatNumber } from "../../../../utils/format";
import { useNavigate } from "react-router-dom";

interface TrackCardProps {
  track: Track;
}

export const TrackCard = ({ track }: TrackCardProps) => {
  const { setUrl,setTrack } = usePlayerStore();
  const trackStreamUrl = `${API_BASE_URL}/v1/tracks/${track.id}/stream`;
  const navigate= useNavigate()
 
  const handlePlayTrack = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation
    setTrack(track)
    setUrl(trackStreamUrl);
  };
 
  return (
    <div
  
      className="group relative bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 rounded-2xl p-5 hover:from-zinc-800 hover:via-zinc-700 hover:to-zinc-800 transition-all duration-500 cursor-pointer shadow-xl hover:shadow-2xl hover:shadow-fuchsia-500/20 border border-zinc-700/50 hover:border-fuchsia-500/30"
    >

      <div className="relative mb-4 overflow-hidden rounded-xl">
        <img
          src={track.artwork?.["480x480"] || track.artwork?.["150x150"]}
          alt={track.title}
          className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-110"
        />


        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />


        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <button onClick={e=>handlePlayTrack(e)} className="bg-gray-500 hover:bg-fuchsia-400 cursor-pointer text-black rounded-full p-3 shadow-2xl hover:scale-110 transition-all duration-200 backdrop-blur-sm">
            <svg
              className="w-4 h-4 ml-0.5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

    
        <div className="absolute top-3 right-3 bg-black/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold border border-white/20">
          {formatDuration(track.duration)}
        </div>

    
        <div className="absolute top-2 left-2 bg-gradient-to-r from-fuchsia-500 to-pink-500 text-white text-xs px-2 py-1 rounded-full font-bold shadow-lg">
          🔥
        </div>
      </div>

      <div className="space-y-3"   onClick={()=>navigate(`detail/${track.id}`)} >
        <h3
          className="text-white font-bold text-lg leading-tight bg-gradient-to-r from-white to-zinc-300 bg-clip-text text-transparent group-hover:from-fuchsia-400 group-hover:to-pink-400 transition-all duration-300"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {track.title}
        </h3>
        <div className="flex items-center space-x-3">
          <div className="relative">
            <img
              src={track.user.profile_picture?.["150x150"]}
              alt={track.user.name}
              className="w-8 h-8 rounded-full border-2 border-zinc-600 group-hover:border-fuchsia-500 transition-colors duration-300"
            />
            <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-fuchsia-500 rounded-full border-2 border-zinc-900"></div>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-zinc-300 text-sm font-medium truncate group-hover:text-white transition-colors">
              {track.user.name}
            </p>
            <p className="text-zinc-500 text-xs truncate">
              @{track.user.handle}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3 text-xs bg-gradient-to-r from-zinc-800/50 to-zinc-700/50 rounded-lg p-3 border border-zinc-600/30">
          <div className="text-center">
            <div className="text-fuchsia-500 text-lg">▶</div>
            <div className="text-zinc-300 font-semibold mt-1">
              {formatNumber(track.play_count)}
            </div>
            <div className="text-zinc-400 text-xs">plays</div>
          </div>

          <div className="text-center border-l border-r border-zinc-600/50">
            <div className="text-pink-500 text-lg">♥</div>
            <div className="text-zinc-300 font-semibold mt-1">
              {formatNumber(track.favorite_count)}
            </div>
            <div className="text-zinc-400 text-xs">likes</div>
          </div>

          <div className="text-center">
            <div className="text-purple-500 text-lg">↻</div>
            <div className="text-zinc-300 font-semibold mt-1">
              {formatNumber(track.repost_count)}
            </div>
            <div className="text-zinc-400 text-xs">reposts</div>
          </div>
        </div>

        {track.genre && (
          <div className="text-center">
            <span className="bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg">
              {track.genre}
            </span>
          </div>
        )}

        <div className="w-full h-1 bg-zinc-700 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-fuchsia-500 to-blue-500 rounded-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-1000 ease-out"></div>
        </div>

        <div className="flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <button className="text-zinc-400 hover:text-pink-500 transition-colors text-sm font-medium">
            ♥ Like
          </button>

          <button className="text-zinc-400 hover:text-fuchsia-500 transition-colors text-sm font-medium">
            📤 Share
          </button>

          <button className="text-zinc-400 hover:text-white transition-colors text-sm font-medium">
            ⋯ More
          </button>
        </div>
      </div>
    </div>
  );
};
