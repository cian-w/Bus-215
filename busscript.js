//213471

var x = new XMLHttpRequest();

x.onreadystatechange = function () {

  if (x.readyState == 4 && x.status == 200) {
    var myArr = JSON.parse(x.responseText);
    times(myArr);
  }
};

x.open ("GET" , "https://data.dublinked.ie/cgi-bin/rtpi/realtimebusinformation?stopid=213471&format=json", true);
x.send();

function times(data) {

  var dueTimes = document.getElementsByTagName('results')[0];
  var result = document.getElementsByTagName('result');
  var time = document.getElementsByTagName('duetime');

  var one = dueTimes.result[0].time;
  var two = dueTimes.result[1].time;

  document.getElementById("times").innerHTML = "Due: " + one + "Second: " + two;


}
