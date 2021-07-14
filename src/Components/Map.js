import React from 'react'
import L from 'leaflet'
import { MapContainer, TileLayer, Marker, Tooltip } from 'react-leaflet'
import icon from "../icon.png"
import './map.css'

//Create icon
const GetIcon = (iconWidth, iconHeight) =>{
  return L.icon({
    iconUrl: icon,
    iconSize: [iconWidth, iconHeight],
    iconAnchor: [iconWidth/2, iconHeight],
    tooltipAnchor: [iconWidth/2, -iconHeight/2],
    className: 'map-icon'
  })
}

const Map = () => {
  const position = [50.73721334823761, 17.91087950459593]

  return (
  <div>
    <MapContainer 
      center={position} 
      zoom={14} 
      scrollWheelZoom={false}
      minZoom={5}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} icon={GetIcon(30, 45)}>
        <Tooltip direction="right" offset={[0, 0]} opacity={1} permanent>
          <span className="tooltip-label">Znajdziesz nas tutaj</span>
        </Tooltip>
        {/* <Popup></Popup> */}
      </Marker>
    </MapContainer>
  </div>
    
  )
}

export default Map