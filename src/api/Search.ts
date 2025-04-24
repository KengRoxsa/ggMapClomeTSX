import type { Place } from "./Place";

interface SearchResponse {
  display_name: string; // ชื่อสถานที่เต็ม
  lat: string; // ละติจูด (string จาก API)
  lon: string; // ลองจิจูด (string จาก API)
  place_id: number; // ID ของสถานที่
}

export const search = async (term: string): Promise<Place[] | undefined> => {
  const res = await fetch(
    `https://nominatim.openstreetmap.org/search?q=${term}&format=json&addressdetails=1&layer=address&limit=5`
  );

  const data: SearchResponse[] = await res.json();

  if (!data || data.length === 0) {
    console.log("No data found");
    return;
  }

  const places: Place[] = data.map((item) => ({
    id: item.place_id,
    name: item.display_name,
    latitude: parseFloat(item.lat),
    longitude: parseFloat(item.lon),
  }));

  console.log(places); // ตรวจสอบข้อมูล
  return places;
};
