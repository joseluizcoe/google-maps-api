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

  // Criando uma marcação no mapa.
  // Mais detalhes em:
  // https://developers.google.com/maps/documentation/javascript/reference/
  // ---
  const locationMark = new google.maps.Marker({
    position: ironhackLocation,
    map: mapDiv,
    title: "Estou aqui!"
  });


  if (navigator.geolocation) {
    // Se o browser suportar o uso de geolocalização,
    // aparecerá um alerta pedindo permissão

    navigator.geolocation.getCurrentPosition(successFunctionWithPositionParam, errorFunction);

  } else {
    console.log('Browser não possui geolocation :(');
  }

};

startMap();


