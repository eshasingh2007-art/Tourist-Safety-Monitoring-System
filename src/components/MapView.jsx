// export default function MapView() {
//   return (
//     <div style={styles.map}>
//       🗺️ Live Tourist Map
//       <p style={styles.sub}>
//         (Integrate Leaflet / Google Maps here)
//       </p>
//     </div>
//   );
// }

// const styles = {
//   map: {
//     background: "#161a22",
//     borderRadius: "12px",
//     border: "1px solid #222633",
//     height: "400px",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     flexDirection: "column",
//     fontSize: "1.2rem",
//   },
//   sub: {
//     color: "#888",
//     marginTop: "10px",
//   },
// };
import { GoogleMap, LoadScript } from "@react-google-maps/api";

export default function MapView() {
  return (
    <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        mapContainerStyle={{ width: "100%", height: "400px" }}
        center={{ lat: 28.6139, lng: 77.209 }}
        zoom={14}
      />
    </LoadScript>
  );
}
