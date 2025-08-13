import type { Daum } from "../../types/TrackResponse";
import { TrackCard } from "./components/TrackCard";

interface TrackItemProps {
  track: Daum;
}

export const TrackItem = ({ track }: TrackItemProps) => {
  return <TrackCard track={track} />;
};