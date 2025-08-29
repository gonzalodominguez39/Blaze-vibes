import { FaHeart, FaRegHeart, FaShare, FaList } from 'react-icons/fa'
import type { Track } from '../../../../types/Track'

interface ActionButtonsProps {
  track: Track
  isFavorite: boolean
  onToggleFavorite: () => void
  onShare: () => void
}

export const ActionButtons = ({ 
  isFavorite, 
  onToggleFavorite, 
  onShare 
}: ActionButtonsProps) => {
  return (
    <div className="flex items-center gap-2">
 
      <button
        onClick={onToggleFavorite}
        className={`p-2 cursor-pointer rounded-full transition-all duration-200 hover:scale-110 ${
          isFavorite
            ? "text-fuchsia-500 hover:text-fuchsia-400"
            : "text-zinc-400 hover:text-fuchsia-500"
        }`}
        title={isFavorite ? "Remove from favorites" : "Add to favorites"}
      >
        {isFavorite ? (
          <FaHeart className="w-5 h-5" />
        ) : (
          <FaRegHeart className="w-5 h-5" />
        )}
      </button>

      <button
        onClick={onShare}
        className="hidden sm:block cursor-pointer p-2 rounded-full text-zinc-400 hover:text-fuchsia-500 transition-all duration-200 hover:scale-110"
        title="Share track"
      >
        <FaShare className="w-4 h-4" />
      </button>

      <button
        className="hidden lg:block cursor-pointer p-2 rounded-full text-zinc-400 hover:text-fuchsia-500 transition-all duration-200 hover:scale-110"
        title="View queue"
      >
        <FaList className="w-4 h-4" />
      </button>
    </div>
  )
}