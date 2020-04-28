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

//GOOGLE MAPS API SETUP

//   const mapUrl = `https://maps.google.com/maps?q=${connection.senderLat},${connection.senderLon}&t=&z=13&ie=UTF8&iwloc=&output=embed`;

//<style>.mapouter{position:relative;text-align:right;height:500px;width:600px;}.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:600px;}</style>

// <div className="mapouter">
//   <div class="gmap_canvas">
//     <iframe
//       style={{ borderRadius: '1rem' }}
//       width="100%"
//       height="300"
//       id="gmap_canvas"
//       src={mapUrl}
//       frameborder="0"
//       scrolling="no"
//       marginheight="0"
//       marginwidth="0"
//     ></iframe>
//     <a href="https://www.emojilib.com"></a>
//   </div>
// </div>
