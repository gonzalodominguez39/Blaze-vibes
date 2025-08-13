import type { Daum } from "../../../types/TrackResponse";

interface TrackCardProps {
  track: Daum;
}

export const TrackCard = ({ track }: TrackCardProps) => {
  const formatDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + "M";
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + "K";
    }
    return num.toString();
  };

  return (
    <div className="group relative bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 rounded-2xl p-5 hover:from-zinc-800 hover:via-zinc-700 hover:to-zinc-800 transition-all duration-500 cursor-pointer shadow-xl hover:shadow-2xl hover:shadow-green-500/20 border border-zinc-700/50 hover:border-green-500/30">
      {/* Imagen del track con efectos */}
      <div className="relative mb-4 overflow-hidden rounded-xl">
        <img
          src={track.artwork?.["480x480"] || track.artwork?.["150x150"]}
          alt={track.title}
          className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Overlay con gradiente */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Botón de play central */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <button className="bg-green-500 hover:bg-green-400 text-black rounded-full p-3 shadow-2xl hover:scale-110 transition-all duration-200 backdrop-blur-sm">
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

        {/* Duración con estilo mejorado */}
        <div className="absolute top-3 right-3 bg-black/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold border border-white/20">
          {formatDuration(track.duration)}
        </div>

        {/* Indicador de trending */}
        <div className="absolute top-2 left-2 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs px-2 py-1 rounded-md font-bold">
          🔥
        </div>
      </div>

      {/* Información del track */}
      <div className="space-y-3">
        {/* Título con gradiente */}
        <h3
          className="text-white font-bold text-lg leading-tight bg-gradient-to-r from-white to-zinc-300 bg-clip-text text-transparent group-hover:from-green-400 group-hover:to-blue-400 transition-all duration-300"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {track.title}
        </h3>

        {/* Información del artista con mejor diseño */}
        <div className="flex items-center space-x-3">
          <div className="relative">
            <img
              src={track.user.profile_picture?.["150x150"]}
              alt={track.user.name}
              className="w-8 h-8 rounded-full border-2 border-zinc-600 group-hover:border-green-500 transition-colors duration-300"
            />
            <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-zinc-900"></div>
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

        {/* Estadísticas en grid mejorado */}
        <div className="grid grid-cols-3 gap-3 text-xs bg-zinc-800/50 rounded-lg p-3">
          <div className="text-center">
            <div className="text-green-500 text-lg">▶</div>
            <div className="text-zinc-400 font-medium mt-1">
              {formatNumber(track.play_count)}
            </div>
            <div className="text-zinc-500 text-xs">plays</div>
          </div>

          <div className="text-center border-l border-r border-zinc-700">
            <div className="text-red-500 text-lg">♥</div>
            <div className="text-zinc-400 font-medium mt-1">
              {formatNumber(track.favorite_count)}
            </div>
            <div className="text-zinc-500 text-xs">likes</div>
          </div>

          <div className="text-center">
            <div className="text-blue-500 text-lg">↻</div>
            <div className="text-zinc-400 font-medium mt-1">
              {formatNumber(track.repost_count)}
            </div>
            <div className="text-zinc-500 text-xs">reposts</div>
          </div>
        </div>

        {/* Género */}
        {track.genre && (
          <div className="text-center">
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-2 py-1 rounded-md text-xs font-medium">
              {track.genre}
            </span>
          </div>
        )}

        {/* Barra de progreso decorativa */}
        <div className="w-full h-1 bg-zinc-700 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-green-500 to-blue-500 rounded-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-1000 ease-out"></div>
        </div>

        {/* Botones de acción simplificados */}
        <div className="flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <button className="text-zinc-400 hover:text-red-500 transition-colors text-sm">
            ♥ Like
          </button>

          <button className="text-zinc-400 hover:text-blue-500 transition-colors text-sm">
            📤 Share
          </button>

          <button className="text-zinc-400 hover:text-white transition-colors text-sm">
            ⋯ More
          </button>
        </div>
      </div>
    </div>
  );
};
