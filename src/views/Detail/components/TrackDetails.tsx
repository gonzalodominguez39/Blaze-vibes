import type { Track} from "../../../types/Track";

interface TrackDetailsProps {
  track: Track;
}

export const TrackDetails = ({ track }: TrackDetailsProps) => {
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
    <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-2xl p-6 border border-zinc-700/50">
      <h3 className="text-white text-lg font-semibold mb-4 flex items-center">
        <span className="w-1 h-6 bg-gradient-to-b from-fuchsia-500 to-pink-500 rounded-full mr-3"></span>
        Track Information
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
        <div className="flex justify-between py-2 border-b border-zinc-700/50">
          <span className="text-zinc-400">Release Date:</span>
          <span className="text-white font-medium">{formatDate(track.release_date)}</span>
        </div>
        <div className="flex justify-between py-2 border-b border-zinc-700/50">
          <span className="text-zinc-400">Duration:</span>
          <span className="text-white font-medium">{formatDuration(track.duration)}</span>
        </div>
        <div className="flex justify-between py-2 border-b border-zinc-700/50">
          <span className="text-zinc-400">Genre:</span>
          <span className="text-white font-medium">{track.genre || 'Not specified'}</span>
        </div>
        <div className="flex justify-between py-2 border-b border-zinc-700/50">
          <span className="text-zinc-400">Downloadable:</span>
          <span className="text-white font-medium">{track.is_downloadable ? 'Yes' : 'No'}</span>
        </div>
        <div className="flex justify-between py-2 border-b border-zinc-700/50">
          <span className="text-zinc-400">Streamable:</span>
          <span className="text-white font-medium">{track.is_streamable ? 'Yes' : 'No'}</span>
        </div>
        <div className="flex justify-between py-2 border-b border-zinc-700/50">
          <span className="text-zinc-400">Track ID:</span>
          <span className="text-white font-mono text-xs">{track.id}</span>
        </div>
      </div>
    </div>
  );
};