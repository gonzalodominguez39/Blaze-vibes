import type { Track} from "../../../types/Track";

interface TrackInfoProps {
  track: Track;
}

export const TrackInfo = ({ track }: TrackInfoProps) => {
  const formatDate = (dateString: string) =>
    new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

  const formatDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="flex-1">
      <p className="text-sm text-zinc-300 uppercase tracking-wider mb-2">Song</p>
      <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4 leading-tight bg-gradient-to-r from-white to-fuchsia-200 bg-clip-text text-transparent">
        {track.title}
      </h1>
      
      {/* Información del artista */}
      <div className="flex items-center space-x-4 mb-6">
        <img 
          src={track.user.profile_picture?.["150x150"]} 
          alt={track.user.name}
          className="w-12 h-12 rounded-full border-2 border-fuchsia-500/50"
        />
        <div>
          <p className="text-white text-lg font-semibold">{track.user.name}</p>
          <p className="text-zinc-400">@{track.user.handle}</p>
        </div>
      </div>

      {/* Metadatos */}
      <div className="flex flex-wrap items-center text-sm text-zinc-400 space-x-4 mb-6">
        <span>{formatDate(track.release_date)}</span>
        <span>•</span>
        <span>{formatDuration(track.duration)}</span>
        {track.genre && (
          <>
            <span>•</span>
            <span className="bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
              {track.genre}
            </span>
          </>
        )}
      </div>
    </div>
  );
};