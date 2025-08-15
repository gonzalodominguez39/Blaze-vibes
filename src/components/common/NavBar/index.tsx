import Blaze from "../../../assets/Blaze.png";
import { Search } from "../../../views/Search";
type NavBarProps = {
  TracksLength?:Number|undefined
  handleSearch:(query:string) => void
};
export const NavBar = ({TracksLength,handleSearch}:NavBarProps) => {
    const trendingTracksLength =` Trending tracks from Audius • ${TracksLength} songs`
  return (

    <div className="bg-gradient-to-b from-zinc-800 to-black w-full rounded-lg">
      <div className="w-full px-6 py-8 max-w-none">
        <div className="flex justify-between items-center">

        <div className="flex items-center space-x-4 mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-black to-fuchsia-800 rounded-lg flex items-center justify-center">
            <img src={Blaze} width={100} height={100} alt="BlazeVibe" />
          </div>
          <div className="display flex flex-col justify-center">
            <p className="text-2xl font-bold text-zinc-300 uppercase tracking-wider">
              Home
            </p>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-2">
              Blaze Vibes
            </h1>
            <p className="text-zinc-300">
             {trendingTracksLength}
            </p>
          </div>
        </div>
        <Search handleSearch={handleSearch} />

        </div>

        {/* Botones de acción */}
        <div className="flex items-center space-x-6">
          <button className="bg-fuchsia-900 hover:bg-fuchsia-800 cursor-pointer text-black rounded-full p-4 transition-all duration-200 hover:scale-105">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          <button className="text-zinc-400 hover:text-white transition-colors">
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </button>

          <button className="text-zinc-400 hover:text-white transition-colors">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

