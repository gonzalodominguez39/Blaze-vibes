import { Player } from '../../Player'

export const PlayerControls = () => {
  return (
    <div className="flex items-center gap-3 flex-1 max-w-2xl">
      {/* Player principal */}
      <div className="flex-1">
        <Player compact={true} />
      </div>
      
    </div>
  )
}