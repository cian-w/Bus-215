var map;
var marker;
var chosenStopID;

var stops = [
  {name:'Cloghroe (Coolflugh Terminus)',id:213421,  lat:51.9219469 ,long:-8.6179724},
  {name:'Tower (Model Village)',id:213431, lat:51.9244248 ,long:-8.6133094},
  {name:'Tower Village (Shournagh Valley)', id:213441, lat:51.9254123 ,long:-8.6085096},
  {name:'	St. Annes Hill (Opp Primrose Hill)', id:213451, lat:51.9265999 ,long:-8.6030298},
  {name:'St. Annes Hill (Opp Riverview)', id:213461, lat:51.9281944 ,long:-8.5970029},
  {name:'St. Annes Rd (Opp Willison Park)',id:213471, lat:51.9296511, long:-8.5915554},
  {name:'St. Annes Rd (Opp Glenmaroon Hse)',id:213481, lat:51.930944 ,long:-8.5864685},
  {name:'St. Annes Rd (Blarney School)',id:213491, lat:51.934171 ,long:-8.5718518},
  {name:'Blarney Village (Church)', id:213501, lat:51.9334492 ,long:-8.5668696},
  {name:'Blarney (Station Cross)', id:213511, lat:51.9332301 ,long:-8.5600756},
/*  {name:'Kileens Village', lat:51.9294008 ,long:-8.5220137},
  {name:'Sunset Place (Hillside)', lat:51.9275353 ,long:-8.5119682},
  {name:'North Point (Underpass)', lat:51.9263772 ,long:-8.5006238},
  {name:'New Commons Road (North)', lat:51.9233461 ,long:-8.4974371},
  {name:'New Commons Road (Commons Hotel)', lat:51.9233461 ,long:-8.4974371},
  {name:'Mallow Road (Opp Marriot & Planet)', lat:51.9215668 ,long:-8.4852861}
  {name:'Mallow Road (Opp Sunbeam)', lat:51.919099 ,long:-8.480126},
  {name:'Thomas Davis St (Subway)', lat:51.9113962 ,long:-8.4731337},
  {name:'Watercourse Rd (Opp Maxol Garage)', lat:51.9088827 ,long:-8.4735213},
  {name:'Watercourse Rd (Constellation Bar)', lat:51.9064041 ,long:-8.4744108},
  {name:'Camden Quay (Bridge Street)', lat:51.9011166 ,long:-8.4717444},
  {name:'St. Patrick Street (Marks and Spencer)', lat:51.899785 ,long:-8.4708069},
  {name:'St. Patrick Street (Princes Street Junction)'},
  {name:'Grand Parade (Daybreak)', lat:51.8968767 ,long:-8.4749288},
  {name:'South Mall (VHI House Stop A)', lat:51.8967343 ,long:-8.4714322},
  {name:'Cork City Hall', lat:51.896683 ,long:-8.4663413},
  {name:'Southern Rd (Opp Owl Printers)', lat:51.8921448 ,long:-8.4657321},
  {name:'Douglas Road (Glengesh Bellair)', lat:51.8885221 ,long:-8.4584359},
  {name:'Ballinlough Road (Opp Knockrea Lawn)', lat:51.8898827 ,long:-8.4537679},
  {name:'Ballinlough Road (Our Lady Church)', lat:51.8898827 ,long:-8.4537679},
  {name:'Ballinlough Road (Opp Pic Du Jer Park)', lat:51.8899486 ,long:-8.4509626},
  {name:'Ballinlough Road (Community Centre)', lat:51.8898371 ,long:-8.4489265},
  {name:'Ballinlough Road (Opp Sundrive Park)', lat:51.8891287 ,long:-8.4432384},
  {name:'Ballinlough Road (Shrewsbury Estate)', lat:51.888604 ,long:-8.4413136},
  {name:'Ballinlough Road (Opp Carrigmore Park)', lat:51.8882116 ,long:-8.4370348},
  {name:'Churchyard Lane (Silverdale)', lat:51.8869449 ,long:-8.4335669},
  {name:'Skehard Road (Opposite Park Hill)', lat:51.8866954 ,long:-8.4294079},
  {name:'Skehard Road (Ashleigh Rise)', lat:51.8870996 ,long:-8.4248451},
  {name:'Skehard Road (Opp Clover Lawn)', lat:51.8879251 ,long:-8.4218236},
  {name:'Skehard Road (Clontarf Estate)', lat:51.8884831 ,long:-8.4184302},
  {name:'Skehard Road (Opp Service Station)', lat:51.8901516 ,long:-8.4142993},
  {name:'Mahon Point Road (CSO Office)', lat:51.8893457 ,long:-8.4123353},
  {name:'Mahon Point Rd (City Gate)', lat:51.8871042 ,long:-8.4082649},
  {name:'Mahon Point Rd (Mahon Point Centre)', lat:51.8853897 ,long:-8.4005659},
  {name:'Jacobs Island (Sanctuary Rd Outbound)', lat:51.8824316 ,long:-8.3969726},
  {name:'Jacobs Island (Sanctuary Rd Inbound)', lat:51.8823333 ,long:-8.3968119},
  {name:'Mahon Point (Johnson & Perrott Garage)', lat:51.8852647 ,long:-8.4018637}*/
];

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 51.933596, lng:  -8.578540},
    zoom: 14,
    mapTypeId: 'hybrid'
  });

  var styles = [
    {
      'featureType': 'transit.station.bus',
      'stylers': [{
        'visibility': 'off'
      }]
    }
  ];

  map.setOptions({styles:styles});

  for(var i=0; i<stops.length; i++){
    var mypos = new google.maps.LatLng(stops[i].lat, stops[i].long);
    var id = stops[i].id;
    marker = new google.maps.Marker({
      position: mypos,
      map: map,
      title: stops[i].name,
      id: id
    });
    google.maps.event.addListener(marker, 'click', function() {
      var stopName = $('#stopName');
      chosenStopID = this.id;
      chosenStopName = this.title;
      stopName.html('<b>Selected Bus Stop:</b> ' + this.title );
  });
  }
}



$(document).ready(function() {

    var stop1ID = localStorage.getItem('stop1ID');
    var stopName = localStorage.getItem('stop1Name');

    if(stop1ID == null) {
      $('.link').html('Add Stop');
    } else {
      $('.link').html(stopName);
      getTimes(stop1ID);
    }

  $('.expand').click(function(){
    $('.stop').animate({height: "40px"});
    $(this).parent().animate({height: "280px"},{queue:false});
    $('#expand1').hide();
    $('#due1').show();
    $('#due2').show();
    $('#due3').show();
    $('#manageOne').show();
  });

  $('#manageOne').click(function(){
    $('.popup').show();
  });

  $('.link').click(function(){
    $('.popup').show();
  });

  $('.link').on('click',initMap);


  $('#manageOne').on('click',initMap);


  $('#cancel').on('click', function(){
    $('.popup').hide();
  });

  $('#save').on('click', function(){
    localStorage.setItem('stop1ID', chosenStopID);
    localStorage.setItem('stop1Name', chosenStopName);
    stopName = localStorage.getItem('stop1Name');
    chosenStopID = localStorage.getItem('stop1ID');
    getTimes(chosenStopID);
    $('.link').html(stopName);
    $('.popup').hide();

  });

});


function getTimes(id) {
var xmlhttp = new XMLHttpRequest();
var url = "https://data.dublinked.ie/cgi-bin/rtpi/realtimebusinformation?stopid=" + id + "&format=json";

xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var myArr = JSON.parse(this.responseText);
    myFunction(myArr);
  }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();
}

function myFunction(arr) {
  var due1 = arr.results[0].duetime;
  var due2 = arr.results[1].duetime;
  var due3 = arr.results[2].duetime;

  if(due1.length < 3){
    document.getElementById("due1").innerHTML = due1 + ' mins';
  } else {
    document.getElementById("due1").innerHTML = due1;
  }

  if(due2.length < 3){
    document.getElementById("due2").innerHTML = due2 + ' mins';
  } else {
    document.getElementById("due2").innerHTML = due2;
  }

  if(due3.length < 3){
    document.getElementById("due3").innerHTML = due3 + ' mins';
  } else {
    document.getElementById("due3").innerHTML = due3;
  }

}
