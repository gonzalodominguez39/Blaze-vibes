import { useState } from "react";
import { SearchBar } from "../../components/common/NavBar/components/SearchBar";
import { BackButton } from "../../components/common/BackButton";
import { TrackList } from "../../components/common/TrackList";
import { fetchTracksUnderground,fetchTracksByQuery } from "../../services/api/trackService";
import { useQuery } from "@tanstack/react-query";

export const Search = () => {
  const [query, setQuery] = useState<string>("");
  const { data, isLoading, isError } = useQuery({
    queryKey: ["tracksUndergraund", query],
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

    <div className="flex justify-between items-center mt-10 p-4">
      <BackButton path="/" />
      <SearchBar handleSearch={handleSearch} />
      
    </div>
    <TrackList tracks={data?.data||[]} />
    </div>
  );
};
