import React from 'react';
import { Map, TileLayer, Marker, Popup, Circle } from 'react-leaflet';
export default function connectionMap(props) {
  const { connection } = props;
  console.log({ connection });
  const lat = connection.senderLat;
  const lng = connection.senderLon;
  const receiverLat = connection.receiverLat;
  const receiverLon = connection.receiverLon;
  //displays sender's location when showing a remote swaap, right now there is no way to check who was the sender or receiver of a remote swaap
  if (typeof connection.senderLat !== 'undefined' && connection.location !== 'REMOTE')
    return (
      <Map style={{ height: '300px', width: '100%' }} center={[lat, lng]} zoom={13}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[lat, lng]}>
          <Popup>Where you Swaaped!</Popup>
        </Marker>
      </Map>
    );
  else if (typeof connection.senderLat !== 'undefined' && connection.receiver === connection.userId)
    return (
      <Map
        style={{ height: '300px', width: '400px', borderRadius: '1rem' }}
        center={[receiverLat, receiverLon]}
        zoom={13}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Circle center={[receiverLat, receiverLon]} radius={500}>
          <Popup>Where {connection.receiverName} Swaaped!</Popup>
        </Circle>
      </Map>
    );
  else if (typeof connection.senderLat !== 'undefined' && connection.sender === connection.userId)
    return (
      <Map
        style={{ height: '300px', width: '400px', borderRadius: '1rem' }}
        center={[lat, lng]}
        zoom={13}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Circle center={[lat, lng]} radius={500}>
          <Popup>Where {connection.senderName} Swaaped!</Popup>
        </Circle>
      </Map>
    );
  else {
    return null;
  }
}
