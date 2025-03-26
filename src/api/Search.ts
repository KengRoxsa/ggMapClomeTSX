import type { Place } from "./Place";

interface SearchResponse {
  display_name: string; // ชื่อสถานที่เต็ม
  lat: number; // ละติจูด
  lon: number; // ลองจิจูด
  place_id: number; // ID ของสถานที่
}

export const search = async (term: string) => {
  const res = await fetch(
    `https://nominatim.openstreetmap.org/search?q=${term}&format=json&addressdetails=1&layer=address&limit=5`
  );

  const data: SearchResponse[] = await res.json();
if (!data || data.length === 0) {
  console.log("No data found");
  return;
}

const places: Place[] = data.map((SearchResponse) => {
  return {
    id: SearchResponse.place_id,
    name: SearchResponse.display_name,
    longitude: SearchResponse.lon,
    latitude: SearchResponse.lat,
  };
});
console.log(places); // ตรวจสอบข้อมูล
return places;
};
