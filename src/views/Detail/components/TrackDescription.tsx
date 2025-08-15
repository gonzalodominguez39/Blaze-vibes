import type { Track} from "../../../types/Track";

interface TrackDescriptionProps {
  track: Track
}

export const TrackDescription = ({ track }: TrackDescriptionProps) => {
  if (!track.description) return null;

  return (
    <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-2xl p-6 mb-8 border border-zinc-700/50">
      <h3 className="text-white text-lg font-semibold mb-4 flex items-center">
        <span className="w-1 h-6 bg-gradient-to-b from-fuchsia-500 to-pink-500 rounded-full mr-3"></span>
        About this track
      </h3>
      <p className="text-zinc-300 leading-relaxed">{track.description}</p>
    </div>
  );
};