import type { Place } from "../api/Place";

interface MapProps {
    place: Place | null;
}
function Map({place}: MapProps) {
  return (
    <div>this is map</div>
  )
}

export default Map