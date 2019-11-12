const startMap = () => {
  const mapDiv = document.querySelector('#map');
  const ironhackLocation = {
      lat: -23.5617375,
      lng: -46.6623218
  };

  // Centralizar o mapa
  const map = new google.maps.Map(
    mapDiv,
    {
      zoom: 8,
      center: ironhackLocation
    }
  );
};


startMap();