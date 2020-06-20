import * as $ from "jquery";
import "popper.js";
import "./node_modules/bootstrap/dist/css/bootstrap.css";
import "./node_modules/bootstrap/dist/js/bootstrap";

function openUrl(url) {
  window.open(url, "_blank");
}

$(document).ready(function () {
  $.getJSON("http://jsonip.com/?callback=?", function (data) {
    $.getJSON(
      "http://api.ipstack.com/" +
        data.ip +
        "?access_key=67479427bb41152f0f432820de463aa3&format=1",
      function (res) {
        console.log(res);
        if (res.country_name === "India") {
          document.getElementById("fee-section").innerHTML =
            "Telecounseling fee : Rs. 300";
        } else {
          document.getElementById("fee-section").innerHTML =
            "Telecounseling fee : $15";
        }
      }
    );
  });
});
