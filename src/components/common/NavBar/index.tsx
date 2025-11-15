import Blaze from "../../../assets/Blaze.png";
import { Menu } from "./components/Menu";

type NavBarProps = {
  TracksLength: number | undefined
};
export const NavBar = ({TracksLength}:NavBarProps) => {
    const trendingTracksLength =` Trending tracks from Audius • ${TracksLength} songs`
  return (

    <div className="bg-gradient-to-b from-zinc-800 to-black w-full rounded-lg">
      <div className="w-full px-3 sm:px-4 md:px-6 py-4 sm:py-6 md:py-8 max-w-none">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0">

        <div className="flex items-center space-x-2 sm:space-x-4 mb-4 sm:mb-0 w-full sm:w-auto">
          <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-black to-fuchsia-800 rounded-lg flex items-center justify-center flex-shrink-0">
            <img src={Blaze} width={100} height={100} alt="BlazeVibe" />
          </div>
          <div className="display flex flex-col justify-center min-w-0">
            <p className="text-sm sm:text-base md:text-2xl font-bold text-zinc-300 uppercase tracking-wider">
              Home
            </p>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-1 sm:mb-2 truncate">
              Blaze Vibes
            </h1>
            <p className="text-xs sm:text-sm md:text-base text-zinc-300 line-clamp-2">
             {trendingTracksLength}
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-2 sm:space-x-3 self-end sm:self-auto">
          <Menu />
        </div>

        </div>
        <div className="flex items-center space-x-2 sm:space-x-4 mt-4 sm:mt-0 md:mt-4 w-full sm:w-auto justify-end sm:justify-start">
          <button className="bg-fuchsia-900 hover:bg-fuchsia-800 cursor-pointer text-black rounded-full p-2 sm:p-3 md:p-4 transition-all duration-200 hover:scale-105">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          <button className="text-zinc-400 hover:text-white transition-colors">
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8"
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
            <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
