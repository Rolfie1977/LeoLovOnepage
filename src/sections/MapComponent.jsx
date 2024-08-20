import React, { useState, useEffect, useRef } from "react";
import L from "leaflet";

const MapComponent = () => {
	const mapRef = useRef(null);
	const [map, setMap] = useState(null);

	useEffect(() => {
		if (mapRef.current && !map) {
			const newMap = L.map(mapRef.current).setView(
				[-9.431934134608554, 46.33595528679779],
				10
			);
			setMap(newMap);

			L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
				attribution:
					'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
			}).addTo(newMap);

			L.marker([-9.431934134608554, 46.33595528679779])
				.addTo(newMap)
				.bindPopup("Leo-Lov ApS <br>Maldive rd. 22<br> Seychelles")
				.openPopup();
		}
	}, [mapRef]);

	return (
		<div ref={mapRef} id="maps" style={{ height: "514px", width: "584px" }} />
	);
};

export default MapComponent;
