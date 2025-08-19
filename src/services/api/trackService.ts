import { instance } from "../AxiosInstance";
import type{ TrackResponse } from "../../types/TrackResponse";
import type { TrackDetail } from "../../types/Track";
import { API_BASE_URL, ENDPOINTS } from "../../constant/API";

export const fetchTrendingTracks = async (): Promise<TrackResponse | null> => {
  console.log("fetch")
  try {
      const { data } = await instance.get<TrackResponse>(ENDPOINTS.TRENDING_TRACKS);
      return data;
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  export const fetchTrackById = async (id: string): Promise<TrackDetail| null> => {
    try {
      const { data } = await instance.get<TrackDetail>(`${ENDPOINTS.TRACKDETAIL}${id}`);
      console.log(`${API_BASE_URL}${ENDPOINTS.TRACKDETAIL}${id}`)
      console.log("desde fetch",data)
      return data;
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  export const fetchTracksByQuery = async (query: string): Promise<TrackResponse | null> => {
    console.log("fetch query");
    try {
      const { data } = await instance.get<TrackResponse >(`${API_BASE_URL}${ENDPOINTS.SEARCHTRACKS}${query}`);
      console.log(`${API_BASE_URL}${ENDPOINTS.SEARCHTRACKS}${query}`)
      console.log("desde fetch",data)
      return data;
    } catch (error) {
      console.error(error);
      return null;
    }
  };