var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 51.933596, lng:  -8.578540},
          zoom: 14,
          mapTypeId: 'hybrid'
        });
      }
