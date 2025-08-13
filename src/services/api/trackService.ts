import { instance } from "../AxiosInstance";
import type{ ResponseTrack } from "../../types/TrackResponse";

const ENDPOINTS = {
  TRENDING_TRACKS: "/v1/tracks/trending?app_name=EXAMPLEAPP",
};

export const fetchTrendingTracks = async (): Promise<ResponseTrack | null> => {
    try {
      const { data } = await instance.get<ResponseTrack>(ENDPOINTS.TRENDING_TRACKS);
      return data;
    } catch (error) {
      console.error(error);
      return null;
    }
  };