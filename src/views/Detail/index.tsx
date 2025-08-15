import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchTrackById } from "../../services/api/trackService";
import { API_BASE_URL } from "../../constant/API";
import type { Track } from "../../types/Track";

import {
  TrackInfo,
  TrackStats,
  TrackDescription,
  TrackArtwork,
  TrackDetails,
  BackButton,
  LoadingState,
  ErrorState,
} from "./components";
import { Player } from "../../components/common/Player";



export const Detail = () => {
  const { id } = useParams<{ id: string }>();
 const trackStreamUrl = `${API_BASE_URL}/v1/tracks/${id}/stream`;
 console.log("trackStreamUrl:", trackStreamUrl);
  const {
    data: response,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["track", id],
    queryFn: () => fetchTrackById(id!),
    enabled: !!id,
  });

  const track: Track | undefined = response?.data || undefined;

  if (isLoading) {
    return <LoadingState />;
  }

  if (error || !track) {
    return <ErrorState />;
  }

  console.log("stream:", track?.stream);
  return (
    track && (
      <div className="min-h-screen bg-black">
        <div className="bg-gradient-to-b from-zinc-900 via-zinc-800 to-black">
          <div className="w-full px-6 py-8">
            <BackButton />

            {/* Información principal del track */}
            <div className="flex flex-col lg:flex-row items-start lg:items-end space-y-6 lg:space-y-0 lg:space-x-8">
              <TrackArtwork track={track} />
              <TrackInfo track={track} />
            </div>
          </div>
        </div>
        <div className="w-full px-6 py-8">
          {trackStreamUrl? (
            <Player url={trackStreamUrl} />
          ) : (
            <div>Track is not available for streaming</div>
          )}

          <TrackStats track={track} />
          <TrackDescription track={track} />
          <TrackDetails track={track} />
        </div>
      </div>
    )
  );
};
