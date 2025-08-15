import type { Track} from "../../../types/Track";
import { TrackCard } from "./components/TrackCard";
import { useNavigate } from "react-router-dom";
interface TrackItemProps {
  track: Track;

}

export const TrackItem = ({ track }: TrackItemProps) => {
  const navigate = useNavigate();

  return (
    <div onClick={() => {
      localStorage.setItem("Track", JSON.stringify(track));
      navigate(`/detail/${track.id}`);
    }}>
      <TrackCard track={track} />
    </div>
  );
};
