import { useState } from "react";
import { SearchBar } from "../../components/common/NavBar/components/SearchBar";
import { BackButton } from "../../components/common/BackButton";
import { TrackList } from "../../components/common/TrackList";
import { fetchTracksUnderground,fetchTracksByQuery } from "../../services/api/trackService";
import { useQuery } from "@tanstack/react-query";
import { TrackPlayer } from "../../components/common/TrackPlayer";

export const Search = () => {
  const [query, setQuery] = useState<string>("");
  const { data, isLoading, isError } = useQuery({
    queryKey: ["tracksUnderground", query],
    queryFn: () => (query ? fetchTracksByQuery(query) : fetchTracksUnderground()),
  });


  const handleSearch = (searchQuery: string) => {
    setQuery(searchQuery);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex justify-center items-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-fuchsia-500 mx-auto mb-4"></div>
          <p className="text-white text-lg">Loading tracks...</p>
        </div>
      </div>
    );
  }
   if (isError) {
    return (
      <div className="min-h-screen bg-black flex justify-center items-center text-white">
        Error loading tracks.
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-black">
      <div className="pb-24">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mt-6 sm:mt-10 px-3 sm:px-4 md:px-6 py-3 sm:py-4">
          <BackButton path="/" />
          <div className="w-full sm:w-auto">
            <SearchBar handleSearch={handleSearch} />
          </div>
        </div>
        <div className="w-full px-3 sm:px-4 md:px-6 py-4 sm:py-6 md:py-8">
          <TrackList tracks={data?.data||[]} />
        </div>
      </div>
      <TrackPlayer />
    </div>
  );
};
