import { useState, useEffect } from "react";
import type { Track } from "../../../types/Track";
import { PlayBackView } from "./components/PlayBackView";
import { ActionButtons } from "./components/ActionButtons";
import { PlayerControls } from "./components/PlayerControls";
import { usePlayerStore } from "../../../hooks/usePlayerStore";

export const TrackPlayer = () => {
  const [isFavorite, setIsFavorite] = useState(false);
  const { track, url } = usePlayerStore();

  // Si no hay URL, no mostramos nada
  if (!url || !track) return null;

  useEffect(() => {
    if (track) {
      const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
      setIsFavorite(favorites.some((fav: Track) => fav.id === track.id));
    }
  }, [track]);

  const toggleFavorite = () => {
    if (!track) return;

    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    let updatedFavorites;

    if (isFavorite) {
      updatedFavorites = favorites.filter((fav: Track) => fav.id !== track.id);
    } else {
      updatedFavorites = [...favorites, track];
    }

    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    setIsFavorite(!isFavorite);
  };

  const shareTrack = async () => {
    if (!track) return;

    if (navigator.share) {
      try {
        await navigator.share({
          title: track.title,
          text: `Check out "${track.title}" by ${track.user.name}`,
          url: track.permalink || window.location.href,
        });
      } catch (error) {
        console.log("Error sharing:", error);
      }
    } else {
      const shareText = `Check out "${track.title}" by ${track.user.name} - ${
        track.permalink || window.location.href
      }`;
      navigator.clipboard.writeText(shareText);
    }
  };

  if (!track) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 bg-gradient-to-t from-zinc-900/98 via-zinc-900/95 to-zinc-800/80 border-t border-zinc-700/50 backdrop-blur-xl z-50 transition-transform duration-300 translate-y-0 shadow-2xl"
    >
      <div className="max-w-screen-2xl mx-auto px-2 sm:px-3 md:px-4 py-2 sm:py-2.5 md:py-3">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3">
          <div className="order-1 sm:order-none sm:min-w-0 sm:w-auto">
            <PlayBackView track={track} />
          </div>
          
          <div className="order-2 sm:order-none flex-1 min-w-0">
            <PlayerControls />
          </div>

          <div className="order-3 sm:order-none sm:flex-shrink-0">
            <ActionButtons 
              track={track}
              isFavorite={isFavorite}
              onToggleFavorite={toggleFavorite}
              onShare={shareTrack}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
