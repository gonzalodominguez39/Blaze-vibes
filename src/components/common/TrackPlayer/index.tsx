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
      className="fixed bottom-0 left-0 right-0 bg-zinc-900/95 border-t border-zinc-800 backdrop-blur-lg z-50 transition-transform duration-300 translate-y-0"
    >
      <div className="max-w-screen-2xl mx-auto px-4 py-3">
        <div className="flex items-center gap-4">
          <PlayBackView track={track} />
          
          <PlayerControls />

          <ActionButtons 
            track={track}
            isFavorite={isFavorite}
            onToggleFavorite={toggleFavorite}
            onShare={shareTrack}
          />
        </div>
      </div>
    </div>
  );
};
