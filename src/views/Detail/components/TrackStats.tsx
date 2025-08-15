import type { Track} from "../../../types/Track";

interface TrackStatsProps {
  track: Track;
}

export const TrackStats = ({ track }: TrackStatsProps) => {
  const formatNumber = (num: number) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + "M";
    if (num >= 1000) return (num / 1000).toFixed(1) + "K";
    return num.toString();
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-2xl p-6 text-center border border-zinc-700/50 hover:border-fuchsia-500/30 transition-colors">
        <div className="text-4xl font-bold text-fuchsia-500 mb-2">
          {formatNumber(track.play_count)}
        </div>
        <div className="text-zinc-400 text-sm uppercase tracking-wider">Plays</div>
      </div>
      
      <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-2xl p-6 text-center border border-zinc-700/50 hover:border-pink-500/30 transition-colors">
        <div className="text-4xl font-bold text-pink-500 mb-2">
          {formatNumber(track.favorite_count)}
        </div>
        <div className="text-zinc-400 text-sm uppercase tracking-wider">Likes</div>
      </div>
      
      <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-2xl p-6 text-center border border-zinc-700/50 hover:border-purple-500/30 transition-colors">
        <div className="text-4xl font-bold text-purple-500 mb-2">
          {formatNumber(track.repost_count)}
        </div>
        <div className="text-zinc-400 text-sm uppercase tracking-wider">Reposts</div>
      </div>
    </div>
  );
};