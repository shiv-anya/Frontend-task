import React, {useEffect, useState} from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
const Maps = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("https://disease.sh/v3/covid-19/countries").then(res => res.json())
            .then(data => {
                setData(data.slice(0,213));
        })
    }, [])
    console.log(data)
    return (
        <div>
            <h1 className="text-center text-xl text-blue-500">Covid Cases Country Wise</h1>
            <MapContainer center={[30, 0]} zoom={3} scrollWheelZoom={false}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                {data.map((location) => (
                <Marker position={[location.countryInfo.lat, location.countryInfo.long]} key={location.country}>
                    <Popup>
                    <div>{location.country}</div>
                    <div>Cases: {location.cases}</div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
        </div>
          );
}

export default Maps;