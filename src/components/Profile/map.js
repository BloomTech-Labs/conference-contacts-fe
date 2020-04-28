import React from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
export default function connectionMap(props) {
  const { connection } = props;
  console.log({ connection });
  const lat = connection.senderLat;
  const lng = connection.senderLon;
  //displays sender's location when showing a remote swaap, right now there is no way to check who was the sender or receiver of a remote swaap
  return typeof connection.senderLat !== 'undefined' ? (
    <Map
      style={{ height: '300px', width: '400px', borderRadius: '1rem' }}
      center={[lat, lng]}
      zoom={13}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[lat, lng]}>
        <Popup>Where you Swaaped!</Popup>
      </Marker>
    </Map>
  ) : null;
}