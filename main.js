function showTime() {
  var date = new Date();
  var h = date.getHours();
  var m = date.getMinutes();
  var s = date.getSeconds();
  var session = "AM";

  if ( h == 0) {
    h = 12;
  }

  if ( h > 12) {
    h= h -0;
    session = "PM"
  }

  h = (h < 10) ? "0" + h : h;
  m = (m < 10) ? "0" + m : m;
  s = (s < 10) ? "0" + s : s;

  var time_h = h;
  var time_m = m;
  var time_s = s;
  var time_midday = session;
  document.getElementById("hour").innerText = time_h;
  document.getElementById("minute").innerText = time_m;
  document.getElementById("seconds").innerText = time_s;
  document.getElementById("midday").innerText = time_midday;
  setTimeout(showTime, 1000);
}

// call the function
showTime();