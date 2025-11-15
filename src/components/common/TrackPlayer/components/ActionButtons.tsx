import { FaHeart, FaRegHeart, FaShare, FaList } from 'react-icons/fa'
import type { Track } from '../../../../types/Track'
import { useNavigate } from 'react-router-dom'

interface ActionButtonsProps {
  track: Track
  isFavorite: boolean
  onToggleFavorite: () => void
  onShare: () => void
}

export const ActionButtons = ({ 
  isFavorite, 
  onToggleFavorite, 
  onShare,
  track
}: ActionButtonsProps) => {
  const navigate = useNavigate()
  return (
    <div className="flex items-center gap-1 sm:gap-2">
 
      <button
        onClick={onToggleFavorite}
        className={`p-1.5 sm:p-2 cursor-pointer rounded-full transition-all duration-200 hover:scale-110 ${
          isFavorite
            ? "text-fuchsia-500 hover:text-fuchsia-400 bg-fuchsia-500/10"
            : "text-zinc-400 hover:text-fuchsia-500 hover:bg-fuchsia-500/10"
        }`}
        title={isFavorite ? "Remove from favorites" : "Add to favorites"}
      >
        {isFavorite ? (
          <FaHeart className="w-4 h-4 sm:w-5 sm:h-5" />
        ) : (
          <FaRegHeart className="w-4 h-4 sm:w-5 sm:h-5" />
        )}
      </button>

      <button
        onClick={onShare}
        className="p-1.5 sm:p-2 cursor-pointer rounded-full text-zinc-400 hover:text-fuchsia-500 hover:bg-fuchsia-500/10 transition-all duration-200 hover:scale-110"
        title="Share track"
      >
        <FaShare className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
      </button>

      <button
        className="hidden sm:block p-1.5 sm:p-2 cursor-pointer rounded-full text-zinc-400 hover:text-fuchsia-500 hover:bg-fuchsia-500/10 transition-all duration-200 hover:scale-110"
        title="View queue"
      >
        <FaList className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
      </button>

      <button
        onClick={() => navigate(`/detail/${track.id}`)}
        className="sm:hidden px-2 sm:px-3 py-1 sm:py-1.5 cursor-pointer rounded-full text-zinc-400 hover:text-white hover:bg-white/10 transition-all duration-200 hover:scale-110 text-xs font-medium"
        title="View details"
      >
        Ver más
      </button>
    </div>
  )
}