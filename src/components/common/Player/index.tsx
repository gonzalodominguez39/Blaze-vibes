import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import "./Player.css";

type PlayerProps = {
  url: string;
};

export const Player = ({ url }: PlayerProps) => {
  console.log("desde player", url);

  return url ? (
    <div className="m-10 player-container bg-gradient-to-r from-zinc-900 to-zinc-800 rounded-2xl p-4 border border-zinc-700/50 shadow-xl">
      <AudioPlayer
        autoPlay
        src={url}
        onPlay={() => console.log("onPlay")}
        className="custom-audio-player"
        showJumpControls={true}
        showSkipControls={true}
        showFilledProgress={true}
        hasDefaultKeyBindings={true}
      />
    </div>
  ) : (
    <div className="m-10 flex items-center justify-center bg-gradient-to-r from-zinc-900 to-zinc-800 rounded-2xl p-6 border border-zinc-700/50">
      <div className="text-center">
        <svg
          className="w-12 h-12 text-zinc-500 mx-auto mb-3"
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
        <p className="text-zinc-400 font-medium">
          Track is not available for streaming
        </p>
      </div>
    </div>
  );
};
