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

    const successFunction = (position) => {
      // Create an object to match Google's Lat-Lng object format
      const { latitude, longitude } = position.coords;
      const myNotebookPosition = {
        lat: latitude,
        lng: longitude
      };

      new google.maps.Marker({
        position: myNotebookPosition,
        map: map,
        title: "I'm here"
      });

      // User granted permission
      // Center the map in the position we got
    };

    const errorFunction = () => {
      // If something goes wrong
      console.log('Error in the geolocation service.');
    };

    navigator.geolocation.getCurrentPosition(successFunction, errorFunction);

  } else {
    console.log('Browser não possui geolocation :(');
  }

};

startMap();


