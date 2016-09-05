$(document).ready(function() {

  $('.expand').click(function(){
    $('.stop').animate({height: "40px"});
    $(this).parent().animate({height: "200px"},{queue:false});
  });



});


var xmlhttp = new XMLHttpRequest();
var url = "https://data.dublinked.ie/cgi-bin/rtpi/realtimebusinformation?stopid=213471&format=json";

xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText);
        myFunction(myArr);
        console.log(myArr);
    }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

function myFunction(arr) {
   var due1 = arr.results[0].duetime;
   var due2 = arr.results[1].duetime;
   var due3 = arr.results[2].duetime;

    document.getElementById("due1").innerHTML = due1;
    document.getElementById("due2").innerHTML = due2;
    document.getElementById("due3").innerHTML = due3;

}
