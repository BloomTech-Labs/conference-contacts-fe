import React from 'react';

export default function connectionMap(props) {
  const { connection } = props;
  console.log({ connection });
  const mapUrl = `https://maps.google.com/maps?q=${connection.senderLat},${connection.senderLon}&t=&z=13&ie=UTF8&iwloc=&output=embed`;
  return (
    <div className="mapouter">
      <div class="gmap_canvas">
        <iframe
          style={{ borderRadius: '1rem' }}
          width="400"
          height="300"
          id="gmap_canvas"
          src={mapUrl}
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
        ></iframe>
        <a href="https://www.emojilib.com"></a>
      </div>
    </div>
  );
}

//<style>.mapouter{position:relative;text-align:right;height:500px;width:600px;}.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:600px;}</style>
