import type { Track } from "../../../types/Track";
import { TrackItem } from "../TrackItem";

interface TrackListProps {
  tracks: Track[];
}

export const TrackList = ({ tracks }: TrackListProps) => {
  if (!tracks || tracks.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="w-24 h-24 mx-auto mb-4 bg-zinc-800 rounded-full flex items-center justify-center">
          <svg
            className="w-12 h-12 text-zinc-400"
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
        </div>
        <h3 className="text-lg font-medium text-white mb-2">No tracks found</h3>
        <p className="text-zinc-400">
          Try refreshing the page or check back later.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {tracks.slice(0,20).map((track) => (
        <TrackItem key={track.id} track={track} />
      ))}
    </div>
  );
};
