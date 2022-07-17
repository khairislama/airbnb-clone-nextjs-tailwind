import { useState } from "react";
import ReactMapGL from "react-map-gl";

function Map() {
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    longitude: -100,
    latitude: 40,
    zoom: 3.5,
  });

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/khairislama/cl5nyroyz009y14r7m3iyondh"
      mapboxAccessToken={process.env.mapbox_key}
      {...viewport}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    ></ReactMapGL>
  );
}
export default Map;
