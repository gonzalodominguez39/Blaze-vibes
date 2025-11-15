import { Player } from '../../Player'

export const PlayerControls = () => {
  return (
    <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
      {/* Player principal */}
      <div className="flex-1 min-w-0">
        <Player compact={true} />
      </div>
    </div>
  )
}