import type { Track} from "../../../types/Track";
import { TrackCard } from "./components/TrackCard";
interface TrackItemProps {
  track: Track;

}

export const TrackItem = ({ track }: TrackItemProps) => {

  return (
   <TrackCard track={track} />    
  );
};
