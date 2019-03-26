function startTime() {
  var weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";
  var today = new Date();
  var det = today.getDay();
  var de = weekday[det];
  var mn = today.getMonth() + 1;
  var dy = today.getDate();
  var yr = today.getFullYear();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();

  m = checkTime(m);
  s = checkTime(s);

  var date = de + " " + mn + "-" + dy + "-" + yr;
  var time = h + ":" + m + ":" + s;

  document.getElementById('txt').innerHTML = date + ",  " + time + " CDT";

  var t = setTimeout(startTime, 500);
}
function checkTime(i) {
  if (i < 10) {
    i = "0" + i
  };
  return i;
}
