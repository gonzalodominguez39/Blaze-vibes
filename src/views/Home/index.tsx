import { TrackList } from "../../components/common/TrackList";
import {
  fetchTrendingTracks,
} from "../../services/api/trackService";
import { useQuery } from "@tanstack/react-query";
import { NavBar } from "../../components/common/NavBar";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { TrackPlayer } from "../../components/common/TrackPlayer";

export const Home = () => {
const isLogin = localStorage.getItem("isLogin") === "true";

  const { data, isLoading, isError } = useQuery({
    queryKey: ["tracks"],
    queryFn: () => fetchTrendingTracks(),
  });
  const navigation = useNavigate();

useEffect(() => {

  if (!isLogin) {
    navigation("/login");
  } 
}, [isLogin, navigation]);

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
      <div className="pb-24 md:pb-24"> {/* Padding-bottom para el player fijo */}
        <NavBar TracksLength={data?.data?.length} />
        <div className="w-full px-3 sm:px-4 md:px-6 py-4 sm:py-6 md:py-8">
          {data?.data && <TrackList tracks={data.data} />}
        </div>
      </div>
      <TrackPlayer />
    </div>
  );
};
