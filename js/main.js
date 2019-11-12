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
    map: map,
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
        title: "Meu notebook"
      });

      // User granted permission
      // Center the map in the position we got
    };

    const errorFunction = () => {
      // If something goes wrong
      console.log('Error in the geolocation service.');
    };

    navigator.geolocation.getCurrentPosition(successFunction, errorFunction);

    
    // Direções
    // https://developers.google.com/maps/documentation/javascript/reference/

    const directionsService = new google.maps.DirectionsService;
    const directionsDisplay = new google.maps.DirectionsRenderer;
  
    const directionRequest = {
      origin: ironhackLocation,
      destination: 'Alameda Santos, 2335',
      travelMode: 'WALKING'
    };
    
    directionsService.route(
      directionRequest,
      function(response, status) {
        if (status === 'OK') {
          // everything is ok
          directionsDisplay.setDirections(response);
    
        } else {
          // something went wrong
          window.alert('Directions request failed due to ' + status);
        }
      }
    );
    
    directionsDisplay.setMap(map);

  } else {
    console.log('Browser não possui geolocation :(');
  }

};

startMap();


