

import { useSearch } from "./hooks/useSearch";

type propsSearch = {
  handleSearch: (query: string) => void;
};

export const SearchBar = ({ handleSearch }: propsSearch) => {
  const { search, handleChangeSearch } = useSearch();

  return (
    <div
      onKeyDown={(e) => e.key === "Enter" && handleSearch(search)}
      className="w-full max-w-2xl mx-auto px-4"
    >
      <div className="flex items-center space-x-4">
        <div className="relative flex-1">
          <input
            className="w-full h-12 pl-12 pr-4 bg-zinc-800 text-white placeholder-zinc-400 rounded-xl border border-zinc-700 focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-500 focus:ring-opacity-50 focus:outline-none transition-all duration-200"
            placeholder="¿Qué quieres escuchar?"
            onChange={handleChangeSearch}
            type="text"
          />
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
        <button
          onClick={() => handleSearch(search)}
          className="h-12 px-6 cursor-pointer bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-medium rounded-xl transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 focus:ring-opacity-50"
        >
          Buscar
        </button>
      </div>
    </div>
  );
};
