import "./App.css";
import Map from "./components/Map";
import LocationSearch from "./components/LocationSearch";
import type { Place } from "./api/Place";
import { useState } from "react";


function App() {
  const [place, setPlace] = useState<Place | null>(null);

  return (
    <div className="h-screen w-screen grid grid-cols-12 bg-gray-100 p-4">
      {/* Sidebar */}
      <div className="col-span-3 bg-white shadow-lg rounded-xl p-4">
        <LocationSearch onPlaceClick={(p) => setPlace(p)} />
      </div>

      {/* Map Section */}
      <div className="col-span-9 flex items-center justify-center">
        <div className="w-full h-full rounded-xl overflow-hidden shadow-md">
          <Map place={place} />
        </div>
      </div>
    </div>
  );
}

export default App;

// function App() {
//   const [place, setPlace] = useState<Place | null>(null);
//   return (
//     <div className=" h-screen w-screen grid grid-cols-12">
//       <div className="col-span-3 p-2">

//         <LocationSearch onPlaceClick={(p) => setPlace(p)}/>
//           {/* เยี่ยมมาก p มีบอกด้วยว่าเป็น place */}
//           {/* เหมือนเรียก fn ทั่วไป แต่เพราะต้องการ prop เลยเขียนงี้แทน onPlaceClick={(p) => setPlace(p)*/}
//       </div>
//       <div className="col-span-9">
//         <Map place={place}/>
//       </div>

//     </div>
//   );
// }

// export default App;
