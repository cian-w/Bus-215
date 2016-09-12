var map;
var stops = [];
  stops[1] = {name:'Cloghroe (Coolflugh Terminus)', lat:51.9219465100951 ,long:-8.61797176722262};
  stops[2] = {name:'Tower (Model Village)', lat:51.9270744 ,long:-8.6105043};
  stops[3] = {name:'Tower Village (Shournagh Valley)', lat:51.9254898 ,long:-8.6100269};
  stops[4] = {name:'	St. Annes Hill (Opp Primrose Hill)', lat:51.9264227 ,long:-8.6051399};
  stops[5] = {name:'St. Annes Hill (Opp Riverview)', lat:51.9279499 ,long:-8.5975348};
  stops[6] = {name:'St. Annes Rd (Opp Willison Park)', lat:51.929192 ,long:-8.5931762};
  stops[7] = {name:'St. Annes Rd (Opp Glenmaroon Hse)', lat:51.9305873 ,long:-8.5876889};
  stops[8] = {name:'St. Annes Rd (Blarney School)', lat:51.9340507 ,long:-8.5723501};
  stops[9] = {name:'Blarney Village (Church)', lat:51.9333848 ,long:-8.5674488};
  stops[10] = {name:'Blarney (Station Cross)', lat:51.9334677 ,long:-8.5613333};
  stops[11] = {name:'Kileens Village', lat:51.9294008 ,long:-8.5220137};
  stops[12] = {name:'Sunset Place (Hillside)', lat:51.9275353 ,long:-8.5119682};
  stops[13] = {name:'North Point (Underpass)', lat:51.9263772 ,long:-8.5006238};
  stops[14] = {name:'New Commons Road (North)', lat:51.9233461 ,long:-8.4974371};
  stops[15] = {name:'New Commons Road (Commons Hotel)', lat:51.9233461 ,long:-8.4974371};
  stops[16] = {name:'Mallow Road (Opp Marriot & Planet)', lat:51.9215668 ,long:-8.4852861};
  stops[17] = {name:'Mallow Road (Opp Sunbeam)', lat:51.919099 ,long:-8.480126};
  stops[18] = {name:'Thomas Davis St (Subway)', lat:51.9113962 ,long:-8.4731337};
  stops[19] = {name:'Watercourse Rd (Opp Maxol Garage)', lat:51.9088827 ,long:-8.4735213};
  stops[20] = {name:'Watercourse Rd (Constellation Bar)', lat:51.9064041 ,long:-8.4744108};
  stops[21] = {name:'Camden Quay (Bridge Street)', lat:51.9011166 ,long:-8.4717444};
  stops[22] = {name:'St. Patrick Street (Marks and Spencer)', lat:51.899785 ,long:-8.4708069};
  stops[23] = {name:'St. Patrick Street (Princes Street Junction)'};
  stops[24] = {name:'Grand Parade (Daybreak)', lat:51.8968767 ,long:-8.4749288};
  stops[25] = {name:'South Mall (VHI House Stop A)', lat:51.8967343 ,long:-8.4714322};
  stops[26] = {name:'Cork City Hall', lat:51.896683 ,long:-8.4663413};
  stops[27] = {name:'Southern Rd (Opp Owl Printers)', lat:51.8921448 ,long:-8.4657321};
  stops[29] = {name:'Douglas Road (Glengesh Bellair)', lat:51.8885221 ,long:-8.4584359};
  stops[30] = {name:'Ballinlough Road (Opp Knockrea Lawn)', lat:51.8898827 ,long:-8.4537679};
  stops[31] = {name:'Ballinlough Road (Our Lady Church)', lat:51.8898827 ,long:-8.4537679};
  stops[32] = {name:'Ballinlough Road (Opp Pic Du Jer Park)', lat:51.8899486 ,long:-8.4509626};
  stops[33] = {name:'Ballinlough Road (Community Centre)', lat:51.8898371 ,long:-8.4489265};
  stops[34] = {name:'Ballinlough Road (Opp Sundrive Park)', lat:51.8891287 ,long:-8.4432384};
  stops[35] = {name:'Ballinlough Road (Shrewsbury Estate)', lat:51.888604 ,long:-8.4413136};
  stops[36] = {name:'Ballinlough Road (Opp Carrigmore Park)', lat:51.8882116 ,long:-8.4370348};
  stops[37] = {name:'Churchyard Lane (Silverdale)', lat:51.8869449 ,long:-8.4335669};
  stops[38] = {name:'Skehard Road (Opposite Park Hill)', lat:51.8866954 ,long:-8.4294079};
  stops[39] = {name:'Skehard Road (Ashleigh Rise)', lat:51.8870996 ,long:-8.4248451};
  stops[40] = {name:'Skehard Road (Opp Clover Lawn)', lat:51.8879251 ,long:-8.4218236};
  stops[41] = {name:'Skehard Road (Clontarf Estate)', lat:51.8884831 ,long:-8.4184302};
  stops[42] = {name:'Skehard Road (Opp Service Station)', lat:51.8901516 ,long:-8.4142993};
  stops[43] = {name:'Mahon Point Road (CSO Office)', lat:51.8893457 ,long:-8.4123353};
  stops[44] = {name:'Mahon Point Rd (City Gate)', lat:51.8871042 ,long:-8.4082649};
  stops[45] = {name:'Mahon Point Rd (Mahon Point Centre)', lat:51.8853897 ,long:-8.4005659};
  stops[46] = {name:'Jacobs Island (Sanctuary Rd Outbound)', lat:51.8824316 ,long:-8.3969726};
  stops[47] = {name:'Jacobs Island (Sanctuary Rd Inbound)', lat:51.8823333 ,long:-8.3968119};
  stops[48] = {name:'Mahon Point (Johnson & Perrott Garage)', lat:51.8852647 ,long:-8.4018637};


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


      }

      $(document).ready(function() {

        $('.expand').click(function(){
          $('.stop').animate({height: "40px"});
          $(this).parent().animate({height: "200px"},{queue:false});
          $('#expand1').hide();
          $('#due1').show();
          $('#due2').show();
          $('#due3').show();
          $('#manageOne').show();
        });

        $('#manageOne').click(function(){
          $('.popup').show();
        });

        $('#manageOne').on('click',initMap);


        $('#cancel').on('click', function(){
          $('.popup').hide();
        });

      });



      var xmlhttp = new XMLHttpRequest();
      var url = "https://data.dublinked.ie/cgi-bin/rtpi/realtimebusinformation?stopid=213471&format=json";

      xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          var myArr = JSON.parse(this.responseText);
          myFunction(myArr);
        }
      };
      xmlhttp.open("GET", url, true);
      xmlhttp.send();

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
