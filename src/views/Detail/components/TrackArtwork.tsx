import type { Track} from "../../../types/Track";

interface TrackArtworkProps {
  track: Track;
}
 export const TrackArtwork = ({ track }: TrackArtworkProps) => {
  console.log(track.artwork["1000x1000"]);
  return (
    <div className="relative group">
      {track.artwork && (track.artwork["1000x1000"] || track.artwork["480x480"] || track.artwork["150x150"]) ? (
        <img 
          src={track.artwork["1000x1000"] || track.artwork["480x480"] || track.artwork["150x150"]} 
          alt={track.title}
          className="w-64 h-64 lg:w-80 lg:h-80 object-cover rounded-2xl shadow-2xl shadow-fuchsia-500/10"
        />
      ) : (
        <div className="w-64 h-64 lg:w-80 lg:h-80 bg-zinc-800 rounded-2xl shadow-2xl flex items-center justify-center">
          <svg className="w-24 h-24 text-zinc-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
          </svg>
        </div>
      )}
      
      {/* Overlay con botón de play */}
      <div className="absolute inset-0  bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 rounded-2xl flex items-center justify-center">
        <button className="opacity-0 group-hover:opacity-100 bg-fuchsia-500 hover:bg-fuchsia-400 text-white rounded-full p-6 shadow-2xl hover:scale-110 transition-all duration-200">
          <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  );
};
