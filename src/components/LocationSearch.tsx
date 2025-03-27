import type { Place } from "../api/Place";
import { Fragment, useState } from "react";
import { search } from "../api/Search";

interface LocationSearchProps {
    onPlaceClick: (place: Place) => void;
}

function LocationSearch({ onPlaceClick }: LocationSearchProps) {
    const [places, setPlaces] = useState<Place[]>([]);
    const [term, setTerm] = useState("");

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const result = await search(term);
        setPlaces(result || []);
    };

    return (
        <div className="p-4 bg-white rounded-lg shadow-md">
            <form onSubmit={handleSubmit} className="space-y-3">
                <label className="font-bold block" htmlFor="term">
                    Search Here
                </label>
                <input
                    type="text"
                    className="border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 px-4 py-2 w-full"
                    id="term"
                    value={term}
                    onChange={(e) => setTerm(e.target.value)}
                />
            </form>

            <h1 className="font-bold mt-4">Found Location</h1>

            <div className="mt-3 divide-y divide-gray-300">
                {places.map((place) => (
                    <Fragment key={place.id}>
                        <div className="flex justify-between items-center py-7">
                            <p className="text-m">{place.name}</p>
                            <button
                                className="bg-blue-500 text-xs text-white font-bold py-1 px-2 rounded hover:bg-blue-600 transition"
                                onClick={() => onPlaceClick(place)}
                            >
                                Select
                            </button>
                        </div>
                    </Fragment>
                ))}
            </div>
        </div>
    );
}

export default LocationSearch;
