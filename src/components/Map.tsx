import type { Place } from "../api/Place";
import  { useEffect } from "react";
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';

interface MapProps {
    place: Place | null;
}

// Component สำหรับเลื่อนแผนที่เมื่อ `place` เปลี่ยน
function MapController({ place }: { place: Place | null }) {
    const map = useMap();

    useEffect(() => {
        if (place) {
            map.flyTo([place.latitude, place.longitude], 12);
        }
    }, [place, map]);

    return null;
}

function Map({ place }: MapProps) {
    return (
        <div className="h-full w-full rounded-lg shadow-md overflow-hidden">
            <MapContainer
                center={place ? [place.latitude, place.longitude] : [51.505, -0.09]}
                zoom={12}
                scrollWheelZoom
                className="h-full w-full"
            >
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

                {place && (
                    <Marker position={[place.latitude, place.longitude]}>
                        <Popup>{place.name}</Popup>
                    </Marker>
                )}

                <MapController place={place} />
            </MapContainer>
        </div>
    );
}

export default Map;
